import { isFunction, find, reduce, map, flow } from 'lodash'

import countryRules from '../countries/rules'
import getCountryISO2 from '../countries/ISO2'

const processGoogleGeocoderResult = googleAddress => {
  const baseAddress = {
    addressId: '1',
    addressType: 'residential',
    city: null,
    complement: null,
    country: null,
    geoCoordinates: [],
    neighborhood: null,
    number: null,
    postalCode: null,
    receiverName: null,
    reference: null,
    state: null,
    street: null,
  }

  const rules = countryRules[getCountry(googleAddress)]

  if (!rules) {
    console.warn(
      `We don't have geolocation rules for the country: ${getCountry(
        googleAddress
      )}`
    )
    return baseAddress
  }

  const geolocationRules = rules.geolocation

  const address = flow([
    setAddressFields,
    runGeolocationFieldHandlers,
    setGeoCoordinates,
    setCountry,
    newAddress => ({
      ...newAddress,
      addressId: baseAddress.addressId,
      addressType: baseAddress.addressType,
      receiverName: baseAddress.receiverName,
    }),
  ])()

  // The functions below use googleAddress and geolocationRules
  // from the closure created.

  function setAddressFields() {
    const indexedRules = revertRuleIndex(geolocationRules)

    return reduce(
      googleAddress.address_components,
      (updatedAddress, component) => {
        const checkoutFieldName = getCheckoutFieldName(
          component.types,
          indexedRules
        )

        if (checkoutFieldName) {
          return setAddressFieldValue(
            updatedAddress,
            checkoutFieldName,
            geolocationRules,
            component
          )
        }

        return updatedAddress
      },
      {}
    )
  }

  function setGeoCoordinates(updatedAddress) {
    const { location } = googleAddress.geometry

    updatedAddress.geoCoordinates = [
      isFunction(location.lng) ? location.lng() : location.lng,
      isFunction(location.lat) ? location.lat() : location.lat,
    ]

    return updatedAddress
  }

  // Run custom function handlers to fill some fields
  function runGeolocationFieldHandlers(updatedAddress) {
    map(geolocationRules, (rule, propName) => {
      if (rule.handler) {
        updatedAddress = rule.handler(address, googleAddress)
      }
    })

    map(geolocationRules, rule => {
      if (rule.handler) {
        updatedAddress = rule.handler(address, googleAddress)
      }
    })

    return updatedAddress
  }

  function setCountry(updatedAddress) {
    const country = getCountry(googleAddress)
    updatedAddress.country = country
    return updatedAddress
  }

  return address
}

/** This function creates a map like this:
 * {
 *   "postal_code": "postalCode",
 *   "street_number": "number",
 *   "route": "street",
 *   "neighborhood": "neighborhood",
 *   "sublocality_level_1": "neighborhood",
 *   "sublocality_level_2": "neighborhood",
 *   "sublocality_level_3": "neighborhood",
 *   "sublocality_level_4": "neighborhood",
 *   "sublocality_level_5": "neighborhood",
 *   "administrative_area_level_1": "state",
 *   "administrative_area_level_2": "city",
 *   "locality": "city"
 * }
 * So it's easy to find which Google address type matches ours
 * */
function revertRuleIndex(geolocationRules) {
  return reduce(
    geolocationRules,
    (acc, value, propName) => {
      for (let i = 0; i < value.types.length; i++) {
        const type = value.types[i]
        acc[type] = propName
      }
      return acc
    },
    {}
  )
}

// Return the matched checkout field name
function getCheckoutFieldName(types, indexedRules) {
  const mappedType = find(types, type => indexedRules[type])
  return mappedType ? indexedRules[mappedType] : null
}

function setAddressFieldValue(
  address,
  fieldName,
  geolocationRules,
  addressComponent
) {
  const geolocationField = geolocationRules[fieldName]
  address[fieldName] = addressComponent[geolocationField.valueIn]
  return address
}

function getCountry(googleAddress) {
  const countryComponent = find(
    googleAddress.address_components,
    component => component.types.indexOf('country') !== -1
  )

  return countryComponent ? getCountryISO2(countryComponent.short_name) : null
}

/* END OF COPY-PASTED CODE FROM ADDRESS-FORM  */

export const queries = {
  reverseGeocode: async (_: any, args: any, ctx: Context): Promise<any> => {
    const { clients } = ctx
    const { lat, lng } = args

    const googleAddress = await clients.googleGeolocation.reverseGeocode(
      lat,
      lng
    )

    return processGoogleGeocoderResult(googleAddress.results[0])
  },
}

import React from 'react'
import { Box, Layout, PageHeader } from 'vtex.styleguide'

import './global.css'

const App: React.FC = () => {
  return (
    <Layout pageHeader={<PageHeader title="Teste do Pedro" />}>
      <Box>Hello World</Box>
    </Layout>
  )
}

export default App

import { Service } from "@vtex/api";

interface Person {
  id: string;
  name: string;
  friends: string[];
}

const people: Person[] = [
  {
    id: "1",
    name: "Pedro",
    friends: ["2", "3"]
  },
  {
    id: "2",
    name: "Max",
    friends: ["1"]
  },
  {
    id: "3",
    name: "Artur",
    friends: []
  }
];

export default new Service({
  graphql: {
    resolvers: {
      Query: {
        user: (_, { id }: { id: string }) =>
          people.find(({ id: userId }) => userId === id),
        users: () => people
      },
      Person: {
        friends: ({ friends }: Person) =>
          friends.map(id => people.find(({ id: friendId }) => friendId === id))
      }
    }
  }
});

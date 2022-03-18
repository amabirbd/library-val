import {gql} from 'apollo-server-micro';

export const typeDefs = gql`
type Link {
    id: String
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
}

type Series {
    id: String
    title: String
    books: [Book]
}

type Book {
    id: String
    name: String
    author: String
    image: String
    isbn: String
    description: String
    series: [Series]
}

type Query {
    links: [Link]!
    series: [Series]!
    books: [Book]!
}
`
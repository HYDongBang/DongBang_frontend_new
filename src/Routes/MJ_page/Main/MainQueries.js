import { gql } from "apollo-boost";

export const READ_ALL_CLUBS = gql `
    query {
        readAllClubs {
        name
        type
        description
        logoImage
        }
    }
`


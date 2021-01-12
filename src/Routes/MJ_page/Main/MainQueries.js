import { gql } from "apollo-boost";

export const READ_ALL_CLUBS = gql `
    query {
        readAllClubs {
            id
            name
            type
            description
            logoImage
            clubImage
        }
    }
`


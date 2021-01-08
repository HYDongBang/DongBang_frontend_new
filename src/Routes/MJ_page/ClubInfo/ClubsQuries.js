import { gql } from "apollo-boost";

export const READ_LOGGED_IN_USER = gql `
    query {
        readLoggedInUser{
            id
            email
            clubMaster{
                id
            }
        }
    }
`


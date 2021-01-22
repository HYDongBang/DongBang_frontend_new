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
            master{
                id
            }
        }
    }
`
export const READ_LOGGED_IN_USER = gql `
    query {
        readLoggedInUser{
            clubMaster{
                id
            }
        }
    }
`

export const LOG_IN = gql`
    {
        isLoggedIn @client
    }
`;

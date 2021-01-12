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

export const READ_CLUB = gql `
    query readClub($id: Int){
        readClub(id: $id){
                master{
                    id
                }
            logoImage,
            }
        }
`





import { gql } from "apollo-boost";

export const READ_CLUB = gql `
    query readClub($id: Int!){
        readClub(id: Int){
        name,
        type,
        description,
        content,
        clubImage,
        logoImage,
        partyDay,
        party
        }
    }
`


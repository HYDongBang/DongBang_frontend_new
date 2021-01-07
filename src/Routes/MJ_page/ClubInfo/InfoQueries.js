import { gql } from "apollo-boost";

export const READ_CLUB = gql `
    query readClub($id: Int){
        readClub(id: $id){
            name,
            type,
            description,
            content,
            clubImage,
            logoImage,
            partyDay,
            party,
            numberOfMembers,
            isUnion,
            email,
            phoneNumber,
            facebookUrl,
            instagramUrl,
            posts{
              fileUrl,
              title,
              content
            }
        }
    }
`


import { gql } from "apollo-boost";

export const READ_ROOM_BY_CLUB_ID = gql `
    query readRoomByClubId($clubId: Int!){
        readRoomByClubId(clubId: $clubId){
            id
            messages{
                to{
                  email
                }
                from{
                  email
                }
                text
                createdAt
              }
        }
    }
`


export const CREATE_MESSAGE = gql `
    mutation createMessage($roomId: Int, $toId: Int, $text: String!){
        createMessage(roomId:$roomId, toId:$toId, text:$text){
            id
            text
            createdAt
            to{
                email
            }
            from{
                email
            }
        }
    }
  `
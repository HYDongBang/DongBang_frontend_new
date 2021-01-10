import { gql } from "apollo-boost";

export const READ_ROOM = gql `
    query readRoom($id: Int!){
        readRoom(id: $id){
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
export const READ_ROOMS = gql `
    query readRooms{
      readRooms{
        id
        updatedAt
        participants{
          email
        }
        recentMessage{
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
import { gql } from "apollo-boost";

export const READ_CLUB = gql `
    query readClub($id: Int){
        readClub(id: $id){
            questions{
                type,
                title,
                index,
                choices{
                  index,
                  subject
                }
              }   
        }
    }
`



export const CREATE_APPLICATION = gql `
    mutation createApplication($clubId: Int!, $Answers:[AnswerInput] ){
        createApplication(clubId: $clubId, Answers:$Answers){
           id
        }
    }
`


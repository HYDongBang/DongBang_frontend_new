import { gql } from "apollo-boost";

export const READ_LOGGED_IN_USER = gql `
    query {
        readLoggedInUser{
            clubMaster{
                id
            }
        }
    }
`


export const READ_CLUB = gql `
    query readClub($id: Int){
        readClub(id: $id){
            name
            description
            questions{
                id,
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
export const CREATE_QUESTION = gql `
    mutation createQuestion($index: Int!,$type: String!,  $title:String!){
        createQuestion(index: $index,type: $type, title:$title){
           id
           index
        }
    }
`
export const CREATE_CHOICE = gql `
    mutation createChoice($index: Int!, $questionId: Int!, $subject:String!){
        createChoice(index: $index, questionId: $questionId, subject:$subject){
           index
           id
        }
    }
`
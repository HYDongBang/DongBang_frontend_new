import { gql } from "apollo-boost";

export const GET_QUESTIONS = gql `
    query {
        readLoggedInUser{
            clubMaster{
                id
                name
                description
                type
                questions{
                    id,
                    type,
                    title,
                    index,
                    choices{
                        id
                        index,
                        subject
                    }
                }
            }
        }
    }
`


export const CREATE_QUESTION = gql `
    mutation createQuestion($index: Int!,$type: String!, $title:String!){
        createQuestion(index: $index,type: $type, title:$title){
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
export const DELETE_QUESTION = gql `
    mutation deleteQuestion($id: Int!){
        deleteQuestion(id: $id){
           index
        }
    }
`

export const DELETE_CHOICE = gql `
    mutation deleteChoice($id: Int!){
        deleteChoice(id: $id){
           index
        }
    }
`

export const UPDATE_QUESTIONS = gql `
    mutation updateQuestions($Questions: [QuestionInput]){
        updateQuestions(Questions: $Questions){
           id
        }
    }
`
import { gql } from "apollo-boost";

export const GET_APPLICANTS = gql`
    query readLoggedInUser {
        readLoggedInUser {
            id
            clubMaster {
                id
                questions {
                    id
                    type
                    title
                    index
                    choices {
                        id
                        index
                        subject
                    }
                }
                applications {
                    id
                    answers {
                        id
                        index
                        type
                        answer
                    }
                    user {
                        id
                        name
                        studentNumber
                        phoneNumber
                        university
                        major
                        email
                    }
                }
            }
        }
    }
`;

export const DELETE_APPLICANTS = gql`
    mutation deleteApplication($id: Int!) {
        deleteApplication(id: $id) {
            id
        }
    }
`;

export const JOIN_CLUB = gql`
    mutation joinClub($userId: Int!) {
        joinClub(userId: $userId) {
            id
        }
    }
`;

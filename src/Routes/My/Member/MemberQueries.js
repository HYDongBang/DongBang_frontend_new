import { gql } from "apollo-boost";

export const GET_CLUB_MEMBERS = gql`
    query readLoggedInUser {
        readLoggedInUser {
            id
            clubMaster {
                id
                members {
                    id
                    email
                    name
                    studentNumber
                    phoneNumber
                    university
                    major
                    application
                }
            }
        }
    }
`;

export const DELETE_CLUB_MEMBER = gql`
    mutation deleteMember($uid: ID!) {
        deleteMember(uid: $uid) {
            id
        }
    }
`;

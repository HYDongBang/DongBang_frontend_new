import { gql } from "apollo-boost";

export const GET_APPLICATIONS = gql`
    query readLoggedInUser {
        readLoggedInUser {
            id
            clubMaster {
                id
                applications {
                    id
                    startTime
                    endTime
                    interviewDay
                    user {
                        id
                        name
                        studentNumber
                    }
                }
            }
        }
    }
`;

export const UPDATE_APPLICATION = gql`
    mutation updateApplication($id: Int, $startTime: String, $endTime: String, $interviewDay: String) {
        updateApplication(id: $id, startTime: $startTime, endTime: $endTime, interviewDay: $interviewDay) {
            id
        }
    }
`;
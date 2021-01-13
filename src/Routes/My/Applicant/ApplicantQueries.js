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

export const PASS_APPLICATIONS = gql`
    mutation passApplications($applicationIds: [Int]) {
        passApplications(applicationIds: $applicationIds)
    }
`;

export const DELETE_APPLICATIONS = gql`
    mutation deleteApplications($id: [Int]) {
        deleteApplications(id: $id)
    }
`;

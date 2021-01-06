import { gql } from "apollo-boost";

export const ME = gql`
    query readLoggedInUser {
        readLoggedInUser {
            id
            name
            email
            phoneNumber
            studentNumber
            university
            major
        }
    }
`;

export const UPDATE_PROFILE = gql`
    mutation updateUser($id: int!, $name: String, $phoneNumber: String, $studentNumber: String, $university: String, $major: String) {
        updateUser(id: $id, name: $name, phoneNumber: $phoneNumber, studentNumber: $studentNumber, university: $university, major: $major) {
            id
        }
    }
`;

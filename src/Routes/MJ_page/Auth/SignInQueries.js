import { gql } from "apollo-boost";

export const EMAIL_AUTHENTICATE = gql`
  mutation emailAuthenticate($email: String!) {
    emailAuthenticate(email: $email)
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!,$password: String!,$name: String, $university: String, $major: String, $phoneNumber: String, $studentNumber: String ) {
    createUser(email: $email, password: $password, name: $name, university: $university, major: $major, phoneNumber: $phoneNumber, studentNumber: $studentNumber){
      id
    }
  }
`;

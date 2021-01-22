import { gql } from "apollo-boost";

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export const EMAIL_AUTHENTICATE = gql`
  mutation emailAuthenticateForPassword($email: String!) {
    emailAuthenticateForPassword(email: $email)
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updateUserPassword($email: String!, $password: String!) {
    updateUserPassword(email: $email, password: $password){
      id
    }
  }
`;
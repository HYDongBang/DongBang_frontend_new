import { gql } from "apollo-boost";

export const GET_CLUB_MEMBERS = gql`
    query readLoggedInUser {
        readLoggedInUser {
            id
            clubMaster {
                id
                master {
                    id
                    email
                    name
                    studentNumber
                    phoneNumber
                    university
                    major
                }
                administrator {
                    id
                    email
                    name
                    studentNumber
                    phoneNumber
                    university
                    major
                }
                members {
                    id
                    email
                    name
                    studentNumber
                    phoneNumber
                    university
                    major
                }
            }
        }
    }
`;

// 멤버에 추가 시키기
export const JOIN_CLUB = gql`
    mutation joinClub($userId: Int) {
        joinClub(userId: $userId) {
            id
        }
    }
`;

// 동아리 탈퇴 시키기
export const LEAVE_CLUB = gql`
    mutation leaveClub($userId: Int!) {
        leaveClub(userId: $userId) {
            id
        }
    }
`;

// 운영진에 추가시키기
export const BECOME_ADMINISTRATOR = gql`
    mutation becomeAdministrator($userId: Int!) {
        becomeAdministrator(userId: $userId) {
            id
        }
    }
`;

// 운영진에서 제거하기
export const RESIGN_ADMINISTRATOR = gql`
    mutation resignAdministrator($userId: Int!) {
        resignAdministrator(userId: $userId) {
            id
        }
    }
`;

// 회장에 추가하기
export const APPOINT_MASTER = gql`
    mutation appointMaster($userId: Int!) {
        appointMaster(userId: $userId) {
            id
        }
    }
`;
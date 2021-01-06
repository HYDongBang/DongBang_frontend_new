import { gql } from "apollo-boost";

export const GET_CLUB = gql`
    query readLoggedInUser {
        readLoggedInUser {
            id
            clubMaster {
                id
                name
                type
                description
                content
                clubImage
                logoImage
                partyDay
                party
                numberOfMembers
                isUnion
                email
                phoneNumber
                facebookUrl
                instagramUrl
            }
        }
    }
`;

export const UPDATE_CLUB = gql`
    mutation updateClub($name: String, $type: String, $description: String, $content: String, $clubImage: String, $logoImage: String, $partyDay: String, $party: Boolean, $numberOfMembers: Int, $isUnion: Boolean, $email: String, $phoneNumber: String, $instagramUrl: String, $facebookUrl: String) {
        updateClub(
            name: $name,
            type: $type,
            description: $description,
            content: $content,
            clubImage: $clubImage,
            logoImage: $logoImage,
            partyDay: $partyDay,
            party: $party,
            numberOfMembers: $numberOfMembers,
            isUnion: $isUnion,
            email: $email,
            phoneNumber: $phoneNumber,
            instagramUrl: $instagramUrl,
            facebookUrl: $facebookUrl) {
            name
        }
    }
`;

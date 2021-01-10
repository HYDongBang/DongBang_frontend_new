import React, { useEffect } from "react";
import axios from "axios";
import ClubPresenter from "./ClubPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { GET_CLUB, UPDATE_CLUB } from "./ClubQueries";

export default () => {
    const getClubQuery = useQuery(GET_CLUB);
    const [updateClubMutation] = useMutation(UPDATE_CLUB);
    const name = useInput("");
    const type = useInput("");
    const description = useInput("");
    const content = useInput("");
    const clubImage = useInput("");
    const logoImage = useInput("");
    const clubFile = useInput(null);
    const logoFile = useInput(null);
    const partyDay = useInput("");
    const party = useInput("");
    const numberOfMembers = useInput("");
    const isUnion = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const instagramUrl = useInput("");
    const facebookUrl = useInput("");

    useEffect(() => {
        if (getClubQuery.data) {
            const info = getClubQuery.data.readLoggedInUser.clubMaster;
            name.setValue(info.name);
            type.setValue(info.type);
            description.setValue(info.description);
            content.setValue(info.content);
            clubImage.setValue(info.clubImage);
            logoImage.setValue(info.logoImage);
            partyDay.setValue(info.partyDay);
            party.setValue(info.party);
            numberOfMembers.setValue(info.numberOfMembers);
            isUnion.setValue(info.isUnion);
            email.setValue(info.email);
            phoneNumber.setValue(info.phoneNumber);
            instagramUrl.setValue(info.instagramUrl);
            facebookUrl.setValue(info.facebookUrl);
        }
    }, [getClubQuery.data]);

    const onImgClick = (close, id) => {
        type.setValue(id);
        close();
    };

    const onFileUpload = e => {
        const id = e.target.id;
        const file = e.target.files[0];
        if (id === "logoImage") {
            logoFile.setValue(file);
            logoImage.setValue(file.name);
        } else if (id === "clubImage") {
            clubFile.setValue(file);
            clubImage.setValue(file.name);
        }
    };

    const onClickRadio = e => {
        const id = e.target.id;
        if (id === "yesParty") {
            party.setValue(true);
        } else if (id === "noParty") {
            party.setValue(false);
        } else if (id === "yesUnion") {
            isUnion.setValue(true);
        } else if (id === "noUnion") {
            isUnion.setValue(false);
        }
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const lFile = new FormData();
            const cFile = new FormData();
            lFile.append("file", logoFile.value);
            cFile.append("file", clubFile.value);
            {
                const { data } = await axios.post("http://ec2-52-79-235-57.ap-northeast-2.compute.amazonaws.com:4000/api/upload", lFile, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                logoImage.setValue(data.location);
            }
            {
                const { data } = await axios.post("http://ec2-52-79-235-57.ap-northeast-2.compute.amazonaws.com:4000/api/upload", cFile, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                clubImage.setValue(data.location);
            }
            const { data } = await updateClubMutation({
                variables: {
                    name: name.value,
                    type: type.value,
                    description: description.value,
                    content: content.value,
                    clubImage: clubImage.value,
                    logoImage: logoImage.value,
                    partyDay: partyDay.value,
                    party: party.value,
                    numberOfMembers: numberOfMembers.value,
                    isUnion: isUnion.value,
                    email: email.value,
                    phoneNumber: phoneNumber.value,
                    instagramUrl: instagramUrl.value,
                    facebookUrl: facebookUrl.value
                }
            });
            alert("동아리 정보 수정에 성공하였습니다.");
        } catch (e) {
            console.log(e.message);
            alert("다시 시도해 주세요.");
        }
    };
    return (
        <ClubPresenter
            name={name}
            type={type}
            description={description}
            content={content}
            clubImage={clubImage}
            logoImage={logoImage}
            partyDay={partyDay}
            party={party}
            numberOfMembers={numberOfMembers}
            isUnion={isUnion}
            email={email}
            phoneNumber={phoneNumber}
            instagramUrl={instagramUrl}
            facebookUrl={facebookUrl}
            onImgClick={onImgClick}
            onSubmit={onSubmit}
            onFileUpload={onFileUpload}
            onClickRadio={onClickRadio}
            loading={getClubQuery.loading}
        />
    );
};

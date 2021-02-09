import React, { useEffect } from "react";
import axios from "axios";
import ClubPresenter from "./ClubPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { GET_CLUB, UPDATE_CLUB, CREATE_POST } from "./ClubQueries";

export default () => {
    const getClubQuery = useQuery(GET_CLUB);
    const [updateClubMutation] = useMutation(UPDATE_CLUB);
    const [createPostMutation] = useMutation(CREATE_POST);
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
    const title = useInput("");
    const postContent = useInput("");
    const postImage = useInput("");
    const postFile = useInput(null);

    useEffect(() => {
        if (getClubQuery.data) {
            const info = getClubQuery.data.readLoggedInUser.clubMaster;
            name.setValue(info.name);
            type.setValue(info.type);
            description.setValue(info.description);
            content.setValue(info.content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n'));
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
        } else if (id === "postImage") {
            postFile.setValue(file);
            postImage.setValue(file.name);
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
            let logoLocation = logoImage.value;
            let clubLocation = clubImage.value;
            const lFile = new FormData();
            const cFile = new FormData();
            lFile.append("file", logoFile.value);
            cFile.append("file", clubFile.value);
            if (logoFile.value !== null){
                const { data } = await axios.post("http://ec2-52-79-235-57.ap-northeast-2.compute.amazonaws.com:4000/api/upload", lFile, {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                });
                logoLocation = data.location;
            }
            if (clubFile.value !== null){
                const { data } = await axios.post("http://ec2-52-79-235-57.ap-northeast-2.compute.amazonaws.com:4000/api/upload", cFile, {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                });
                clubLocation = data.location;
            }
            
            const { data } = await updateClubMutation({
                variables: {
                    name: name.value,
                    type: type.value,
                    description: description.value,
                    content: content.value.replace(/(?:\r\n|\r|\n)/g, '<br />'),
                    clubImage: logoLocation,
                    logoImage: clubLocation,
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

    const onClickPost = async e => {
        try {
            let postLocation = "";
            const file = new FormData();
            file.append("file", postFile.value);
            {
                const { data } = await axios.post("http://ec2-52-79-235-57.ap-northeast-2.compute.amazonaws.com:4000/api/upload", file, {
                    headers: {
                    "content-type": "multipart/form-data"
                    }
                });
                postLocation = data.location;
            }
            const { data } = await createPostMutation({
                variables: {
                    title: title.value,
                    content: postContent.value,
                    fileUrl: postLocation
                }
            });
            alert("컨텐츠를 추가하였습니다.");
            window.location.reload();
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
            title={title}
            postContent={postContent}
            postImage={postImage}
            onImgClick={onImgClick}
            onSubmit={onSubmit}
            onFileUpload={onFileUpload}
            onClickRadio={onClickRadio}
            onClickPost={onClickPost}
            loading={getClubQuery.loading}
        />
    );
};

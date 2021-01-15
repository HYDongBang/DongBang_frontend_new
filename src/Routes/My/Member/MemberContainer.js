import React, { useEffect, useState } from "react";
import MemberPresenter from "./MemberPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { GET_CLUB_MEMBERS, JOIN_CLUB, LEAVE_CLUB, BECOME_ADMINISTRATOR, RESIGN_ADMINISTRATOR, APPOINT_MASTER } from "./MemberQueries";

export default () => {
    const getClubMembersQuery = useQuery(GET_CLUB_MEMBERS);
    const [joinClubMutation] = useMutation(JOIN_CLUB);
    const [leaveClubMutation] = useMutation(LEAVE_CLUB);
    const [becomeAdministratorMutation] = useMutation(BECOME_ADMINISTRATOR);
    const [resignAdministratorMutation] = useMutation(RESIGN_ADMINISTRATOR);
    const [appointMasterMutation] = useMutation(APPOINT_MASTER);

    const [master, setMaster] = useState({});
    const [administrator, setAdministrator] = useState([]);
    const [member, setMember] = useState([]);

    useEffect(() => {
        if (getClubMembersQuery.data) {
            const info = getClubMembersQuery.data.readLoggedInUser.clubMaster;
            setMaster(info.master);
            setAdministrator(info.administrator);
            setMember(info.members);
        }
    }, [getClubMembersQuery.data]);

    const onClickRadio = async e => {
        const currentType = e.target.name;
        const targetType = e.target.id;
        if(currentType === "master") {
            if(targetType === "administrator") {

            } else if(targetType === "member") {

            }
        } else if(currentType === "administrator") {
            if(targetType === "master") {
                
            } else if(targetType === "member") {

            }
        } else if(currentType === "member") {
            if(targetType === "administrator") {

            } else if(targetType === "master") {

            }
        }
    };

    const onClickLeave = async e => {
        const id = e.target.id;
        try {
            const { data } = await leaveClubMutation({
                variables: {
                    id: parseInt(id)
                }
            });
            alert("탈퇴시켰습니다.");
        } catch (e) {
            console.log(e.message);
            alert("다시 시도해 주세요.");
        }
    };

    return <MemberPresenter master={master} administrator={administrator} member={member} onClickRadio={onClickRadio} onClickLeave={onClickLeave} />;
};

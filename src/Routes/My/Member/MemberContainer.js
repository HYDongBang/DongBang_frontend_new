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
        const targetType = e.target.value;
        const id = e.target.id;
        if(currentType === "administrator") {
            if(targetType === "master") {
                try {
                    const { data } = await appointMasterMutation({
                        variables: {
                            userId: parseInt(id)
                        }
                    });
                    setMaster(current => {
                        return administrator.filter(element => element.id === id)[0];
                    });
                    setAdministrator(current => {
                        const tmp = current;
                        return tmp.filter(element => element.id !== id);
                    });
                    alert("변경되었습니다.");
                } catch (e) {
                    console.log(e.message);
                    alert("다시 시도해 주세요.");
                }
            } else if(targetType === "member") {
                try {
                    const { data } = await resignAdministratorMutation({
                        variables: {
                            userId: parseInt(id)
                        }
                    });
                    setAdministrator(current => {
                        const tmp = current;
                        return tmp.filter(element => element.id !== id);
                    });
                } catch (e) {
                    console.log(e.message);
                    alert("다시 시도해 주세요.");
                }
            }
        } else if(currentType === "member") {
            if(targetType === "administrator") {
                try {
                    const { data } = await becomeAdministratorMutation({
                        variables: {
                            userId: parseInt(id)
                        }
                    });
                    setAdministrator(current => {
                        const tmp = current;
                        tmp.push(member.filter(element => element.id === id)[0]);
                        return tmp;
                    });
                } catch (e) {
                    console.log(e.message);
                    alert("다시 시도해 주세요.");
                }
            } else if(targetType === "master") {
                try {
                    const { data } = await appointMasterMutation({
                        variables: {
                            userId: parseInt(id)
                        }
                    });
                    setMaster(current => {
                        return administrator.filter(element => element.id === id)[0];
                    });
                } catch (e) {
                    console.log(e.message);
                    alert("다시 시도해 주세요.");
                }
            }
            window.location.reload();
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

    return <MemberPresenter master={master} administrator={administrator} member={member} onClickRadio={onClickRadio} onClickLeave={onClickLeave} loading={getClubMembersQuery.loading} />;
};

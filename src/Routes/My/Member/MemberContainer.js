import React, { useEffect, useState } from "react";
import MemberPresenter from "./MemberPresenter";
import { useQuery } from "react-apollo-hooks";
import { GET_CLUB_MEMBERS } from "./MemberQueries";

export default () => {
    const getClubMembersQuery = useQuery(GET_CLUB_MEMBERS);

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

    return <MemberPresenter master={master} administrator={administrator} member={member} loading={getClubMembersQuery.loading} />;
};

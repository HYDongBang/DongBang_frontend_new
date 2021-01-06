import React, { useEffect } from "react";
import ProfilePresenter from "./ProfilePresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { ME, UPDATE_PROFILE } from "./ProfileQueries";

export default () => {
    const meQuery = useQuery(ME);
    const [updateProfileMutation] = useMutation(UPDATE_PROFILE);
    const name = useInput("");
    const uni = useInput("");
    const major = useInput("");
    const studentNumber = useInput("");
    const phone = useInput("");
    const email = useInput("");

    useEffect(() => {
        if (meQuery.data) {
            const info = meQuery.data;
            console.log(info);
        }
    }, [meQuery.data]);

    return <ProfilePresenter name={name} uni={uni} major={major} studentNumber={studentNumber} phone={phone} email={email} />;
};

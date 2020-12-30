import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";

export default () => {
    const name = useInput("");
    const uni = useInput("");
    const major = useInput("");
    const studentNumber = useInput("");
    const phone = useInput("");
    const email = useInput("");

    return <ProfilePresenter name={name} uni={uni} major={major} studentNumber={studentNumber} phone={phone} email={email} />;
};

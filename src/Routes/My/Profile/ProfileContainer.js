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
            const info = meQuery.data.readLoggedInUser;
            name.setValue(info.name);
            uni.setValue(info.university);
            major.setValue(info.major);
            studentNumber.setValue(info.studentNumber);
            phone.setValue(info.phoneNumber);
            email.setValue(info.email);
        }
    }, [meQuery.data]);

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const { data } = await updateProfileMutation({
                variables: {
                    id: meQuery.data.readLoggedInUser.id,
                    name: name.value,
                    phoneNumber: phone.value,
                    studentNumber: studentNumber.value,
                    university: uni.value,
                    major: major.value
                }
            });
            if (!data) {
                console.error("fail to edit profile");
            } else {
                alert("프로필을 수정하였습니다.");
            }
        } catch (e) {
            console.log(e.message);
            alert("다시 시도해 주세요.");
        }
    };

    return <ProfilePresenter name={name} uni={uni} major={major} studentNumber={studentNumber} phone={phone} email={email} onSubmit={onSubmit} loading={meQuery.loading} />;
};

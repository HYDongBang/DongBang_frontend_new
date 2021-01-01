import React from "react";
import ApplicantPresenter from "./ApplicantPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";

export default () => {
    const applicants = [
        { name: "홍길동", phoneNumber: "01012341234", email: "abc@naver.com", uni: "한양대학교", major: "컴퓨터소프트웨어학부", studentNumber: "2017021234" },
        { name: "홍길동", phoneNumber: "01012341234", email: "abc@naver.com", uni: "한양대학교", major: "컴퓨터소프트웨어학부", studentNumber: "2017021234" },
        { name: "홍길동", phoneNumber: "01012341234", email: "abc@naver.com", uni: "한양대학교", major: "컴퓨터소프트웨어학부", studentNumber: "2017021234" }
    ];
    return <ApplicantPresenter applicants={applicants} />;
};

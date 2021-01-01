import React from "react";
import InterviewPresenter from "./InterviewPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";

export default () => {
    const applicants = [
        { name: "홍길동", studentNumber: "2017021234" },
        { name: "홍길동", studentNumber: "2017021234" },
        { name: "홍길동", studentNumber: "2017021234" }
    ];
    return <InterviewPresenter applicants={applicants} />;
};

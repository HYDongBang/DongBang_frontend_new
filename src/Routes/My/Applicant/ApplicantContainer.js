import React, { useEffect, useState } from "react";
import ApplicantPresenter from "./ApplicantPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { GET_APPLICANTS, DELETE_APPLICANTS, JOIN_CLUB } from "./ApplicantQueries";

export default () => {
    const getApplicantsQuery = useQuery(GET_APPLICANTS);
    const [deleteApplicantsMutation] = useMutation(DELETE_APPLICANTS);
    const [joinClubMutation] = useMutation(JOIN_CLUB);
    const [selected, setSelected] = useState([]);
    const [applicants, setApplicants] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (getApplicantsQuery.data) {
            setQuestions(getApplicantsQuery.data.readLoggedInUser.clubMaster.questions);
            setApplicants(getApplicantsQuery.data.readLoggedInUser.clubMaster.applications);
        }
    }, [getApplicantsQuery.data]);

    // TODO: state 통해 all 여부 관리
    const onClickAll = e => {
        const isAllSelected = selected.indexOf("all") !== -1;
        if (isAllSelected === false) {
            setSelected(applicants.map(applicant => applicant.id));
        } else if (isAllSelected === true) {
            setSelected([]);
        }
    };

    const onClickSelect = e => {
        const id = e.target.id.toString();
        const isSelected = selected.indexOf(id) !== -1;
        console.log("id", id, "isSelected", isSelected);
        if (isSelected === true) {
            setSelected(selected.filter(element => element !== id));
        } else if (isSelected === false) {
            setSelected(selected.concat([id]));
        }
    };
    // TODO: 거절, 승낙 버튼 구현
    const onClickButton = e => {};

    return (
        <ApplicantPresenter
            applicants={applicants}
            selected={selected}
            questions={questions}
            onClickAll={onClickAll}
            onClickSelect={onClickSelect}
            onClickButton={onClickButton}
            loading={getApplicantsQuery.loading}
        />
    );
};

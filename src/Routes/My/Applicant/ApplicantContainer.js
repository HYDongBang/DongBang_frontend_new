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

    const onClickAll = e => {
        const checked = e.target.checked;
        if (checked === true) {
            setSelected(applicants.map(applicant => applicant.id));
        } else if (checked === false) {
            setSelected([]);
        }
    };

    const onClickSelect = e => {
        const checked = e.target.checked;
        const id = e.target.value;
        if (checked === true) {
            setSelected(selected.concat([id]));
        } else if (checked === false) {
            setSelected(selected.filter(num => num !== id));
        }
    };

    const onClickButton = e => {};

    return <ApplicantPresenter applicants={applicants} questions={questions} onClickAll={onClickAll} onClickSelect={onClickSelect} onClickButton={onClickButton} loading={getApplicantsQuery.loading} />;
};

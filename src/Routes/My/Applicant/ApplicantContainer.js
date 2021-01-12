import React, { useEffect, useState } from "react";
import ApplicantPresenter from "./ApplicantPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { GET_APPLICANTS, DELETE_APPLICATIONS, PASS_APPLICATIONS } from "./ApplicantQueries";

export default () => {
    const getApplicantsQuery = useQuery(GET_APPLICANTS);
    const [deleteApplicationsMutation] = useMutation(DELETE_APPLICATIONS);
    const [passApplicationsMutation] = useMutation(PASS_APPLICATIONS);
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
        if (isSelected === true) {
            setSelected(selected.filter(element => element !== id));
        } else if (isSelected === false) {
            setSelected(selected.concat([id]));
        }
    };

    const onSubmit = async e => {
        e.preventDefault();
        const id = e.target.id;
        if (id === "accept") {
            try {
                const { data } = await passApplicationsMutation({
                    variables: {
                        applicationIds: selected.map(id => parseInt(id))
                    }
                });
                alert("합격처리 되었습니다.");
            } catch (e) {
                console.log(e.message);
                alert("다시 시도해 주세요.");
            }
            try {
                const { data } = await deleteApplicationsMutation({
                    variables: {
                        id: selected.map(id => parseInt(id))
                    }
                });
                window.location.reload();
            } catch (e) {
                console.log(e.message);
                alert("다시 시도해 주세요.");
            }
        } else if (id === "reject") {
            try {
                const { data } = await deleteApplicationsMutation({
                    variables: {
                        id: selected
                    }
                });
                alert("불합격 처리 되었습니다.");
            } catch (e) {
                console.log(e.message);
                alert("다시 시도해 주세요.");
            }
        }
    };

    return (
        <ApplicantPresenter
            applicants={applicants}
            selected={selected}
            questions={questions}
            onClickAll={onClickAll}
            onClickSelect={onClickSelect}
            onSubmit={onSubmit}
            loading={getApplicantsQuery.loading}
        />
    );
};

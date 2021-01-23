import React, { useEffect, useState } from "react";
import InterviewPresenter from "./InterviewPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { GET_APPLICATIONS, UPDATE_APPLICATION } from "./InterviewQueries";

export default () => {
    const getApplicationsQuery = useQuery(GET_APPLICATIONS);
    const [updateApplicationMutation] = useMutation(UPDATE_APPLICATION);
    const day = ["월", "화", "수", "목", "금", "토", "일"];
    const time = [ "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];
    const [applicants, setApplicants] = useState([]);
    const [timeTable, setTimeTable] = useState([]);

    useEffect(() => {
        if (getApplicationsQuery.data) {
            const info = getApplicationsQuery.data.readLoggedInUser.clubMaster.applications;
            setApplicants(info);
            let tmpTimeTable = [Array(time.length).map(element => [])];
            for(let i=0;i<time.length;i++) {
                tmpTimeTable[i] = [Array(7).map(element => {})];
            }
            info.forEach(applicant => {
                if(applicant.startTime !== undefined && applicant.endTime !== undefined) {
                    for(let i=time.indexOf(applicant.startTime); i<time.indexOf(applicant.endTime);i++) {
                        tmpTimeTable[i][day.indexOf(applicant.interviewDay)] = {id: applicant.id, name: applicant.user.name};
                    }
                }
            });
            setTimeTable(curr => tmpTimeTable);
        }
    }, [getApplicationsQuery.data]);

    const onSubmit = async e => {
        e.preventDefault();
        const id = e.target.id;
        const applicant = applicants.filter(applicant => applicant.id === parseInt(id))[0];
        try {
            const { data } = await updateApplicationMutation({
                variables: {
                    id: parseInt(id),
                    startTime: applicant.startTime,
                    endTime: applicant.endTime,
                    interviewDay: applicant.interviewDay
                }
            });
            alert("저장되었습니다");
            window.location.reload();
        } catch (e) {
            console.log(e.message);
            alert("다시 시도해 주세요.");
        }
    };

    const onSelect = e => {
        const { id, name, value } = e.target;
        if(name === "day") {
            setApplicants(current => {
                return current.map(applicant => {
                    if (applicant.id === parseInt(id)) {
                        return { ...applicant, interviewDay: value};
                    }
                });
            });
        } else if(name === "startTime") {
            setApplicants(current => {
                return current.map(applicant => {
                    if (applicant.id === parseInt(id)) {
                        return { ...applicant, startTime: value};
                    }
                });
            });
        } else if(name === "endTime") {
            setApplicants(current => {
                console.log("current", current)
                return current.map(applicant => {
                    if (applicant.id === parseInt(id)) {
                        return { ...applicant, endTime: value};
                    }
                });
            });
        }
    };

    return <InterviewPresenter applicants={applicants} timeTable={timeTable} day={day} time={time} onSubmit={onSubmit} onSelect={onSelect} loading={getApplicationsQuery.loading}/>;
};

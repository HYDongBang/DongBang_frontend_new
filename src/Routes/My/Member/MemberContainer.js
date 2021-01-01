import React from "react";
import MemberPresenter from "./MemberPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";

export default () => {
    const president = [
        { name: "홍길동", studentNumber: "0101231234" },
        { name: "홍길동", studentNumber: "0101241234" },
        { name: "홍길동", studentNumber: "0101341234" }
    ];
    const manager = [
        { name: "홍길동", studentNumber: "0112341234" },
        { name: "홍길동", studentNumber: "0101234234" }
    ];
    const member = [
        { name: "홍길동", studentNumber: "0101241234" },
        { name: "홍길동", studentNumber: "0101341234" },
        { name: "홍길동", studentNumber: "0102341234" },
        { name: "홍길동", studentNumber: "0112341234" },
        { name: "홍길동", studentNumber: "0012341234" },
        { name: "홍길동", studentNumber: "1012341234" }
    ];
    return <MemberPresenter president={president} manager={manager} member={member} />;
};

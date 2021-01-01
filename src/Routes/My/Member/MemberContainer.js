import React from "react";
import MemberPresenter from "./MemberPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";

export default () => {
    const president = [
        { name: "홍길동", phone: "01012341234" },
        { name: "홍길동", phone: "01012341234" },
        { name: "홍길동", phone: "01012341234" }
    ];
    const manager = [
        { name: "홍길동", phone: "01012341234" },
        { name: "홍길동", phone: "01012341234" }
    ];
    const member = [
        { name: "홍길동", phone: "01012341234" },
        { name: "홍길동", phone: "01012341234" },
        { name: "홍길동", phone: "01012341234" },
        { name: "홍길동", phone: "01012341234" },
        { name: "홍길동", phone: "01012341234" },
        { name: "홍길동", phone: "01012341234" }
    ];
    return <MemberPresenter president={president} manager={manager} member={member} />;
};

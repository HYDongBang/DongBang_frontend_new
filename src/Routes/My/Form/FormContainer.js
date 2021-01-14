import React, {useState} from "react";
import FormPresenter from "./FormPresenter";

import {READ_LOGGED_IN_USER, READ_CLUB} from "./FormQueries"
import { useMutation, useQuery } from "react-apollo-hooks";

export default () => {
    const [select, setSelect] = useState("");
    const { loading:uLoading, data:uData } = useQuery(READ_LOGGED_IN_USER);

    return (
        <FormPresenter  
            select={select}
            setSelect={setSelect}
            uData={uData}
            uLoading= {uLoading}
            />

       );
    

};

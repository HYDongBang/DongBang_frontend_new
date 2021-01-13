import React, {useState} from "react";
import FormPresenter from "./FormPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";

export default () => {
    const [select, setSelect] = useState("");

    return (
    <FormPresenter  
    select={select}
    setSelect={setSelect}
    />);
};

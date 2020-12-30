import React from "react";
import ClubPresenter from "./ClubPresenter";
import useInput from "../../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";

export default () => {
    const name = useInput("");
    const short = useInput("");
    const long = useInput("");
    const logo = useInput("");
    const image = useInput("");
    const facebook = useInput("");
    const instagram = useInput("");
    const meeting = useInput("");
    const people = useInput("");
    const phone = useInput("");
    const email = useInput("");

    return <ClubPresenter name={name} short={short} long={long} logo={logo} image={image} facebook={facebook} instagram={instagram} meeting={meeting} people={people} phone={phone} email={email} />;
};

import React, { useState } from "react";
import MainPresenter from "./MainPresenter";

import { useQuery } from "react-apollo-hooks";
import {READ_ALL_CLUBS, READ_LOGGED_IN_USER, LOG_IN} from "./MainQueries"

export default () => {
  const [myType, setType] = useState("");
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);
  const [check, setCheck] = useState(false);

  const { loading, data } = useQuery(READ_ALL_CLUBS);
  const { loading:uLoading, data:uData } = useQuery(READ_LOGGED_IN_USER);
  const {
    data: { isLoggedIn }
  } = useQuery(LOG_IN);

    const handleChange = (e) => {
        setWord(e);
    
        let oldList = data.readAllClubs.map((club) => {
          return {
            id: club.id,
            name: club.name,
            type: club.type,
            description: club.description,
            logoImage: club.logoImage,
            clubImage: club.clubImage,
          };
        });
    
        if (word !== "") {
          let newList = [];
          newList = oldList.filter((club) => club.name.includes(word));
          setFilterDisplay(newList);
        } else {
          setFilterDisplay(data.readAllClubs);
        }
      };
 

  return (
    <MainPresenter
    myType={myType}
    setType={setType}
    word={word}
    setWord={setWord}
    filterDisplay={filterDisplay}
    setFilterDisplay={setFilterDisplay}
    loading={loading}
    data={data}
    uLoading={uLoading}
    uData={uData}
    handleChange={handleChange}
    isLoggedIn={isLoggedIn}
    check={check}
    setCheck={setCheck}
    />
  );
};
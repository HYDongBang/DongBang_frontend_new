import React, { useState } from "react";
import MainPresenter from "./MainPresenter";

export default () => {
  const [myType, setType] = useState("");
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);

  return (
    <MainPresenter
    myType={myType}
    setType={setType}
    />
  );
};
import React from "react";
import styled from "styled-components";
import styles from "../Styles/Loading.css";

const Container = styled.div`
  width: 100%;
`;

const Loading = () => (
  <Container>
    <div className="loading-container">
      <div className="loading"></div>
      <div id="loading-text">loading</div>
    </div>
  </Container>
);

export default Loading;

import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Write from "./Write";

const Main = () => {
  return (
    <MainWrapper>
      <LeftWrapper>
        <h3>left side</h3>
      </LeftWrapper>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
      <RightWrapper>
        <h3>right side</h3>
      </RightWrapper>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 19% 62% 19%;
`;

const LeftWrapper = styled.div`
  border-right: solid 1px #aabbaa;
`;

const RightWrapper = styled.div`
  border-left: solid 1px #aabbaa;
`;

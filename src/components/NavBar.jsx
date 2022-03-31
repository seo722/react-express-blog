import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <Wrapper>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/test">Test</Link>
      </span>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;

  span {
    margin: 10px;
  }
`;

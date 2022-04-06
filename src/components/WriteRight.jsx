import React from "react";
import styled from "styled-components";

function WriteRight() {
  return (
    <div>
      <Submit>
        <button>포스트 등록</button>
      </Submit>
    </div>
  );
}

export default WriteRight;

const Submit = styled.div`
  text-align: center;
  margin-top: 30px;

  button {
    width: 120px;
    padding: 5px;
    border-radius: 5px;
    border: solid 1px #ababab;
    cursor: pointer;
    background-color: white;
  }
`;

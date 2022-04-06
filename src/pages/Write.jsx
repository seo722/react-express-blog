import React from "react";
import styled from "styled-components";

function Write() {
  return (
    <WriteWrapper>
      <div>
        <Title type="text" placeholder="제목" />
      </div>
      <div>
        <Content placeholder="내용을 입력하세요." />
      </div>
    </WriteWrapper>
  );
}

export default Write;

const WriteWrapper = styled.div`
  padding: 20px;
  padding-left: 30px;

  div {
    margin-top: 30px;
    margin-left: 50px;
  }
`;

const Title = styled.input`
  width: 87%;
  padding-bottom: 20px;
  border: none;
  font-size: 20px;
  border-bottom: solid 1px #ababab;
  font-weight: bold;
  outline: none;
`;

const Content = styled.textarea`
  width: 90%;
  resize: none;
  border: none;
  height: 500px;
  outline: none;
`;

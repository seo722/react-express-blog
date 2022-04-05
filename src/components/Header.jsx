import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-awesome-modal";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id, password);
  };

  return (
    <Wrapper>
      <Acenter>
        <h5>
          <NavLink style={{ color: "black" }} to="/write">
            포스트 작성
          </NavLink>
        </h5>
      </Acenter>
      <Acenter>
        <HomeLink to="/">
          <h3>Seo Blog</h3>
        </HomeLink>
      </Acenter>
      <Acenter>
        <h5 onClick={openModal}>관리자 로그인</h5>
        <Modal
          width="400"
          height="360"
          effect="fadeInDown"
          visible={visible}
          onClickAway={closeModal}
        >
          <div>
            <AdminLogin>관리자 로그인</AdminLogin>
            <form onSubmit={onSubmit}>
              <div>
                <LoginInput>
                  <p>관리자 ID</p>
                  <input
                    onChange={onChangeId}
                    value={id}
                    type="text"
                    placeholder="id"
                  />
                </LoginInput>
                <LoginInput>
                  <p>관리자 Password</p>
                  <input
                    onChange={onChangePassword}
                    value={password}
                    type="password"
                    placeholder="password"
                  />
                </LoginInput>
                <SubmitDiv>
                  <div>
                    <input type="submit" value="로그인" />
                  </div>
                  <div>
                    <input type="button" value="취소" onClick={closeModal} />
                  </div>
                </SubmitDiv>
              </div>
            </form>
          </div>
        </Modal>
      </Acenter>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% auto;
  border-bottom: solid 1px #ababab;
`;

const HomeLink = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

const Acenter = styled.div`
  text-align: center;
`;

const AdminLogin = styled.h4`
  text-align: center;
  border-bottom: solid 1px #ababab;
  padding-bottom: 20px;
`;

const LoginInput = styled.div`
  text-align: left;
  padding-left: 20px;
  margin-top: 35px;

  p {
    font-weight: bold;
    margin-bottom: 8px;
  }
  input {
    width: 92%;
    padding: 4px;
    margin-top: -10px;
  }
`;

const SubmitDiv = styled.div`
  display: grid;
  grid-template-columns: 45% auto;
  margin-top: 12%;

  div {
    text-align: center;
  }

  input {
    cursor: pointer;
  }
`;

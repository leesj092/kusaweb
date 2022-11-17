import React, { useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Input, Button } from "ui";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [major, setMajor] = useState("");
  const [DOB, setDOB] = useState("");
  const [number, setNumber] = useState("");
  const [ok, setOk] = useState(true);

  const history = useHistory();

  const check = () => {
    return (
      name != "" && email != "" && major != "" && DOB != "" && number != ""
    );
  };

  const onSignup = () => {
    if (check()) {
      console.log("nice");
      history.push("/home");
    } else {
      setOk(false);
    }
  };

  return (
    <PageBorder>
      <InputContainer>
        <InputLine>
          <InputTitle>이름</InputTitle>
          <InputBox
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputTitle>wisc 이메일</InputTitle>
          <InputBox
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputTitle>전공</InputTitle>
          <InputBox
            type="major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputTitle>생년</InputTitle>
          <InputBox
            type="DOB"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <InputTitle>전화번호</InputTitle>
          <InputBox
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></InputBox>
        </InputLine>
        <InputLine>
          <SubmitBtn onClick={onSignup}>Sign Up!</SubmitBtn>
          {!ok && <div>please fill out the form</div>}
        </InputLine>
      </InputContainer>
    </PageBorder>
  );
};

export default Signup;

const SubmitBtn = styled(Button)``;

const PageBorder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div``;
const InputLine = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

const InputTitle = styled.div`
  width: 100px;
`;

const InputBox = styled(Input)`
  display: flex;
  padding-left: 20px;
  width: 100%;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.txt_small};
  /* border: 1px solid rgb(192, 192, 192); */
  border: 1px solid ${({ theme }) => theme.colors.color_base_darker};
  line-height: 1.2;
  box-shadow: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.color_text_light} !important;
    transition: border-color 0.3s;
  }

  &:focus-within {
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
    transition: border-color 0.3s;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.color_text_placeholder};
  }
`;

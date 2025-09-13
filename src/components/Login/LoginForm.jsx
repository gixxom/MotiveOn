import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import logo from "../../assets/img/motiveon-login.png";
import Button from '../common/Button'
import InputField from '../common/InputField'
import bgImage from "../../assets/img/빌딩.jpg";


// Zustand Store
export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      login: (email) => set({ user: { email: email }, isLoggedIn: true }),
      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);



const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bgImage}) no-repeat center center/cover;
background-position: 30% 20%;  /* X축 30%, Y축 20% 위치 기준 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 390px;
  height: 844px;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Logo = styled.img` 
  width: 65%;
  margin-bottom: 20px;
`;

const LinkText = styled.a`
  font-size: 13px;
  color: #444;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserStore();
  const buttonRef = useRef(null);

  async function handleSubmit() {
    try {
      if (email && password) {
        console.log("로그인: " + email + " " + password);
        login(email);
        setEmail("");
        setPassword("");
      } else {
        alert("사번과 패스워드를 입력해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("로그인 실패");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      buttonRef.current.click();
    }
  }

  return (
    <Container>
      <Box>
        <Logo src={logo} alt="logo" />
        <InputField
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder=" 사번을 입력하세요."
        />
        <InputField
          type="password"
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder=" 비밀번호를 입력하세요."
        />
        <Button ref={buttonRef} onClick={handleSubmit} label="로그인" />
        <LinkText href="#">비밀번호를 잊으셨나요?</LinkText>
      </Box>
    </Container>
  );
}

export default Login;


import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// --- 스타일 컴포넌트 ---
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: "Noto Sans KR", sans-serif;
`;

const ImageSection = styled.div`
  flex: 1.2;
  background: linear-gradient(to right, #e0c3fc, #8ec5fc);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  h2 {
    font-family: "Playfair Display";
    font-size: 4rem; /* 3rem -> 4rem */
    margin-bottom: 20px;
    font-weight: 700;
  }
  p {
    font-size: 1.5rem; /* 1.2rem -> 1.5rem */
    opacity: 0.9;
  }

  /* 태블릿 이하에서는 이미지 섹션 숨기기 (선택사항) */
  @media (max-width: 900px) {
    display: none;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 40px; /* 화면이 작아질 때 여백 확보 */
`;

const FormBox = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 60px 50px;
  background: white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;

  /* 🔥 [핵심 변경] 대형 모니터(1440px 이상)에서는 박스 자체를 1.2배 키움 */
  @media (min-width: 1440px) {
    max-width: 700px; /* 폭을 700px까지 허용 */
    padding: 80px 60px; /* 내부 여백도 펑펑 씀 */
  }

  /* 모바일 대응 */
  @media (max-width: 480px) {
    padding: 40px 20px;
    box-shadow: none;
    background: transparent;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fcfcfc;
  box-sizing: border-box;
  transition: all 0.2s;

  &:focus {
    border-color: #8ec5fc;
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 4px rgba(142, 197, 252, 0.1);
  }

  /* 🔥 [핵심 변경] 대형 모니터에서는 글씨와 입력창 높이를 더 시원하게 */
  @media (min-width: 1440px) {
    padding: 22px 25px; /* 입력창 높이 증가 */
    font-size: 18px; /* 글씨 크기 증가 */
    margin-bottom: 30px; /* 간격 증가 */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 18px;
  background-color: #1d1d1d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }

  /* 🔥 [핵심 변경] 대형 모니터 버튼 크기 증가 */
  @media (min-width: 1440px) {
    padding: 22px;
    font-size: 20px;
    margin-top: 25px;
  }
`;

const LinkText = styled.p`
  margin-top: 25px;
  color: #888;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
    color: #1d1d1d;
  }
`;

// --- 컴포넌트 로직 ---
const Signup = () => {
  const navigate = useNavigate(); // 페이지 이동 훅
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://100.49.50.236/api/signup/", formData);
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login"); // 성공 시 로그인 페이지로 이동
    } catch (error: any) {
      alert("회원가입 실패: " + (error.response?.data?.message || "오류 발생"));
    }
  };

  return (
    <Container>
      <ImageSection>
        <h2>Select.</h2>
        <p>Pick your own mood</p>
      </ImageSection>
      <FormSection>
        <FormBox>
          <h2 style={{ fontFamily: "Playfair Display", marginBottom: "30px" }}>
            Sign Up
          </h2>
          <Input
            type="text"
            name="username"
            placeholder="아이디"
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Create Account</Button>
          <LinkText onClick={() => navigate("/login")}>
            이미 계정이 있으신가요? 로그인
          </LinkText>
        </FormBox>
      </FormSection>
    </Container>
  );
};

export default Signup;

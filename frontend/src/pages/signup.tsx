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
  flex: 1;
  background: linear-gradient(to right, #e0c3fc, #8ec5fc);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  h2 {
    font-family: "Playfair Display";
    font-size: 3rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

const FormBox = styled.div`
  width: 400px;
  padding: 50px;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #1d1d1d;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: 0.3s;
  &:hover {
    background-color: #333;
  }
`;

const LinkText = styled.p`
  margin-top: 20px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
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

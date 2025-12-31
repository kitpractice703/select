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

  /* [왼쪽 텍스트 크기 수정] 로그인 화면과 동일하게 맞춤 */
  h2 {
    font-family: "Playfair Display";
    font-size: 3rem; /* 4rem -> 3rem (축소) */
    margin-bottom: 20px;
    font-weight: 700;
  }
  p {
    font-size: 1.5rem; /* 적당한 크기 유지 */
    opacity: 0.9;
  }

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
  padding: 40px;
`;

const FormBox = styled.div`
  width: 100%;
  max-width: 420px; /* 로그인 박스와 동일한 너비 */
  padding: 50px 40px;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 40px 20px;
    box-shadow: none;
    background: transparent;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  background-color: #fcfcfc;
  box-sizing: border-box;
  transition: all 0.2s;

  &:focus {
    border-color: #8ec5fc;
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(142, 197, 252, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #1d1d1d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  transition: 0.3s;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }
`;

const LinkText = styled.p`
  margin-top: 20px;
  color: #888;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
    color: #1d1d1d;
  }
`;

// --- 컴포넌트 로직 ---
const Signup = () => {
  const navigate = useNavigate();
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
      await axios.post("/api/signup/", formData);
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login");
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
          {/* [오른쪽 제목 크기 수정] 2.5rem -> 2rem (로그인 제목 크기) */}
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

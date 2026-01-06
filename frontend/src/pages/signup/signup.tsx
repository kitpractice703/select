import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import S from './signup.style';

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
      await axios.post("http://100.49.50.236/api/signup/", formData);      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error: any) {
      alert("회원가입 실패: " + (error.response?.data?.message || "오류 발생"));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(); // 엔터 누르면 회원가입 실행!
    }
  };
  return (
    <S.Container>
      <S.ImageSection>
        <h2>Select.</h2>
        <p>Pick your own mood</p>
      </S.ImageSection>
      <S.FormSection>
        <S.FormBox>
          {/* [오른쪽 제목 크기 수정] 2.5rem -> 2rem (로그인 제목 크기) */}
          <h2 style={{ fontFamily: "Playfair Display", marginBottom: "30px" }}>
            Sign Up
          </h2>
          <S.Input
            type="text"
            name="username"
            placeholder="아이디"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <S.Input
            type="email"
            name="email"
            placeholder="이메일"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <S.Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <S.Button onClick={handleSubmit}>Create Account</S.Button>
          <S.LinkText onClick={() => navigate("/login")}>
            이미 계정이 있으신가요? 로그인
          </S.LinkText>
        </S.FormBox>
      </S.FormSection>
    </S.Container>
  );
};

export default Signup;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import S from "./style";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://100.49.50.236/api/signin/",
        formData
      );
      localStorage.setItem("username", response.data.username);
      alert(`${response.data.username}님 환영합니다!`);
      navigate("/"); 
    } catch (error: any) {
      alert(
        "로그인 실패: " +
          (error.response?.data?.message || "아이디/비번을 확인하세요")
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(); 
    }
  };

  // ▼ 여기 태그들 앞에 전부 'S.' 을 붙여주세요!
  return (
    <S.Container>
      <S.ImageSection>
        <h2>Select.</h2>
        <p>Welcome Back!</p>
      </S.ImageSection>
      <S.FormSection>
        <S.FormBox>
          <h2 style={{ fontFamily: "Playfair Display", marginBottom: "30px" }}>
            Login
          </h2>
          <S.Input
            type="text"
            name="username"
            placeholder="아이디"
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
          <S.Button onClick={handleSubmit}>Sign In</S.Button>
          <S.LinkText onClick={() => navigate("/signup")}>
            계정이 없으신가요? 회원가입
          </S.LinkText>
        </S.FormBox>
      </S.FormSection>
    </S.Container>
  );
};

export default Login;
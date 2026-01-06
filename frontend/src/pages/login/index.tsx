import { useState } from "react";
import api from "../../api/axios";
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
    // 1. 주소 변경: /signin/ -> /token/
    const response = await api.post("/token/", formData);

    // 2. 저장 변경: access token을 저장합니다.
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);
    
    // 3. 사용자 이름 저장 (편의상)
    localStorage.setItem("username", formData.username);

    alert("로그인 성공!");
    navigate("/"); 
  } catch (error: any) {
    alert("로그인 실패: 아이디와 비밀번호를 확인하세요.");
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
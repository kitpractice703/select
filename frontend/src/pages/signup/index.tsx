import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import S from './style';

const Signup = () => {
  const navigate = useNavigate();
  
  // 1. 입력값 상태
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // 2. 에러 메시지 저장할 상태 (추가됨!)
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // 입력할 때마다 에러 메시지 지워주기 (센스 있는 UX)
    setErrors({ ...errors, [name]: "" });
  };

  // 3. 검사 로직 함수 (핵심!)
  const validate = () => {
    const newErrors = { username: "", email: "", password: "" };
    let isValid = true;

    if (!formData.username) {
      newErrors.username = "아이디를 입력해주세요.";
      isValid = false;
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
      isValid = false;
    }
    if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    // 서버로 보내기 전에 검사부터! (통과 못하면 여기서 멈춤)
    if (!validate()) return;

    try {
      await api.post("/signup/", formData);
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error: any) {
      alert("회원가입 실패: " + (error.response?.data?.message || "오류 발생"));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <S.Container>
      <S.ImageSection>
        <h2>Select.</h2>
        <p>Pick your own mood</p>
      </S.ImageSection>
      <S.FormSection>
        <S.FormBox>
          <h2 style={{ fontFamily: "Playfair Display", marginBottom: "30px" }}>Sign Up</h2>
          
          {/* 아이디 입력칸 */}
          <S.Input
            type="text"
            name="username"
            placeholder="아이디"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ borderColor: errors.username ? "red" : "#ddd" }} // 에러나면 빨간테두리
          />
          {/* 에러 메시지 표시 */}
          {errors.username && <p style={{color: 'red', fontSize: '12px', textAlign: 'left', marginTop: '-10px', marginBottom: '10px'}}>{errors.username}</p>}

          {/* 이메일 입력칸 */}
          <S.Input
            type="email"
            name="email"
            placeholder="이메일"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ borderColor: errors.email ? "red" : "#ddd" }}
          />
          {errors.email && <p style={{color: 'red', fontSize: '12px', textAlign: 'left', marginTop: '-10px', marginBottom: '10px'}}>{errors.email}</p>}

          {/* 비밀번호 입력칸 */}
          <S.Input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ borderColor: errors.password ? "red" : "#ddd" }}
          />
          {errors.password && <p style={{color: 'red', fontSize: '12px', textAlign: 'left', marginTop: '-10px', marginBottom: '10px'}}>{errors.password}</p>}

          <S.Button onClick={handleSubmit}>Create Account</S.Button>
          <S.LinkText onClick={() => navigate("/login")}>이미 계정이 있으신가요? 로그인</S.LinkText>
        </S.FormBox>
      </S.FormSection>
    </S.Container>
  );
};

export default Signup;
import styled from "styled-components";

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

const S = {
  Container,
  ImageSection,
  FormSection,
  FormBox,
  Input,
  Button,
  LinkText
}


export default S;
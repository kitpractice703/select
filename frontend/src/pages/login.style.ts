import styled from "styled-components";

// 스타일 정의 (앞에 export를 뺍니다)
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: "Noto Sans KR", sans-serif;
`;

const ImageSection = styled.div`
  flex: 1;
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);
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

const S = {
  Container,
  ImageSection,
  FormSection,
  FormBox,
  Input,
  Button,
  LinkText,
};

export default S;
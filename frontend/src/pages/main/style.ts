import styled from "styled-components";

// --- 스타일 ---
const Container = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  padding-bottom: 50px;
  font-family: "Noto Sans KR", sans-serif;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 핵심: 최대 너비 제한을 없앱니다 */
  width: 100%;
  /* 양옆 여백만 조금 줍니다 (딱 붙으면 안 예쁘니까요) */
  padding: 20px 50px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-family: "Sacramento", cursive;
  font-size: 32px;
  cursor: pointer;
`;

const Hero = styled.header`
  text-align: center;
  padding: 80px 0;
  h1 {
    font-family: "Playfair Display", serif;
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  p {
    color: #666;
    margin-bottom: 40px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: none; /* 🔥 핵심: 너비 제한 해제 (무한대) */
  padding: 0 50px; /* Navbar와 라인을 맞추기 위한 여백 */
  box-sizing: border-box;
  gap: 40px;
  margin: 0 auto;

  /* 💻 데스크탑 (1024px 이상): 한 줄에 4개씩 꽉 채우기 */
  grid-template-columns: repeat(4, 1fr);

  /* 📱 태블릿 (화면 줄어들면): 한 줄에 2개 */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 📱 모바일: 한 줄에 1개 */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px; /* 모바일에서는 여백 줄임 */
  }
`;

const LogoutBtn = styled.button`
  background: none;
  border: 1px solid #ddd;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background: #333;
    color: white;
  }
`;

// --- 모달 스타일 ---
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 800px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ModalImage = styled.div<{ bg: string }>`
  flex: 1;
  min-height: 300px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;

const ModalText = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

const S = {
  Container, 
  Navbar, 
  Logo, 
  Hero, 
  GridContainer, 
  LogoutBtn, 
  ModalOverlay, 
  ModalContent, 
  ModalImage, 
  ModalText, CloseBtn, 
}

export default S;
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MoodCard, { type MoodData } from "../components/MoodCard"; // 위에서 만든 컴포넌트 임포트

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
  padding: 20px 50px;
  max-width: 1200px;
  margin: 0 auto;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
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

// --- 메인 컴포넌트 ---
const Main = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<MoodData | null>(null);

  // PDF 기반 데이터
  const moods: MoodData[] = [
    {
      id: "01",
      title: "Cozy",
      sub: "따뜻하고 편안한 무드",
      img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
      desc: "주말 오후의 햇살처럼 포근하고 아늑한 분위기를 선사합니다.",
    },
    {
      id: "02",
      title: "Lovely",
      sub: "사랑스러운 무드",
      img: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=800&auto=format&fit=crop",
      desc: "화사한 꽃과 파스텔톤 컬러가 어우러진 러블리한 스타일입니다.",
    },
    {
      id: "03",
      title: "Vintage",
      sub: "레트로 감성 무드",
      img: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=800&auto=format&fit=crop",
      desc: "시간이 지나도 변하지 않는 가치, 빈티지한 매력을 느껴보세요.",
    },
    {
      id: "04",
      title: "Classic",
      sub: "심플하고 깔끔한 무드",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
      desc: "유행을 타지 않는 정석적인 아름다움, 클래식 스타일입니다.",
    },
    {
      id: "05",
      title: "Minimal",
      sub: "미니멀리즘",
      img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
      desc: "덜어낼수록 채워지는 미학, 단순함 속에 숨겨진 세련됨입니다.",
    },
    {
      id: "06",
      title: "Street",
      sub: "자유로운 스트릿",
      img: "https://images.unsplash.com/photo-1550949987-0b171092523d?q=80&w=800&auto=format&fit=crop",
      desc: "틀에 박히지 않은 자유로움과 힙한 에너지를 표현합니다.",
    },
  ];

  return (
    <Container>
      <Navbar>
        <div style={{ width: 50 }}></div>
        <Logo>Select.</Logo>
        <LogoutBtn onClick={() => navigate("/login")}>Logout</LogoutBtn>
      </Navbar>

      <Hero>
        <h1>
          Less choice
          <br />
          Better taste.
        </h1>
        <p>덜 헤매고, 더 만족스럽게</p>
        <button
          style={{
            padding: "10px 25px",
            background: "transparent",
            border: "1px solid #333",
            cursor: "pointer",
          }}
        >
          find your mood →
        </button>
      </Hero>

      <div style={{ borderTop: "1px dashed #ccc", margin: "0 0 50px 0" }}></div>

      <h2
        style={{
          textAlign: "center",
          fontFamily: "Caveat, cursive",
          fontSize: "42px",
          color: "#444",
          marginBottom: "50px",
        }}
      >
        Pick your own Mood
      </h2>

      <GridContainer>
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            {...mood}
            onClick={() => setSelectedMood(mood)}
          />
        ))}
      </GridContainer>

      {/* 모달창 구현 */}
      {selectedMood && (
        <ModalOverlay onClick={() => setSelectedMood(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage bg={selectedMood.img} />
            <ModalText>
              <CloseBtn onClick={() => setSelectedMood(null)}>&times;</CloseBtn>
              <span
                style={{
                  fontFamily: "Playfair Display",
                  color: "#888",
                  letterSpacing: "2px",
                }}
              >
                NO. {selectedMood.id}
              </span>
              <h2
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: "42px",
                  margin: "10px 0",
                }}
              >
                {selectedMood.title}
              </h2>
              <h3 style={{ fontSize: "16px", color: "#666", fontWeight: 400 }}>
                {selectedMood.sub}
              </h3>
              <p style={{ marginTop: "20px", lineHeight: 1.6, color: "#444" }}>
                {selectedMood.desc}
              </p>
              <button
                style={{
                  marginTop: "30px",
                  padding: "15px",
                  background: "#1d1d1d",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Select this mood
              </button>
            </ModalText>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Main;

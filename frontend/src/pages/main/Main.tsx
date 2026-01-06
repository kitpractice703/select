import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MoodCard, { type MoodData } from "../../components/MoodCard"; // 위에서 만든 컴포넌트 임포트
import S from './style';

// --- 메인 컴포넌트 ---
const Main = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<MoodData | null>(null);
  // 1. 로그인 상태를 저장할 변수 만들기
  const [username, setUsername] = useState<string | null>(null);

  // 2. 화면이 켜질 때 딱 한번 실행되는 검사원
  useEffect(() => {
    const storedUser = localStorage.getItem("username"); // 저장소 확인
    if (storedUser) {
      setUsername(storedUser); // 이름이 있으면 "로그인 됨"으로 설정
    }
  }, []);

  // 3. 로그아웃 버튼을 눌렀을 때 실행할 함수
  const handleLogout = () => {
    localStorage.removeItem("username"); // 저장소에서 이름 지우기 (핵심!)
    setUsername(null); // 화면 상태 초기화
    alert("로그아웃 되었습니다.");
    navigate("/login"); // 로그인 페이지로 이동
  };

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
      img: "https://plus.unsplash.com/premium_photo-1710064217185-8351ee74d564?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "틀에 박히지 않은 자유로움과 힙한 에너지를 표현합니다.",
    },
  ];

  return (
    <S.Container>
      <S.Navbar>
        <div style={{ width: 50 }}></div>
        <S.Logo>Select.</S.Logo>

        {/* username이 있으면 로그아웃, 없으면 로그인 버튼 보여주기 */}
        {username ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "14px", color: "#666" }}>
              {username}님
            </span>
            <S.LogoutBtn onClick={handleLogout}>Logout</S.LogoutBtn>
          </div>
        ) : (
          <S.LogoutBtn onClick={() => navigate("/login")}>Login</S.LogoutBtn>
        )}
      </S.Navbar>

      <S.Hero>
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
      </S.Hero>

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

      <S.GridContainer>
        {moods.map((mood) => (
          <MoodCard
            key={mood.id}
            {...mood}
            onClick={() => setSelectedMood(mood)}
          />
        ))}
      </S.GridContainer>

      {/* 모달창 구현 */}
      {selectedMood && (
        <S.ModalOverlay onClick={() => setSelectedMood(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalImage bg={selectedMood.img} />
            <S.ModalText>
              <S.CloseBtn onClick={() => setSelectedMood(null)}>&times;</S.CloseBtn>
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
            </S.ModalText>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default Main;

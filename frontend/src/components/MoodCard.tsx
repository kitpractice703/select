import styled from "styled-components";

// 1. 데이터 타입 정의 (TypeScript 필수!)
export interface MoodData {
  id: string;
  title: string;
  sub: string;
  img: string;
  desc: string;
}

interface MoodCardProps extends MoodData {
  onClick: () => void;
}

// 2. 스타일 정의
const Card = styled.div`
  background: #fff;
  padding: 12px 12px 30px 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-align: left;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    img {
      transform: scale(1.1);
    }
  }
`;

const CardNumber = styled.div`
  position: absolute;
  top: -25px;
  left: 0;
  font-family: "Playfair Display", serif;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const OverlaySub = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  opacity: 0.9;
  font-weight: 300;
`;

const OverlayTitle = styled.div`
  font-family: "Courier New", monospace;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
`;

// 3. 컴포넌트 구현
const MoodCard = ({ id, title, sub, img, onClick }: MoodCardProps) => {
  return (
    <Card onClick={onClick}>
      <CardNumber>{id}</CardNumber>
      <ImageWrapper>
        <img src={img} alt={title} />
        <OverlayText>
          <OverlaySub>{sub}</OverlaySub>
          <OverlayTitle>{title}</OverlayTitle>
        </OverlayText>
      </ImageWrapper>
    </Card>
  );
};

export default MoodCard;

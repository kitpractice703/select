import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 주소(/)로 접속하면 Main 페이지를 보여줌 */}
        <Route path="/" element={<Main />} />

        {/* /login 주소로 접속하면 Login 페이지 */}
        <Route path="/login" element={<Login />} />

        {/* /signup 주소로 접속하면 Signup 페이지 */}
        <Route path="/signup" element={<Signup />} />

        {/* 이상한 주소로 들어오면 로그인 페이지로 튕기기 */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

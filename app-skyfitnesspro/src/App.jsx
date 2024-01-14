import * as S from "./AppStyle";
import { GlobalStyled } from "./GlobalAppStyle";
import AppRoutes from "./routers";
import { useLocation } from "react-router-dom";



function App() {
 
  const location = useLocation();
  return (
    <S.Wrapper
      style={{
        backgroundColor: location.pathname === "/" ? "#271a58" : "#FAFAFA",
      }}
    >
      <S.Container>
        <AppRoutes />
      </S.Container>
      <GlobalStyled />
    </S.Wrapper>
  );
}

export default App;

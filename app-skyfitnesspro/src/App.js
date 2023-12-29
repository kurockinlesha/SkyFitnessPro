// import { Password } from "./components/Password/Password";
// import { Login } from "./components/Login/Login";
import * as S from "./AppStyle";
import { Profile } from "./components/Profile/Profile";
import { GlobalStyles } from "./global.styled";
import { WorkOutComponent } from "./components/work-out-component/work-out-component";

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <Profile />
        {/* <Password /> */}
      </S.Container>
      <GlobalStyles />
     <WorkOutComponent />
    </S.Wrapper>
  );
}

export default App;

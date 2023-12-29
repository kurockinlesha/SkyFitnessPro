// import { Password } from "./components/Password/Password";
// import { Login } from "./components/Login/Login";
import * as S from "./AppStyle";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <Profile />
        {/* <Password /> */}
      </S.Container>
    </S.Wrapper>
  );
}

export default App;

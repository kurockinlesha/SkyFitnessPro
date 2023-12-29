import * as S from "./App.styled";
import { GlobalStyles } from "./global.styled";
import { WorkOutComponent } from "./components/work-out-component/work-out-component";

function App() {
  return (
    <S.Wrapper>
      <GlobalStyles />
     <WorkOutComponent />
    </S.Wrapper>
  );
}

export default App;

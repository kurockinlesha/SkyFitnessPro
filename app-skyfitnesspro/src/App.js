
import "./App.css";
import { Password } from "./components/Password/Password";
import { Login } from "./components/Login/Login";

import { Profile } from "./components/Profile/Profile";

function App() {

  return (
    <div className="Wrapper">
      <div className="Container">
        <Profile />
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;

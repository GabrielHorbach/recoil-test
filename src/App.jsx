import { RecoilRoot } from "recoil";
import "./App.css";
import { Deathnote } from "./components/Deathnote";

function App() {
  return (
    <RecoilRoot>
      <Deathnote />
    </RecoilRoot>
  );
}

export default App;

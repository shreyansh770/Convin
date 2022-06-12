import { useSelector } from "react-redux";
import User from "./Components/User";

function App() {

  let details = useSelector(state=>state)


  return (
    <>
       <User></User>
    </>
  );
}

export default App;

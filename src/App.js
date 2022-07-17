
import { useAddress } from "@thirdweb-dev/react";
import { useState,useEffect } from "react";
import "./App.css";
import Home from "./home";
import SignIn from "./singn";


function App() {
  const address = useAddress();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (address) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [address]);

  return <div className="App">{isLogged ? <Home /> : <SignIn />}</div>;
}

export default App;

import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [user, setuser] = useState(null);

  return (
    <>
      {user ? (
        <Home user={user} setUser={setuser} />
      ) : (
        <Login setUser={setuser} />
      )}
    </>
  );
}

export default App;

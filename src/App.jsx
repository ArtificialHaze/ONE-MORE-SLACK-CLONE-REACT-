import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
// IMPORT FIRE BASE Auth

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  // const [user,loading]=useAuthState(auth)

  return (
    <div className="app">
      <Router>
        {/* {!user?<Login/>:
        
        } */}
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Chat />} />
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
};

export default App;

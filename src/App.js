import "./App.css";
import React, { useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { DroneState } from "./context/Context";
import SignIn from "./pages/SignIn";
import styled from "styled-components";
import DropMenu from "./components/dropDown/DropMenu";
import Container from "./components/auth/Container";
import AlertMessage from "./components/Alert/Alert";

function App() {
  const { isAuth, toggle, moveAuth, setMoveAuth } = DroneState();
  const isMove = useRef(null);

  // if outside the box is clicked the modal will be closed
  useEffect(() => {
    const clickOutSide = (e) => {
      if (!isMove.current?.contains(e.target)) {
        setMoveAuth(false);
      }
    };

    window.addEventListener("mousedown", clickOutSide);

    return () => {
      window.removeEventListener("mousedown", clickOutSide);
    };
  }, [setMoveAuth]);

  return (
    <Wrapper moveAuth={moveAuth} toggle={toggle}>
      <BrowserRouter>
        <Header />
        <div ref={isMove} className="auth">
          <Container />
        </div>
        <div className="drop">
          <DropMenu />
        </div>
        <AlertMessage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {isAuth && <Route path="/cart" element={<Cart />} />}
          {!isAuth && <Route path="/signIn" element={<SignIn />} />}
          <Route
            path="*"
            element={<Navigate to={isAuth ? "/" : "/signIn"} />}
          />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  .auth {
    position: absolute;
    top: 64px;
    right: ${(props) => (props.moveAuth ? "0" : "-15rem")};
    transition: all 500ms ease-in-out;
    z-index: 1000;
    height: 20rem;
  }
  .drop {
    position: absolute;
    top: 64px;
    left: ${(props) => (props.toggle ? 0 : "-15rem")};
    transition: all 500ms ease-in-out;
    z-index: 1000;
  }
`;

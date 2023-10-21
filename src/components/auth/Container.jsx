import React from "react";
import styled from "styled-components";
import { DroneState } from "../../context/Context";
import Login from "./Login";
import LogOut from "./LogOut";
import SignUp from "./SignUp";

const Container = () => {
  const { move, isAuth } = DroneState();

  return (
    <Wrapper move={move} isAuth={isAuth}>
      {!isAuth ? (
        <>
          <div className="signin">
            <Login />
          </div>
          <div className="signup">
            <SignUp />
          </div>
        </>
      ) : (
        <LogOut />
      )}
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  width: 15rem;
  background-color: #3a3a3a;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  padding: ${(props) => (props.isAuth ? "0.7rem 0" : "2rem 0")};
  overflow: hidden;
  .signup {
    position: absolute;
    right: ${(props) => (props.move ? "0" : "-15rem")};
    transition: all 500ms ease-in-out;
  }
  .signin {
    transition: all 500ms ease-in-out;
    transform: ${(props) =>
      props.move ? "translateX(-15rem)" : "translateX(0)"};
  }
`;

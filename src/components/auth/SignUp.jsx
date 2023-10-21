import React, { useState } from "react";
import styled from "styled-components";
import { DroneState } from "../../context/Context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SignUp = () => {
  const { setMoveAuth, setMessage, setMove } = DroneState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const addUser = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        user
      );
      setMessage({
        open: true,
        text: `${result.user.email} Signed Up`,
        type: "success",
      });
      navigate("/");
      setMoveAuth(false);
    } catch (error) {
      setMessage({
        open: true,
        text: error.message,
        type: "error",
      });
    }
  };
  return (
    <Container>
      <Icon onClick={() => setMove(false)}>
        <ChevronLeftIcon sx={{ fontSize: "1.3rem", pointerEvents: "none" }} />
      </Icon>
      <Head>
        <h2>Sign Up</h2>
      </Head>
      <Body>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Your user"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Your Password"
        />
        <input
          value={confirmedPass}
          onChange={(e) => setConfirmedPass(e.target.value)}
          type="password"
          placeholder="Re-type Password"
        />
      </Body>
      <Foot>
        <button onClick={addUser} className="btn">
          Create Account
        </button>
      </Foot>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 15rem;
`;
const Icon = styled.span`
  position: absolute;
  top: 0;
  left: 1rem;
  background-color: #0aaf54;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Head = styled.div`
  h2 {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    padding-bottom: 0.5rem;
  }
`;
const Body = styled.div`
  padding: 0 1rem;
  input {
    text-align: center;
    background-color: #646464;
    border: none;
    outline: none;
    color: white;
    width: 100%;
    padding: 0.4rem 0.3rem;
    border-radius: 50px;
    margin-top: 0.5rem;
    ::placeholder {
      color: #acacac;
      font-size: 0.7rem;
    }
  }
  .btn {
    position: absolute;
    right: -0.1rem;
    top: 0;
    width: 2.3rem;
    border: none;
    padding: 0.1rem 0;
    cursor: pointer;
    background-color: #0aaf54;
    :hover {
      background-color: #03ca5d;
    }
    color: white;
  }
  p {
    text-align: center;
    text-transform: capitalize;
    font-size: 0.7rem;
    color: #979595;
    padding: 0.5rem 0;
    cursor: pointer;
    :hover {
      color: #b8b6b6;
    }
  }
`;
const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  padding-top: 0.5rem;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: #0aaf54;
    color: white;
    padding: 0.4rem 0.5rem;
    border-radius: 50px;
    :hover {
      background-color: #03ca5d;
    }
  }
  p {
    font-size: 0.8rem;
  }
`;

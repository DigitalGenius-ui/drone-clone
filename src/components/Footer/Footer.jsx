import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Contents>
        <Table>
            <ul>
                <li>Get to know us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Other Drones</li>
                <li>News</li>
            </ul>
            <ul>
                <li>Discover and Shop</li>
                <li>Multicopter</li>
                <li>Airplanes</li>
                <li>Other Drones</li>
                <li>Flight Electronic</li>
                <li>Search</li>
            </ul>
            <ul>
                <li>Join Community</li>
                <li>Forum</li>
                <li>Groups</li>
                <li>Learning Center</li>
            </ul>
            <ul>
                <li>Follow Us</li>
                <li className="icons"><Facebook style={{fontSize : "1.3rem"}}/>Facebook</li>
                <li className="icons"><Twitter style={{fontSize : "1.3rem"}}/>Twitter</li>
                <li className="icons"><LinkedIn style={{fontSize : "1.3rem"}}/>LinkedIn</li>
            </ul>
        </Table>
        <Content>
            <h4>Get More <br></br>Fun</h4>
        </Content>
    </Contents>
  );
};

export default Footer;

const Contents = styled.div`
    height: 20rem;
    width : 85%;
    margin : 0 auto;
    overflow: hidden;
    position : relative;
`
const Content = styled.div`
    background: url("https://digitalgenius-ui.github.io/drone/images/home5.png");
    background-position: right;
    background-repeat: no-repeat;
    background-size: 25rem;
    height: 25rem;
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
    position : absolute;
    right : 0;
    top : 1rem;
    width : 26rem;
    h4{
        font-size: 1.9rem;
        margin-top: 4rem;
        letter-spacing: 0.1rem;
        color : #f86109;
    }
`

const Table = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    width : 68%;
    ul li {
        :nth-child(1){
            font-size: 1.2rem;
            font-weight: 600;
            cursor : default;
            color : #000;
        }
    }
    ul li {
        margin : 1rem 0;
        font-size: 0.9rem;
        cursor : pointer;
        color : #3333339d;
        :hover{
            font-weight: 600;
        }
    }
    .icons{
        display: flex;
        align-items: center;
        gap : 0.5rem;
    }
`
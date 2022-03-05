import { ArrowRight } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const DropMenu = () => {
  return (
    <Container>
      <h2>shop</h2>
      <ul className="lists">
        <li className="list">
          <p>
            <ArrowRight className="arrow" />
            buy
          </p>
          <ul>
            <li>Submenu1</li>
            <li>Submenu2</li>
            <li>Submenu3</li>
            <li>Submenu4</li>
          </ul>
        </li>
      </ul>
      <ul className="sells">
        <li className="sell">
          <p>
            <ArrowRight className="arrow" />
            sell
          </p>
          <ul>
            <li>Submenu1</li>
            <li>Submenu2</li>
            <li>Submenu3</li>
            <li>Submenu4</li>
          </ul>
        </li>
      </ul>
      <ul className="rents">
        <li className="rent">
          <p>
            <ArrowRight className="arrow" />
            rent
          </p>
          <ul>
            <li>Submenu1</li>
            <li>Submenu2</li>
            <li>Submenu3</li>
            <li>Submenu4</li>
          </ul>
        </li>
      </ul>
      <ul className="hires">
        <li className="hire">
          <p>
            <ArrowRight className="arrow" />
            hire
          </p>
          <ul>
            <li>Submenu1</li>
            <li>Submenu2</li>
            <li>Submenu3</li>
            <li>Submenu4</li>
          </ul>
        </li>
      </ul>
      <Body>
        <ul className="lists">
          <li className="list">
            <p>
              <ArrowRight className="arrow" />
              buy
            </p>
            <ul>
              <li>Submenu1</li>
              <li>Submenu2</li>
              <li>Submenu3</li>
              <li>Submenu4</li>
            </ul>
          </li>
        </ul>
        <ul className="sells">
          <li className="sell">
            <p>
              <ArrowRight className="arrow" />
              sell
            </p>
            <ul>
              <li>Submenu1</li>
              <li>Submenu2</li>
              <li>Submenu3</li>
              <li>Submenu4</li>
            </ul>
          </li>
        </ul>
        <ul className="rents">
          <li className="rent">
            <p>
              <ArrowRight className="arrow" />
              rent
            </p>
            <ul>
              <li>Submenu1</li>
              <li>Submenu2</li>
              <li>Submenu3</li>
              <li>Submenu4</li>
            </ul>
          </li>
        </ul>
        <ul className="hires">
          <li className="hire">
            <p>
              <ArrowRight className="arrow" />
              hire
            </p>
            <ul>
              <li>Submenu1</li>
              <li>Submenu2</li>
              <li>Submenu3</li>
              <li>Submenu4</li>
            </ul>
          </li>
        </ul>
      </Body>
      <Foot>
          <h2>library</h2>
      </Foot>
    </Container>
  );
};

export default DropMenu;

const Container = styled.div`
  background-color: #3a3a3a;
  color: white;
  width: 11rem;
  text-transform: uppercase;
  h2 {
    font-size: 1rem;
    padding: 1rem;
  }
  .lists {
    padding: 0 1rem 0.5rem 1rem;
    :hover .list {
      height: auto;
    }
  }
  .hires {
    padding: 0 1rem 0.5rem 1rem;
    :hover .hire {
      height: auto;
    }
  }
  .sells {
    padding: 0 1rem 0.5rem 1rem;
    :hover .sell {
      height: auto;
    }
  }
  .rents {
    padding: 0 1rem 0.5rem 1rem;
    :hover .rent {
      height: auto;
    }
  }
  ul li p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    cursor: pointer;
  }
  .list,
  .sell,
  .rent,
  .hire {
    overflow: hidden;
    height: 1rem;
    :hover {
      background-color: #666666;
    }
    :hover .arrow {
      color: #05c4e6;
    }
    .arrow {
      font-size: 1.2rem;
    }
    ul li {
      padding: 0.2rem 1rem;
      font-size: 0.6rem;
      text-transform: capitalize;
      cursor: pointer;
      :hover {
        font-weight: 600;
      }
    }
  }
`;
const Body = styled(Container)`
    margin-top: 0.5rem;
    border-top: 2px solid #8b8a8a;
    border-bottom: 2px solid #8b8a8a;
    padding: 0.5rem 0;
`

const Foot = styled.div`
    padding: 0.5rem 0 ;
    h2{
        font-weight: 400;
        cursor: pointer;
    }
`

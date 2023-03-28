import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Category = () => {
  const categories = [
    {
      title: "MultiCopters",
      logo: "https://digitalgenius-ui.github.io/drone/images/imag1.png",
    },
    {
      title: "AirPlanes",
      logo: "https://digitalgenius-ui.github.io/drone/images/imag2.png",
    },
    {
      title: "Other Dronss",
      logo: "https://digitalgenius-ui.github.io/drone/images/image3.png",
    },
    {
      title: "Flight Electronics",
      logo: "https://digitalgenius-ui.github.io/drone/images/imag4.png",
    },
    {
      title: "View All",
      logo: "https://www.shareicon.net/data/2015/08/03/79323_windows_512x512.png",
    },
  ];
  return (
    <Contents>
      <Typography className="title" variant="h4">
        Popular Category
      </Typography>
      <Items>
        {categories.map((cat, i) => (
          <Content key={i}>
            <img
              style={{ width: "3.7rem", opacity: "0.6" }}
              src={cat.logo}
              alt="signs"
<<<<<<< HEAD
              className={cat.title === "View All" ? "all" : ""}
            />
            <div>
              {cat.title}
              <ArrowRightIcon
=======
              className={cat.title === "View All" && "all"}
            />
            <div>
              {cat.title}
              <ArrowRight
>>>>>>> 287bb7b1a3f565e62e26da8dcd5c463b021e18d2
                style={{ fontSize: "1.2rem", marginLeft: "-0.2rem" }}
              />
            </div>
          </Content>
        ))}
      </Items>
    </Contents>
  );
};

export default Category;

const Contents = styled.div`
  background-color: #eeeded9e;
  margin: 3rem 0;
  padding: 4rem 0;
  .title {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #3333339d;
  }
  .all {
    width: "3.7rem";
    opacity: "0.6";
  }
`;
const Content = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    padding: 0.7rem 0;
    font-size: 0.9rem;
    color: #333333c3;
    font-weight: 400;
    cursor: pointer;

    :hover {
      color: #000;
    }
  }
`;
const Items = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: center;
`;

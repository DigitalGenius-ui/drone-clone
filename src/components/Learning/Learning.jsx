import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { ArrowRight } from "@material-ui/icons";

const Learning = () => {
  return (
    <Contents>
      <Typography className="title" variant="h4">
        Learning Center
      </Typography>
      <Items>
        <div className="cart">
          <div className="item">
            <div className="text">
              <h4 style={{fontSize : "0.9rem"}}>How to assemble quadcopter?</h4>
              <p style={{fontSize : "0.8rem", paddingTop : "0.2rem", fontWeight : "400"}}>by David Hotines</p>
            </div>
            <div className="img">
              <img
              style={{width : "3rem", height : "3rem", objectFit : "cover", borderRadius : "50px", border : "2px solid #fff"}}
              src="https://digitalgenius-ui.github.io/drone/images/jawad.jpg" alt="author" />
            </div>
          </div>
        </div>
        <div className="cart">
          <div className="item1">
            <div className="text">
              <h4 style={{fontSize : "0.9rem"}}>Dji Phantom quacopter drons</h4>
              <p style={{fontSize : "0.8rem", paddingTop : "0.2rem", fontWeight : "400"}}>by Colin Smith</p>
            </div>
            <div className="img">
              <img
              style={{width : "3rem", height : "3rem", objectFit : "cover", borderRadius : "50px", border : "2px solid #fff"}}
              src="https://digitalgenius-ui.github.io/drone/images/mahdi.jpg" alt="author" />
            </div>
          </div>
        </div>
        <div className="cart">
          <div className="item3">
            <div className="text">
              <h4 style={{fontSize : "0.9rem"}}>Dji Phantom quacopter drons</h4>
              <p style={{fontSize : "0.8rem", paddingTop : "0.2rem", fontWeight : "400"}}>by Colin Smith</p>
            </div>
            <div className="img">
              <img
              style={{width : "3rem", height : "3rem", objectFit : "cover", borderRadius : "50px", border : "2px solid #fff"}}
              src="https://digitalgenius-ui.github.io/drone/images/mahdi.jpg" alt="author" />
            </div>
          </div>
        </div>
      </Items>
        <Btn>
          <button className="btn">Visit Learning Center<ArrowRight
          style={{marginLeft : "-0.2rem"}}/></button>
        </Btn>
    </Contents>
  );
};

export default Learning;

const Contents = styled.div`
    padding-bottom : 2rem;
  .title {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #3333339d;
  }
`
const Items = styled.div`
  display : grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap : 1rem;
  width : 85%;
  margin : 2rem auto;
  .cart{
    display : flex;
    align-items : flex-end;
    background-color: black;
    background : url("https://images.squarespace-cdn.com/content/v1/5929b94b197aea2858ff65c1/1599593653288-ZBH0RGERAFFM5CH1P276/shutterstock_672926281.jpg?format=1500w");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width : 100%;
    height: 15rem;
    :nth-child(2) {
      background : url("https://www.plazakamera.com/wp-content/uploads/2016/04/dt.common.streams.StreamServer.jpeg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    :nth-child(3) {
      background : url("https://cdn-2.tstatic.net/kaltim/foto/bank/images/drone_20170906_121306.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  
  .item{
    width : 100%;
    color : white;
    background: linear-gradient(#00000011, #04a8a0);
    display : flex;
    align-items: center;
    justify-content : space-between;
    padding : 0.8rem;
  }
  .item1{
    background: linear-gradient(#00000011, #f34242);
    display : flex;
    align-items: center;
    justify-content : space-between;
    padding : 0.8rem;
    width : 100%;
    color : white;
  }
  .item3{
    background: linear-gradient(#00000011, #ff75ca);
    display : flex;
    align-items: center;
    justify-content : space-between;
    padding : 0.8rem;
    width : 100%;
    color : white;
  }
`

const Btn  =styled.div`
  display: flex;
  align-items : center;
  justify-content: center;
  .btn{
    display: flex;
    align-items : center;
    padding : 0.4rem 0.9rem;
    border-radius : 50px;
    border : none;
    background-color: #03aaaa;
    color : white;
    cursor : pointer;
    :hover{
      background-color: #037272;
    }
  }
`
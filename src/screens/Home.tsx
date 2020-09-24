import React from "react";
import styled from "styled-components";
import { Button } from "../components/UI/Buttons";
import HomeBackground from "../assets/home_bg.svg";
import { Link } from "react-router-dom";
const Jombotron = styled.div<{ image: any }>`
  width: 75%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h3<{ marginTop: String }>`
  font-size: 25px;
  padding: 1em;
  width: 90%;
  height: 20vh;
  border: 1px solid #eee;

  margin-top: ${(props) => props.marginTop + "em"};
  background-color: #fff;
  color: black;
`;

const Home = () => {
  return (
    <>
      <Jombotron image={HomeBackground}>
        <Title marginTop={"4"}>
          Puedes consultar tus descuendos de AFP y ARS
        </Title>
        <br />
        <Link to="/calculation">
          <Button primary>
            Consultar <i className="fas fa-arrow-right"></i>
          </Button>
        </Link>
      </Jombotron>
    </>
  );
};

export default Home;

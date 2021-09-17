import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Video from "../../videos/video.mp4";
import {Button} from "../ButtonElements"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroP
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/
                mp4"
        />
      </HeroBg>
      <HeroH1>Welcome to the dark side! Code, Chat, and Chew! </HeroH1>
      <HeroP>
        Sign up today to get free tips and tricks directly sent to your email!
      </HeroP>
      <HeroBtnWrapper>
        <Button to="signup" onMouse={onHover} onMouseLeave={onHover}>
          Get started{hover ? <ArrowForward /> : <FaArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

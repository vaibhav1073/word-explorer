import React, { useState, useEffect, useRef } from "react";
import worldImage from "../../assests/worldimage.png"
import { Box, Container, Typography } from "@mui/material";

import { textArrays } from "../../../utils/constants/copyrightTexts";
import { box1, typographyStyle } from "./typerTextStyles";

export const TyperText = () => {
  const [typedText, setTypedText] = useState("");
  const [isIntersecting,setIsIntersecting]=useState(false)
  const typoRef=useRef(null)
  const texts = textArrays;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if(isIntersecting){
        currentText = texts[currentIndex];
      setTypedText(currentText);
      currentIndex++;

      if (currentIndex === texts.length) {
        currentIndex = 0;
      }
      }
      else clearInterval(typingInterval);
    }, 180); // Adjust the delay (in milliseconds) to control the typing speed

    return () => clearInterval(typingInterval);
  }, [isIntersecting]);

  useEffect(()=>{
    const options={rootMargin:"20px",threshold:0.5}
    const observer=new IntersectionObserver((entries)=>{
      setIsIntersecting(entries[0].isIntersecting)
    },options)

    if(typoRef.current)observer.observe(typoRef.current)
    return ()=>observer.disconnect();
  },[])

  return (
    <React.Fragment>
      <Box
        sx={{...box1,backgroundImage: `url(${worldImage})`}}
      >
        <Container>
          <Typography variant="h2" sx={{}}>
            Explore the
          </Typography>
          <Typography
            variant="h2"
            sx={typographyStyle}
            ref={typoRef}
          >
            {typedText}
          </Typography>
        </Container>
        
      </Box>
    </React.Fragment>
  );
};

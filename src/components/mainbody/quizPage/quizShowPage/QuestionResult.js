import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const QuestionResult = ({ correct, answer }) => {
  const typographyText = correct ? "Awesome!" : "Oopsie!";
  const color = correct ? "#4caf50" : "#f44336";
  const iconStyles = {
    fontSize: "200px",
    color: "white",
    transition: "font-size 1s ease-in-out, color 1s ease-in-out",
  };

  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "80%", md: "50%" }, //take the width from question container class
        bgcolor: color,
        color: "white",
        transform: "translateY(100%)",
        transition: "transform 2s ease-in-out",
        "&.show": {
          transform: "translateY(0)",
        },
      }}
      className="show"
    >
      <CardContent>
        <Typography variant="h3" component="div">
          {typographyText}
        </Typography>
        {correct ? (
          <CheckOutlinedIcon sx={iconStyles} />
        ) : (
          <ClearIcon sx={iconStyles} />
        )}
        <Typography variant="h4" component="div">
          correct answer is {answer}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestionResult;

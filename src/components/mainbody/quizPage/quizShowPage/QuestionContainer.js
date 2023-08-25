import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import QuestionResult from "./QuestionResult";
import { setAttempt } from "../../../../services/slices/quizSlice";

const QuestionContainer = ({ questionObj, index }) => {
  const dispatch=useDispatch()

  const [attempted, setAttempted] = useState(new Map());
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClick = (e) => {
    // if (e.target.textContent === questionObj?.answer) setIsCorrect(true);
    // else setIsCorrect(false);
    // const prevMap = new Map(attempted);
    // prevMap.set(index, e.target.textContent === questionObj?.answer);
    // setAttempted(prevMap);
    const result= e.target.textContent === questionObj?.answer
    dispatch(setAttempt({index,attempted:true,result}))
  };
  return (
    <>
      {questionObj?.attempted ? (
        <QuestionResult
          answer={questionObj?.answer}
          correct={questionObj?.result}
        />
      ) : (
        <Card
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", md: "80%", sm: "90%", lg: "1000px" },
            flexWrap: "wrap",
            
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mb:1
            }}
          >
            {questionObj?.media ? (
              <CardMedia
                sx={{
                  
                  width: {xs:'100%',md:'50%'},
                  mb: 2,
                  p: 1,
                  border: "0.1px solid grey",
                }}
                component="img"
                image={questionObj?.media}
                title="countryImage"
              />
            ) : (
              <></>
            )}
            <CardContent>
              <Typography variant="h5" component="div">
                {questionObj?.question}
              </Typography>
            </CardContent>
            <Grid
              container
              spacing={1}
              sx={{ maxWidth: "100%", marginTop: 2 }}
              justifyContent="center"
              alignItems="center"
            >
              {questionObj?.choices?.map((choice) => (
                <Grid item key={choice} xs={10} sm={12} md={6}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "80%",
                      margin: 0.5,
                      ":hover": { bgcolor: "#0476c1", color: "white" },
                    }}
                    onClick={(e) => handleClick(e)}
                  >
                    {choice}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Card>
      )}
    </>
  );
};

export default QuestionContainer;

import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../loader/Loader";
import { quizHeading } from "../../../../utils/constants/copyrightTexts";
import QuizFaq from "../quizFAQ/QuizFaq";
import QuestionNumberSelector from "./QuestionNumberSelector";
import { Box, Container, Rating, Toolbar, Typography } from "@mui/material";

const QuizLoader = lazy(() => import("../quizShowPage/QuizLoader"));

const QuizHome = () => {
  const startQuiz = useSelector((state) => state?.quiz?.startQuiz);
  const prevQuizResult = useSelector((state) => state?.quiz?.score);
  return (
    <Container sx={{ textAlign: "center" }}>
      <Toolbar />

      {!startQuiz ? (
        <>
          <Typography variant="h2" sx={{mb:4}}>
            {quizHeading}
          </Typography>
          <Toolbar />
          {prevQuizResult.length === 3 ? (
            <>
            <Box border={0.1} m={2}>
              <Typography variant="h5">
                Your rating from the previous Quiz:
              </Typography>
              <Rating
                m={2}
                readOnly
                value={Math.floor((prevQuizResult[0] / prevQuizResult[2]) * 5)}
              />

              {/* <Typography variant="p">
                out of {prevQuizResult[2]} questions, {prevQuizResult[0]} were
                correct
              </Typography> */}
            </Box>
            Wanna Try more? just hit the Start Quiz
            </>
          ) : null}
          <Box sx={{mt:10}}>
            <QuestionNumberSelector />

            <QuizFaq />
          </Box>
        </>
      ) : (
        <Suspense fallback={<Loader />}>
          <QuizLoader />
        </Suspense>
      )}
    </Container>
  );
};

export default QuizHome;

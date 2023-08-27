import React, { useEffect, useState } from "react";
import { useGetAllCountriesDataQuery } from "../../../../services/slices/countrySlice";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuestions,
  submitQuiz,
} from "../../../../services/slices/quizSlice";
import { questionSet } from "../../../../utils/constants/questionsSetArray";
import { makeQuestions } from "../../../../utils/utilFunctions/processQuestions";
import { Button, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import QuestionContainer from "./QuestionContainer";

const QuizLoader = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state?.countries?.countriesData);
  const totalQuestions = useSelector((state) => state?.quiz?.questions);
  let status = countriesData?.countries?.countriesData ? false : true;

  useGetAllCountriesDataQuery({ status });

  const questionsData = useSelector((state) => state?.quiz?.questionData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!countriesData || questionsData.length !== 0) return;
    const { countryCodeArr, countryData } = countriesData;
    let newQuestions = makeQuestions(
      questionSet,
      countryData,
      countryCodeArr,
      totalQuestions
    );
    dispatch(addQuestions(newQuestions));
  }, [countriesData, dispatch,questionsData.length,totalQuestions]);

  const incrementIndex = () => {
    const maxi = questionsData.length,
      presentIndex = index;
    setIndex((p) => (presentIndex === maxi - 1 ? 0 : p + 1));
  };
  const decrementIndex = () => {
    const maxi = questionsData.length,
      presentIndex = index;
    setIndex((p) => (presentIndex === 0 ? maxi - 1 : p - 1));
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
  };
  return (
    <>
      {!questionsData ? (
        <>Loading </>
      ) : (
        <div>
          {index + 1} / {questionsData.length}
          {
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={decrementIndex}>
                <ArrowBackIosIcon />
              </Button>
              <QuestionContainer
                questionObj={questionsData[index]}
                index={index}
              />
              <Button onClick={incrementIndex}>
                <ArrowForwardIosIcon />
              </Button>
            </Box>
          }
        </div>
      )}
      <Button sx={{ m: 2 }} variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
      {/* this will have the same hover property as all the buttons */}
    </>
  );
};

export default QuizLoader;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestions } from "../../../../services/slices/quizSlice";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Box,
  Button,
} from "@mui/material";

const QuestionNumberSelector = () => {
  const [questionNumber, setquestionNumber] = useState(5);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setquestionNumber(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
      }}
    >
      <FormControl sx={{ minWidth: "70%" }}>
        <InputLabel id="demo-simple-select-standard-label">
          Select Questions
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={questionNumber}
          onChange={handleChange}
          label="Select Question"
        >
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={12}>Twelve</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        sx={{ ":hover": { bgcolor: "#0476c1", color: "white" }, flex: 1 }}
        onClick={() => {
          dispatch(setQuestions(questionNumber));
        }}
      >
        Start Quiz
      </Button>
    </Box>
  );
};

export default QuestionNumberSelector;

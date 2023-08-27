import { createSlice } from "@reduxjs/toolkit";

const quizSlice=createSlice({
    name:'quizSlice',
    initialState:{
        questions:3,
        attempted:0,
        score:[],
        startQuiz:false,
        questionData:[],
        correctAnswers:0
    },
    reducers:{
        setQuestions:(state,action)=>{
            state.questions=action.payload;
            state.startQuiz=true
            state.attempted=0
            state.score=[]
        },
        addQuestions:(state,action)=>{
            state.questionData=action.payload;
            state.correctAnswers=0;
        },
        setAttempt:(state,action)=>{
            const {index,attempted,result}=action.payload;
            state.questionData[index].attempted=attempted;
            state.questionData[index].result=result;
            if(result)state.correctAnswers++;
            ++state.attempted;
            
        },
        submitQuiz:(state,_)=>{
           
                state.startQuiz=false
                state.score=[state.correctAnswers,state.attempted,state.questions]
                state.correctAnswers=0;
                state.questionData=[]
                state.attempted=0
            
        }


    }
})

export const {setQuestions,addQuestions,setAttempt,submitQuiz} = quizSlice.actions
export default quizSlice.reducer
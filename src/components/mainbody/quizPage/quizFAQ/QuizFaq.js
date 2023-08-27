import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { questions } from '../../../../utils/constants/faq';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: `0.1px solid 	#7393B3`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(() => ({
  backgroundColor:"white",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: 1,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "20px",
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function QuizFaq() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{mt:10}}>
        {
            questions.map(question=>(
                <Accordion  key={question.id} expanded={expanded === question.id} onChange={handleChange(question.id)}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{question.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {question.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
            ))
        }
     
     
    </Box>
  );
}
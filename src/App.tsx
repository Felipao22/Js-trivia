import "./App.css";
import { Container, Typography, Stack } from "@mui/material";
import { JavaScriptLogo } from "./components/JavascriptLogo";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";
import { Game } from "./components/Game";
import { GitHub } from "@mui/icons-material";
import { Results } from "./components/Results";
import { useQuestionData } from "./hooks/useQuestionData";

function App() {
  const questions = useQuestionsStore(state => state.questions)
  const { unAnswered } = useQuestionData()
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography sx={{p:4}} variant="h2" component="h1">
            JavaScript Quiz
          </Typography>
        </Stack>
        {questions.length === 0  && <Start />}
        {questions.length > 0 && unAnswered > 0 && <Game />}
        {questions.length > 0 && unAnswered === 0 && <Results />}
        <div style={{flexDirection:'row', marginTop:'20px'}}>
          <a style={{color:"inherit", display:'flex', justifyContent:'center', padding:'10px'}} href="https://github.com/Felipao22" target="_blank"
              rel="noreferrer">

        <GitHub />
          </a>
          <strong style={{justifyContent:'center', marginTop:'10px'}}>Felipe Aviani</strong>
        </div>
      </Container>
    </main>
  );
}

export default App;

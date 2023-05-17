import { Button } from "@mui/material";
import { useQuestionData } from "../hooks/useQuestionData";
import { useQuestionsStore } from "../store/questions";

export const Footer = () => {
  const { correct, incorrect, unAnswered } = useQuestionData();
  const reset = useQuestionsStore(state => state.reset)
  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} Correctas - ❌ ${incorrect} Incorrectas - ❓ ${unAnswered} - Sin responder`}</strong>
      <div style={{ marginTop: '16px' }}>

      <Button onClick={() => reset()}>
        Resetear juego
      </Button>
      </div>
    </footer>
  );
};

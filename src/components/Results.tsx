import { Button } from "@mui/material";
import { useQuestionData } from "../hooks/useQuestionData";
import { useQuestionsStore } from "../store/questions";
import { Cancel, CheckBox } from "@mui/icons-material";

export const Results = () => {
  const { correct, incorrect } = useQuestionData();
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <div style={{ marginTop: "16px" }}>
      <h1>¡Tú resultado!</h1>

      <strong>
        <p style={{ display: "flex", justifyContent: "center" }}>
          <CheckBox sx={{ marginRight: "0.313rem" }} color="success" />
          {correct} Correctas
        </p>
        <p style={{ display: "flex", justifyContent: "center" }}>
          <Cancel
            sx={{ marginRight: "0.313rem", marginLeft: "0.938rem" }}
            color="error"
          />
          {incorrect} Incorrectas
        </p>
      </strong>

      <div style={{ marginTop: "16px" }}>
        <Button onClick={() => reset()}>¡Empezar de nuevo!</Button>
      </div>
    </div>
  );
};

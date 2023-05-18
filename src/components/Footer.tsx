import { Button, Divider, Stack } from "@mui/material";
import { useQuestionData } from "../hooks/useQuestionData";
import { useQuestionsStore } from "../store/questions";
import {
  Cancel,
  CheckBox,
  QuestionMark,
  RestartAltOutlined,
} from "@mui/icons-material";

export const Footer = () => {
  const { correct, incorrect, unAnswered } = useQuestionData();
  const reset = useQuestionsStore((state) => state.reset);
  return (
    <footer style={{ marginTop: "16px" }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
        sx={{ p: 1 }}
      >
        <strong style={{ display: "flex" }}>
          <CheckBox sx={{ marginRight: "0.313rem" }} color="success" />
          {correct} Correctas
        </strong>
        <strong style={{ display: "flex" }}>
          <Cancel sx={{ marginRight: "0.313rem" }} color="error" /> {incorrect}{" "}
          Incorrectas
        </strong>
        <strong style={{ display: "flex" }}>
          <QuestionMark sx={{ marginRight: "0.313rem" }} color="disabled" />
          {unAnswered} Sin responder
        </strong>
      </Stack>
      <div style={{ marginTop: "16px" }}>
        <Button
          endIcon={<RestartAltOutlined color="action" />}
          onClick={() => reset()}
        >
          Resetear juego
        </Button>
      </div>
    </footer>
  );
};

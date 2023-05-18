import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";
import { PlayCircleFilled } from "@mui/icons-material";

const LIMIT_QUESTION = 10;

export const Start = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestion);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTION);
  };

  return (
    <Button
      onClick={handleClick}
      endIcon={<PlayCircleFilled />}
      variant="contained"
    >
      ¡Comenzar el juego!
    </Button>
  );
};

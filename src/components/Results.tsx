import { Button } from "@mui/material"
import { useQuestionData } from "../hooks/useQuestionData"
import { useQuestionsStore } from "../store/questions"

export const Results = () => {
  const { correct, incorrect } = useQuestionData()
  const reset = useQuestionsStore(state => state.reset)

  return (
    <div style={{ marginTop: '16px'}}>
      <h1>¡Tus resultados!</h1>

      <strong>
        <p>✅ {correct} correctas</p>
        <p>❌ {incorrect} incorrectas</p>
      </strong>

      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => reset()}>
          ¡Empezar de nuevo!
        </Button>
      </div>
    </div>
  )
}
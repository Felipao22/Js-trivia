import { useQuestionsStore } from "../store/questions"

export const useQuestionData = () => {
    const questions = useQuestionsStore(state => state.questions)
    let correct = 0
    let incorrect = 0
    let unAnswered = 0

    questions.forEach(question => {
        const { userSelectedAnswer, correctAnswer } = question
        if (userSelectedAnswer == null) unAnswered++
        else if(userSelectedAnswer === correctAnswer) correct++
        else incorrect++
    })
    return {correct, incorrect, unAnswered}
}
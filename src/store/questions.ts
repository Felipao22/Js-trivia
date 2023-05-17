import { create } from 'zustand';
import { type Question } from '../types';
import confetti from 'canvas-confetti'
import { persist,devtools } from 'zustand/middleware'

interface State {
    questions: Question[]
    currentQuestion: number
    fetchQuestion: (limit: number) => Promise<void>
    selectAnswer: (questionId: number, answerIndex: number) => void
    goNextQuestion: () => void
    goPrevQuestion: () => void
    reset: () => void
}

const API_URL = 'https://js-quiz-nine.vercel.app/' || 'http://localhost:5173/'

export const useQuestionsStore = create<State>()(devtools(persist((set, get) => {
    return {
        loading: false,
        questions: [],
        currentQuestion: 0,

        fetchQuestion: async (limit: number) => {
            const res = await fetch(`${API_URL}data.json`)
            const json = await res.json()
            const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
            set({questions}, false, 'FETCH_QUESTIONS')
        },
        selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get()
            const newQuestions = structuredClone(questions)
            const questionIndex = newQuestions.findIndex((q: { id: number; }) => q.id === questionId)
            const questionInfo = newQuestions[questionIndex]
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
            
            if(isCorrectUserAnswer) confetti()

            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectedAnswer: answerIndex
            }
            set({ questions: newQuestions }, false, 'SELECT_ANSWER')

        },
        goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            const nextQuestion = currentQuestion + 1

            if(nextQuestion < questions.length){
                set({ currentQuestion: nextQuestion }, false, 'GO_NEXT_QUESTION')
            }

        },
        goPrevQuestion: () => {
            const { currentQuestion } = get()
            const prevQuestion = currentQuestion - 1

            if(prevQuestion >= 0) {
                set({ currentQuestion: prevQuestion }, false, 'GO_PREVIOUS_QUESTION')
            }
        },
        reset: () => {
            set({ currentQuestion: 0 , questions: []})
        }
    }
    
}, {
    name: 'questions'
})))
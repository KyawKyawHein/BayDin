import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
import DB from "../json/db.json";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        setQuestions(DB.questions);
        setAnswers(DB.answers);
        setNumbers(DB.numberList);
    }, [])
    useEffect(() => {
        dispatch({ type: "questionsList", payload: questions })
        const filteredQuestions = questions.filter(q => q.questionName.includes(search))
        dispatch({ type: "questionsList", payload: filteredQuestions })
    }, [questions, search])

    useEffect(() => {
        dispatch({ type: "numbersList", payload: numbers })
    }, [numbers])

    useEffect(() => {
        dispatch({ type: "answersList", payload: answers })
    }, [answers])

    const initialState = {
        questionsList: [],
        numbersList: [],
        answersList: [],
        question: null,
        selectedNum: null,
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const data = { state, dispatch, search, setSearch }
    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = () => useContext(StateContext);
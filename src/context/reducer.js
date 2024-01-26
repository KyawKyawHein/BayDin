export const reducer = (state, action) => {
    switch (action.type) {
        case "questionsList":
            return { ...state, questionsList: action.payload };
        case "numbersList":
            return { ...state, numbersList: action.payload };
        case "answersList":
            return { ...state, answersList: action.payload };
        case "addQuestionNo":
            return { ...state, question: action.payload };
        case "addSelectedNum":
            return { ...state, selectedNum: action.payload };
        default:
            return state;
    }
}
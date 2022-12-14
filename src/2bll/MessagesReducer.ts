import {MessageApi} from "./API";
import {Dispatch} from "redux";
import {QuestionFormValuesType} from "../1ui/components/haveQuestions/HaveQuestions";

export type InitialStateType = {
    message: any
}
type ActionType = any
let initialState: InitialStateType = {
    // initial: false,
    // bgBody: '',
    message: '',
}
const messagesReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        default  :
            return state;
    }
}

export const SendUsersMessageTC=(values:QuestionFormValuesType)=>(dispatch: Dispatch<any>)=>{
    MessageApi.sendMessage(values).then(res=>
    console.log("res!!",res)
    )
}

export default messagesReducer;
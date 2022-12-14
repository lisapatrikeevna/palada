import axios from "axios";
import {QuestionFormValuesType} from "../1ui/components/haveQuestions/HaveQuestions";

const instans = axios.create({
    // withCredentials: true,
    // baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    baseURL: 'http://localhost:3010/',
    // headers: {
    //     'API-KEY': '40979d82-3c32-4398-abbe-81041d6b3ea6'
    // }
})
export const MessageApi = {
    sendMessage(data:QuestionFormValuesType) {
        console.log('data:QuestionFormValuesType',data);
        return instans.post(`sendMessage`,{data})
            .then(response => {
                return response.data
            })
    }
}
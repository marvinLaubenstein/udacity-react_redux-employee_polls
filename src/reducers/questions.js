import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_NEW_QUESTION } from '../actions/questions';
import { ADD_AUTH_USER_ANSWER_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_AUTH_USER_ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.author),
          },
        },
      };
    default:
      return state;
  }
}

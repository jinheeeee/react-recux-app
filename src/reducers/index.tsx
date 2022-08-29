// reducer에는 하나밖에 쓰지 못하기 때문에 combineReducers로 묶어서 사용
import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";

const rootReducer = combineReducers({
  todos,
  counter,
});

export default rootReducer;

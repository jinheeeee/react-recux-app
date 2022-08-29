enum ActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETED_TODO",
}

interface Action {
  type: ActionType;
  text: String;
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    default:
      return state;
  }
};

export default todos;

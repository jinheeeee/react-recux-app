import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import counter from "./reducers";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const store = createStore(counter);

/* 
  Provider란?
  Redux Store 저장소에서 엑세스해야 하는 모든 중첩 구성 요소에서 Redux Store 
  저장소를 사용할 수 있도록 합니다.

  * useSelector hooks를 이용해서 스토어의 값을 가져올 수 있음
  * useDispatch -> store에 있는 dispatch 함수에 접근하는 hooks
*/


const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>,
  );

render();

// * subscribe()
// * => change listener를 추가함. 작업이 전달될 때마다 호출되며 상태트리의 일부가 잠재적으로
// * 변경되었을 수 있습니다. 그런 다음 getState()를 호출하여 콜백 내부의 현재 상태 트리를 읽을 수 있음.
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

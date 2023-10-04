import { Provider } from "react-redux";
import { initStore } from "../../../business/store/store";
import { TodosPage } from "./pages/todos-page";
import { TodoGatewayLocalStorage } from "../../secondary/todos-gateway/TodoGatewayLocalStorage";
import { retrieveTodos } from "../../../business/usecase/retrieve-todos/retrieve-todos";

const todosGateway = new TodoGatewayLocalStorage();
const store = initStore({ todosGateway });

store.dispatch(retrieveTodos());

function App() {
  return (
    <Provider store={store}>
      <div className="flex items-center justify-center w-screen h-screen font-medium">
        <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
          <TodosPage />
        </div>
      </div>
    </Provider>
  );
}

export default App;

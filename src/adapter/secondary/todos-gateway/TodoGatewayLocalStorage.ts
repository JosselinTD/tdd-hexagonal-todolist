import { Todos } from "../../../business/model/Todos";
import { TodosGateway } from "../../../business/model/TodosGateway";

export class TodoGatewayLocalStorage implements TodosGateway {
  async load() {
    return JSON.parse(localStorage.getItem("todos") || "{}") as Todos;
  }
  async save(todos: Todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

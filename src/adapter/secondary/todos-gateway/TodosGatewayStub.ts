import { Todos } from "../../../business/model/Todos";
import { TodosGateway } from "../../../business/model/TodosGateway";

export class TodosGatewayStub implements TodosGateway {
  todos: Todos = {};
  async load() {
    return this.todos;
  }
  async save(todos: Todos) {
    this.todos = todos;
  }
}

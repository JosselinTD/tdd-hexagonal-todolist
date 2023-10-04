import { describe, it, expect } from "vitest";
import { TodosGatewayStub } from "../../../adapter/secondary/todos-gateway/TodosGatewayStub";
import { initStore } from "../../store/store";
import { saveTodos } from "./save-todos";

describe("Save todos", () => {
  it("should not save anything when nothing is called", () => {
    const todosGateway = new TodosGatewayStub();
    expect(todosGateway.todos).toStrictEqual({});
  });

  it("should send todos trough the gateway", async () => {
    const todosGateway = new TodosGatewayStub();
    const store = initStore({ todosGateway });
    store.dispatch({
      type: "todos/retrieved",
      payload: someTodos,
    });

    expect(todosGateway.todos).toStrictEqual({});
    await store.dispatch(saveTodos());
    expect(todosGateway.todos).toStrictEqual(someTodos);
  });
});

const someTodos = {
  todo1: {
    label: "Todos 1",
    isDone: false,
  },
  todo2: {
    label: "Todos 2",
    isDone: true,
  },
};

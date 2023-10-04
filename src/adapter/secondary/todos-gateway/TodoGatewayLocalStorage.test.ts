import { describe, it, expect, beforeEach } from "vitest";
import { TodoGatewayLocalStorage } from "./TodoGatewayLocalStorage";

describe("Implementation testing of TodoGatewayLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should have saved nothing", () => {
    expect(localStorage.getItem("todos")).toBe(null);
  });

  it("should load an empty object when there is nothing stored", async () => {
    const todoGateway = new TodoGatewayLocalStorage();
    const todos = await todoGateway.load();
    expect(todos).toStrictEqual({});
  });

  it("should have stored content", async () => {
    const todoGateway = new TodoGatewayLocalStorage();
    await todoGateway.save(someTodos);
    expect(JSON.parse(localStorage.getItem("todos")!)).toStrictEqual(someTodos);
  });

  it("should return stored content", async () => {
    const todoGateway = new TodoGatewayLocalStorage();
    localStorage.setItem("todos", JSON.stringify(someTodos));
    const todos = await todoGateway.load();
    expect(todos).toStrictEqual(someTodos);
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

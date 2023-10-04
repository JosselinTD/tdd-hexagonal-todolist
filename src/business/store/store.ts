import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./todos-slice";
import { TodosGateway } from "../model/TodosGateway";

export interface Dependencies {
  todosGateway: TodosGateway;
}

export const initStore = (dependencies: Partial<Dependencies>) =>
  configureStore({
    reducer: {
      todos: todosSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
  });

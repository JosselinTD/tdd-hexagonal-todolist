import { Todos } from "../model/Todos";

export interface AppState {
  todos: Todos | null;
}

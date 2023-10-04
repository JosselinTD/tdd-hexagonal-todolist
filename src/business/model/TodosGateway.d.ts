import { Todo } from "./Todo";
import { Todos } from "./Todos";

export interface TodosGateway {
  load: () => Promise<Todos>;
  save: (Todos) => Promise<void>;
}

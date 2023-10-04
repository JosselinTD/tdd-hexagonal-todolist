import { AppState } from "../../store/app-state";
import { Dependencies } from "../../store/store";

export const saveTodos =
  () =>
  async (
    _dispatch: any,
    getState: () => AppState,
    { todosGateway }: Partial<Dependencies>
  ) => {
    await todosGateway!.save(getState().todos);
  };

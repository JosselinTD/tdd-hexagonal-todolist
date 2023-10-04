import { Dependencies } from "../../store/store";
import { AppState } from "../../store/app-state";
import { Dispatch } from "react";
import { PayloadAction } from "@reduxjs/toolkit";
import { Todos } from "../../model/Todos";

export const retrieveTodos =
  () =>
  async (
    dispatch: Dispatch<PayloadAction<Todos>>,
    _getState: () => AppState,
    { todosGateway }: Partial<Dependencies>
  ) => {
    let todos = await todosGateway!.load();
    dispatch({
      type: "todos/retrieved",
      payload: todos,
    });
  };

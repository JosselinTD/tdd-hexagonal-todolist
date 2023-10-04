import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ChangedPayload } from "../../store/todos-slice";

export const changeStatus =
  (todoId: string, isDone: boolean) =>
  (dispatch: Dispatch<PayloadAction<ChangedPayload>>) => {
    dispatch({
      type: "todos/status-changed",
      payload: {
        id: todoId,
        isDone,
      },
    });
  };

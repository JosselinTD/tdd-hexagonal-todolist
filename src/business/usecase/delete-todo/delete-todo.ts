import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { DeletedPayload } from "../../store/todos-slice";

export const deleteTodo =
  (todoId: string) => (dispatch: Dispatch<PayloadAction<DeletedPayload>>) => {
    dispatch({
      type: "todos/deleted",
      payload: {
        id: todoId,
      },
    });
  };

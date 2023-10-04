import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AddedPayload } from "../../store/todos-slice";

export const addTodo =
  (label: string) => (dispatch: Dispatch<PayloadAction<AddedPayload>>) => {
    const id = crypto.randomUUID();
    const payload: AddedPayload = {
      id,
      todo: {
        label,
        isDone: false,
      },
    };
    dispatch({
      type: "todos/added",
      payload,
    });
    return id;
  };

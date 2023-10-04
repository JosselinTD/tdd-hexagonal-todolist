import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./app-state";
import { Todo } from "../model/Todo";

export interface ChangedPayload {
  id: string;
  isDone: boolean;
}

export interface DeletedPayload {
  id: string;
}

export interface AddedPayload {
  id: string;
  todo: Todo;
}

export const todosSlice = createSlice({
  name: "todos",
  reducers: {
    retrieved: (_state, action: PayloadAction<AppState["todos"]>) =>
      action.payload,
    "status-changed": (state, action: PayloadAction<ChangedPayload>) => ({
      ...state,
      [action.payload.id]: {
        ...state![action.payload.id],
        isDone: action.payload.isDone,
      },
    }),
    deleted: (state, action: PayloadAction<DeletedPayload>) => {
      delete state![action.payload.id];
      return state;
    },
    added: (state, action: PayloadAction<AddedPayload>) => {
      state![action.payload.id] = action.payload.todo;
      return state;
    },
  },
  initialState: null as AppState["todos"],
});

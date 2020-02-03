import * as React from "react";
import { EventInput } from "@fullcalendar/core";

interface IState {
  calendarEvents: EventInput[];
}

const initialState: IState = {
  calendarEvents: []
};

interface IAction {
  type: string;
  payload: EventInput[];
}

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "GET_EVENTS":
      return {
        ...state,
        calendarEvents: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

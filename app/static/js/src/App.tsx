import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store } from "./Store";
import { DemoApp } from "./DemoApp";
import { dateToLocalArray } from "@fullcalendar/core/datelib/marker";

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.calendarEvents.length == 0 && fetchDataAction();
  });
  const fetchDataAction = async () => {
    const start = "2020-02-03";
    const end = "2020-02-04";
    const bucketname = "aw-watcher-sm";
    const data = await fetch(
      `http://localhost:5666/api/0/buckets/aw-watcher-sm/events`
    );
    const dataJSON = await data.json();
    const dataEvents: any = [];
    dataJSON.forEach((obj: any) =>
      dataEvents.push({
        start: new Date(Date.parse(obj.timestamp)).toISOString(),
        end: new Date(
          Date.parse(obj.timestamp) + 1000 * obj.duration
        ).toISOString(),
        title: "supermemo"
      })
    );
    console.log(dataEvents);
    return dispatch({
      type: "GET_EVENTS",
      payload: dataEvents
    });
  };

  return (
    <>
      <DemoApp />
    </>
  );
}

import * as React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Store } from "./Store";

import "./main.scss";

const events = [
  {
    start: "2020-02-03T20:03:46.895Z",
    end: "2020-02-03T20:03:46.895Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:03:25.148Z",
    end: "2020-02-03T20:03:46.585Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:03:09.070Z",
    end: "2020-02-03T20:03:25.147Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:02:44.266Z",
    end: "2020-02-03T20:03:09.070Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:02:43.863Z",
    end: "2020-02-03T20:02:43.863Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:02:33.716Z",
    end: "2020-02-03T20:02:43.862Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:02:33.715Z",
    end: "2020-02-03T20:02:33.715Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:02:33.311Z",
    end: "2020-02-03T20:02:33.311Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:02:33.310Z",
    end: "2020-02-03T20:02:33.310Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:02:20.082Z",
    end: "2020-02-03T20:02:32.976Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:02:19.677Z",
    end: "2020-02-03T20:02:19.677Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:01:39.217Z",
    end: "2020-02-03T20:02:19.353Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:01:38.995Z",
    end: "2020-02-03T20:01:38.995Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:01:22.111Z",
    end: "2020-02-03T20:01:38.995Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:01:00.376Z",
    end: "2020-02-03T20:01:22.111Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:00:59.972Z",
    end: "2020-02-03T20:00:59.972Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T20:00:17.112Z",
    end: "2020-02-03T20:00:59.714Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:59:39.101Z",
    end: "2020-02-03T20:00:17.112Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:59:38.897Z",
    end: "2020-02-03T19:59:38.897Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:58:29.377Z",
    end: "2020-02-03T19:59:38.897Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:58:29.174Z",
    end: "2020-02-03T19:58:29.377Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:57:50.758Z",
    end: "2020-02-03T19:58:29.174Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:57:10.404Z",
    end: "2020-02-03T19:57:50.757Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:55:22.761Z",
    end: "2020-02-03T19:56:28.642Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:55:22.357Z",
    end: "2020-02-03T19:55:22.357Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:54:27.659Z",
    end: "2020-02-03T19:55:22.357Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:54:26.652Z",
    end: "2020-02-03T19:54:27.658Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:54:23.400Z",
    end: "2020-02-03T19:54:26.114Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:54:21.979Z",
    end: "2020-02-03T19:54:23.399Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:53:44.778Z",
    end: "2020-02-03T19:54:21.362Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:53:43.355Z",
    end: "2020-02-03T19:53:44.649Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:53:39.746Z",
    end: "2020-02-03T19:53:43.273Z",
    title: "supermemo"
  },
  {
    start: "2020-02-03T19:53:38.267Z",
    end: "2020-02-03T19:53:38.267Z",
    title: "supermemo"
  }
];

export class DemoApp extends React.Component<{}> {
  calendarComponentRef = React.createRef<FullCalendar>();
  static contextType = Store;

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-top"></div>
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={false}
            events={events}
          />
        </div>
      </div>
    );
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current!.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };
}

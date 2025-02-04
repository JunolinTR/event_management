import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react';


function Events() {
  const [ListOfEvents, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/events/").then((response) => {
      setEvents(response.data);
    });
  }, [])
  return (
    <div>
      {ListOfEvents.map((value,key) => {
        return <div>
          <div className='name'>{value.event_name}</div>
          <div className='location'>{value.location}</div>
          </div>
      })}
    </div>
  )
}

export default Events;

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function CreateEvent() {

  const navigate=useNavigate();

    const initialValues={
        event_name:'',
        location:'',
        date:'',
        available_seats:'',

    }

    const validationSchema=Yup.object({
      event_name:Yup.string().required("enter event name"),
      location:Yup.string().required("enter location"),
      date:Yup.date().required("enter date"),
      available_seats: Yup.number()
      .required('Available seats are required')
      .positive('Must be a positive number')

    })


    const handleSubmit = async (values, { setSubmitting }) => {
      try {
          await axios.post(`http://localhost:5000/events/create`, values);
          navigate('/events');
      } catch (error) {
          console.error('Error creating event:', error);
      }
      setSubmitting(false);
  };
    


  return (
    <div>
            <h2>Create Event</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label>Event Name:</label>
                            <Field type="text" name="event_name" />
                            <ErrorMessage name="event_name" component="div" className="error" />
                        </div>

                        <div>
                            <label>Location:</label>
                            <Field type="text" name="location" />
                            <ErrorMessage name="location" component="div" className="error" />
                        </div>

                        <div>
                            <label>Date:</label>
                            <Field type="date" name="date" />
                            <ErrorMessage name="date" component="div" className="error" />
                        </div>

                        <div>
                            <label>Available Seats:</label>
                            <Field type="number" name="available_seats" />
                            <ErrorMessage name="available_seats" component="div" className="error" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>Create Event</button>
                    </Form>
                )}
            </Formik>
        </div>
  )
}

export default CreateEvent

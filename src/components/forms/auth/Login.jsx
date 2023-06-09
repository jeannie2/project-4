import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '@/contexts/auth'

function FormsAuthLogin() {
  const { apiSignIn } = useAuth()

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={apiSignIn}
      enableReinitialize
      validationSchema={
        Yup.object({
          email: Yup.string().required().label('Email'),
          password: Yup.string().min(6).required().label('Password')
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form className="text-center">
            <div className="mb-3">
              <label>Email</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="email"
                type="email"
                placeholder="yourname@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="email"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <Field
                className={`form-control ${e?.password && t?.password && 'is-invalid'}`}
                name="password"
                type="password"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="password"
                component="div"
              />
            </div>

            <button className="btn btn-light mx-auto d-block" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsAuthLogin

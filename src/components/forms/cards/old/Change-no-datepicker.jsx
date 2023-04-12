// import React from 'react'
// ok to pass value like this to render iframe? QQ instead of getting param
import { Formik, Field, Form, ErrorMessage } from 'formik' // resetForm
import * as Yup from 'yup'

import React from 'react' // { useState, createContext, useContext, useEffect }
import { useRouter } from 'next/router'
import { collection, addDoc } from 'firebase/firestore' // getDocs, doc, updateDoc
import { db } from '@/services/firebase' // auth, googleProvider,
import { useAuth } from '@/contexts/auth'
// update to react bootstrap code

/// www.draft/new?bday1
function FormsCardsChange(iframe) { // props, iframe. -> if use this, iframe doesnt get written to db. but how make work if use one form with props || initial values? props //{ iframe } ({ iframe }) <- DOESNT WORK QQQQ Www
  const router = useRouter()
  const { user } = useAuth()

  // const param = router.query

  console.log(`iframe: ${iframe?.iframe}`)
  // console.log(`router query${router.query}`)

  const createCard = async (values) => {
    // const newValues = {
    //   ...values,
    //   userId: user.uid,
    // }
    console.log(values)
    try {
      // const docRef = await addDoc(collection(db, 'greetingcards'), values)
      const docRef = await addDoc(collection(db, 'greetings3'), values)
      console.log('Document written with ID: ', docRef.id) // cardId
      router.push(`/draft/${docRef.id}/preview`) // router.push('/test')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const initialValues = {
    senderName: '',
    senderEmail: '',
    recipientName: '',
    recipientEmail: '',
    message: '',
    iframe: iframe?.iframe || '', // param?.new || '',
    userId: user?.uid || '',
    deliveryDate: ''
    // date: new Date(new Date().toDateString()),
    // deliveryDate: new Date(new Date().toDateString())
  }

  return (
    <Formik
      initialValues={initialValues} // props.initialValues ||initialValues
      onSubmit={createCard}
      enableReinitialize
      validationSchema={
        Yup.object({
          senderName: Yup.string().required().label('SenderName'),
          senderEmail: Yup.string().required().label('SenderEmail'),
          recipientName: Yup.string().required().label('RecipientName'),
          recipientEmail: Yup.string().required().label('RecipientEmail'),
          message: Yup.string().required().label('Message'),
          iframe: Yup.string(),
          userId: Yup.string(),
          deliveryDate: Yup.string()
          // date: Yup.date(),
          // deliveryDate: Yup.date() // correct?
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>Sender Name</label>
              <Field
                id="senderName"
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="senderName"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="senderName"
                component="div"
              />
            </div>

            <div>
              <label>Sender Email</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="senderEmail"
                id="senderEmail"
                type="email"
                placeholder="yourname@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="senderEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Recipient Name</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="recipientName"
                id="recipientName"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="recipientName"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Recipient Email</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="recipientEmail"
                type="email"
                id="recipientEmail"
                placeholder="yourname@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="recipientEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Message</label>
              <br />
              <Field
                component="textarea"
               // className={`form-control ${e?.password && t?.password && 'is-invalid'}`}
                name="message"
                type="textarea"
                id="message"
                rows="5"
                cols="50"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="message"
                component="div"
              />
            </div>

            <button className="btn btn-primary mx-auto d-block" type="submit" disabled={isSubmitting}>Preview</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsCardsChange

/*
            <div className="mb-3">
              <label>Delivery date</label>
              <br />
              <MyDatePicker name="deliveryDate" />
            </div>
*/
// need is-invalid?
/*
const createCard2 = (values) => new Promise((resolve, reject) => {
  const router = useRouter()
  addCard(values.senderName, values.senderEmail, values.recipientName, values.recipientEmail, values.message).then((result) => {
    resolve(result)
    resetForm()
    router.push('/test')
  }).catch((error) => {
    reject(error)
  })
})

const { id } = doc(collection(db, 'bloodDonation'))
const newDonationRef = doc(db, 'bloodDonation', id)
await setDoc(newDonationRef, values)
 */

/* references:
  datepicker:
  https://stackoverflow.com/a/68417318
  https://codesandbox.io/s/f29k0?file=/src/App.js:832-864
  */
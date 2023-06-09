import React, { useEffect, useState, createContext, useContext } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/services/firebase'

const CardContext = createContext()

export function CardProvider({ children }) {
  const [card, setCard] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const getCard = async (cardId) => {
    try {
      const docRef = doc(db, 'greetings3', cardId)
      const docSnap = await getDoc(docRef)
      setCard(docSnap.data())
      setIsLoading(false)
    } catch (err) {
      console.log(err) // eslint-disable-line
      setError(err)
    }
  }

  const data = {
    card,
    isLoading,
    error,
    getCard
  }

  return <CardContext.Provider value={data}>{children}</CardContext.Provider>
}

export function useCard(cardId) {
  const { getCard, ...rest } = useContext(CardContext)

  // console.log('hook', cardId, rest) // eslint-disable-line

  useEffect(() => {
    if (cardId) getCard(cardId)
  }, [cardId])

  return rest
}

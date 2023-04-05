import React, { useState, createContext, useContext, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'

import { useAuth } from '@/contexts/auth'
import { db } from '@/services/firebase'

const MyCardsContext = createContext()

export function MyCardsProvider({ children }) {
  const { user } = useAuth()

  const [myCards, setMyCards] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (user?.uid) {
      const getCards = async () => {
        try {
          const newMyCards = []
          const q = query(collection(db, 'greetingcards'), where('userId', '==', user.uid))
          const querySnapshot = await getDocs(q)
          querySnapshot.forEach((doc) => newMyCards.push({
            id: doc.id,
            ...doc.data()
          }))
          setMyCards(newMyCards)
          setIsLoading(false)
        } catch (err) {
          console.log(err) // eslint-disable-line
          setError(err)
        }
      }

      getCards()
    }
  }, [user])

  const data = {
    myCards,
    isLoading,
    error
  }

  return <MyCardsContext.Provider value={data}>{children}</MyCardsContext.Provider>
}

export function useMyCards() {
  return useContext(MyCardsContext)
}
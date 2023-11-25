/* eslint-disable react/prop-types */
import { useState, createContext } from 'react'

export const ModalVisibleContext = createContext()

export const ModalVisibleProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <ModalVisibleContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </ModalVisibleContext.Provider>
  )
}

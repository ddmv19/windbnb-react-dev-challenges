import { useContext } from 'react'
import { ModalVisibleContext } from '../context/isModalVisible'

export const useIsModalVisible = () => {
  const { isModalVisible, setIsModalVisible } = useContext(ModalVisibleContext)

  const setValueVisibility = () => {
    setIsModalVisible(!isModalVisible)
  }

  return { isModalVisible, setIsModalVisible, setValueVisibility }
}

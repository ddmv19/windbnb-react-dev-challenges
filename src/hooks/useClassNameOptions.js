import { useState } from 'react'

export const useClassNameOptions = () => {
  const [classNameOptions, setClassNameOptions] = useState({
    location: 'selected',
    guests: '',
  })

  const handleOptionsFilters = ({ target }) => {
    const option = target.className
    if (option.includes('location')) {
      setClassNameOptions({
        location: 'selected',
        guests: '',
      })
    } else if (option.includes('guests')) {
      setClassNameOptions({
        location: '',
        guests: 'selected',
      })
    }
  }

  return { classNameOptions, handleOptionsFilters }
}

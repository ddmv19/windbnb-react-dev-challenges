import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const handleChangeGuests = ({ target }) => {
    setFilters({
      ...filters,
      minGuests: target.value,
    })
  }

  const filterPlaces = (places) => {
    return places.filter(
      (place) =>
        filters.location.includes(place.city) &&
        filters.minGuests <= place.maxGuests
    )
  }

  return { filters, setFilters, handleChangeGuests, filterPlaces }
}

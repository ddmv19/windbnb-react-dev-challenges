/* eslint-disable react/prop-types */
import { SearchIcon } from './icons'
import { useFilters } from '../hooks/useFIlters'
import { useIsModalVisible } from '../hooks/useIsModalVisible'

export const Filters = () => {
  const { setValueVisibility } = useIsModalVisible()

  const { filters } = useFilters()

  return (
    <>
      <div className="filters">
        <span>{filters.location}</span>
        <span>
          {filters.minGuests === 0 ? 'Add guests' : filters.minGuests}
        </span>
        <div onClick={setValueVisibility} className="filters-button">
          <SearchIcon />
        </div>
      </div>
    </>
  )
}

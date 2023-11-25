/* eslint-disable react/prop-types */
import { useFilters } from '../hooks/useFIlters'
import { FiltersLocationIcon } from './icons'

const OptionLocation = ({ city }) => {
  const { filters, setFilters } = useFilters()

  const handleChangeLocation = () => {
    setFilters({
      ...filters,
      location: city,
    })
  }

  return (
    <div className="item" onClick={handleChangeLocation}>
      <FiltersLocationIcon />
      <span>{city}</span>
    </div>
  )
}

export default OptionLocation

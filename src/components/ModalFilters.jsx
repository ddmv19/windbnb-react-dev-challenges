/* eslint-disable react/prop-types */
import { CloseFiltersIcon, SearchFiltersIcon } from './icons'
import OptionLocation from './OptionLocation'
import { useFilters } from '../hooks/useFIlters'
import { useClassNameOptions } from '../hooks/useClassNameOptions'
import { useIsModalVisible } from '../hooks/useIsModalVisible'

const LOCATION_OPTIONS = [
  'Helsinki, Finland',
  'Turku, Finland',
  'Oulu, Finland',
  'Vaasa, Finland',
]

const ModalFilters = () => {
  const { isModalVisible, setValueVisibility } = useIsModalVisible()
  const { filters, handleChangeGuests } = useFilters()
  const { classNameOptions, handleOptionsFilters } = useClassNameOptions()
  const className = isModalVisible ? 'modal-filters visible' : 'modal-filters'

  return (
    <div className={className}>
      <div className="close-filters-btn" onClick={setValueVisibility}>
        <CloseFiltersIcon />
      </div>
      <section onClick={handleOptionsFilters} className="options-filters">
        <div className={`options location ${classNameOptions.location}`}>
          <h4>Location</h4>
          <span>{filters.location}</span>
        </div>
        <div className={`options guests ${classNameOptions.guests}`}>
          <h4>Guests</h4>
          <span>
            {filters.minGuests === 0 ? 'Add guests' : filters.minGuests}
          </span>
        </div>
        <div className="options search">
          <div>
            <SearchFiltersIcon />
            <span>Search</span>
          </div>
        </div>
      </section>
      <section className="container-options">
        <div className={`options-location ${classNameOptions.location}`}>
          {LOCATION_OPTIONS.map((location) => (
            <OptionLocation key={location} city={location} />
          ))}
        </div>
        <div className={`options-guest ${classNameOptions.guests}`}>
          <input
            type="range"
            min="0"
            max="12"
            onChange={handleChangeGuests}
            value={filters.minGuests}
          />
          {filters.minGuests}
        </div>
      </section>
    </div>
  )
}

export default ModalFilters

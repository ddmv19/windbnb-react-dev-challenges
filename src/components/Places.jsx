/* eslint-disable react/prop-types */

import PlaceCard from './PlaceCard'

const Places = ({ places }) => {
  return (
    <div className="container-main-content">
      <div className="header">
        <h2>Stays in Finland</h2>
        <p>{places.length > 0 ? `${places.length} Stays` : 'No stays'}</p>
      </div>
      <section className="container-places">
        {places.map(({ id, ...rest }) => (
          <PlaceCard key={id} {...rest} />
        ))}
      </section>
    </div>
  )
}

export default Places

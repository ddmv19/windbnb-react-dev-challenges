/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { StarRaitingIcon } from './icons'

const PlaceCard = ({ title, photo, superHost, rating, type, beds }) => {
  return (
    <div className="card">
      <img src={photo} alt={title} />
      <section className="information">
        {superHost && <h5 className="superhost">SUPER HOST</h5>}
        <span>
          {type} {beds ? `.${beds}` : ''}
        </span>
        <div className="raiting">
          <StarRaitingIcon />
          {rating}
        </div>
      </section>
      <h4>{title}</h4>
    </div>
  )
}

export default PlaceCard

/* eslint-disable react/prop-types */
import { Filters } from './Filters'
import { LogoIcon } from './icons'

const Header = () => {
  return (
    <header className="header">
      <LogoIcon />
      <Filters />
    </header>
  )
}

export default Header

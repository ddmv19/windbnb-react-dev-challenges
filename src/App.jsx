import Header from './components/Header'
import ModalFilters from './components/ModalFilters'
import data from '../src/data/data.json'
import Places from './components/Places'
import { useFilters } from './hooks/useFIlters'
import Footer from './components/Footer'
import { ModalVisibleProvider } from './context/isModalVisible'

function App() {
  const { filterPlaces } = useFilters()

  const filteredPlaces = filterPlaces(data)

  return (
    <ModalVisibleProvider>
      <Header />
      <Places places={filteredPlaces} />
      <Footer />
      <ModalFilters />
    </ModalVisibleProvider>
  )
}

export default App

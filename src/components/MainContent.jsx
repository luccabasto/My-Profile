///Components
import AboutContainer from './AboutContainer'
import TechContainer from './TechContainer'
import GalleryContainer from './GalleryContainer'


//Styles
import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TechContainer/>
      <GalleryContainer/>
      
    </main>
  )
}

export default MainContent
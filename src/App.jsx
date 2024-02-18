/// Components React
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

///Styles
import './styles/components/app.sass'

function App() {

  return (
    <>
      <div id="profileDigital">
        <h1>Lucas Basto</h1>
        <Sidebar/>
        <MainContent/>
      </div>
    </>
  )
}

export default App

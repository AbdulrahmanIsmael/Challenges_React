import './styles/app.scss';
import Navbar from './components/Navbar';
import TourList from './components/TourList';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id='main-content'>
        <TourList />
      </main>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import BodyPage from './component/body/BodyPage';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BodyPage/>
      <Footer/>
    </div>
  );
}

export default App;

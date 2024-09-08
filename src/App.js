import './App.css';
import Navbar from '../src/component/Navbar'
import Content from '../src/component/Content'
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <Content></Content>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;

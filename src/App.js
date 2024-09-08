import './App.css';
import Navbar from '../src/component/Navbar'
import Content from '../src/component/Content'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <Content></Content>
    </div>
  );
}

export default App;

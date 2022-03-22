import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';
import Side from './component/Side';
import Article from './component/Article';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main>
        <Side/>
      <Article/></main>
    </div>
  );
}

export default App;

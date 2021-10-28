
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skill from './components/skill/Skill';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Skill></Skill>
    </div>
  );
}

export default App;

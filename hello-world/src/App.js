//import './App.css';
import './css/Styles.css';
import Greet from "./components/Greet";
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';


function App() {
  return (
    <div className="App">
      <Greet name="Alexander" heroName="Marvel">
        <span>This is lorem ipsum body content</span>
      </Greet>
      <Greet className="fgcolor" name="Brittany" heroName="Spiderwoman"/>
      <Greet name="Tiffany" heroName="Matrix"/>
      <Welcome name="Brian" heroName="Lawson"/>
      <Hello/>
      <Message/>
      <Counter/>
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;

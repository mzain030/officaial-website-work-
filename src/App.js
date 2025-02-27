import logo from './logo.svg';
import './App.css';
import Zain from './components/Zain';
import Junaidkhan from './components/Junaidkhan';
import Bilal from './components/Bilal';
import Ali from './components/Ali';
import Practice from './components/Practice';

function App() {
  return (
    <div className="App">
      <Junaidkhan/>
     <Zain/>
     <Bilal/>
     <Ali/>
     <Practice/>
    </div>
  );
}

export default App;

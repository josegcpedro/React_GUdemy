import TemplateExpressions from './components/TemplateExpressions';
import SecondComponent from './components/SecondComponent';
import FirstComponent from './components/FirstComponent';
import Challenge2 from './components/Challenge2';
import Events from './components/Events';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>fundamento react</h1>
      <FirstComponent />
      <SecondComponent />
      <TemplateExpressions />
      <Events />
      <Challenge2 />
    </div>
  );
}

export default App;

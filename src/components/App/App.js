import './App.css';

import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';

function App() {

  const listArray = ["thingOne", "thingTwo", "thingThree"]

  return (
    <div className="App">
      <header>
        <h1>React Dev Skills</h1>

        <SkillList skills/>
        
        <hr></hr>

        <NewSkillForm form/>

      </header>
    </div>
  );
}

export default App;

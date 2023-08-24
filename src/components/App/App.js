import './App.css';

import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';

import { useState } from 'react';

// const skills = [
//   { name: "HTML", level: 5 },
//   { name: "CSS", level: 3 },
//   { name: "JavaScript", level: 3 },
//   { name: "Python", level: 1 }
// ];


function App() {

  const [skills, setSkills] = useState ([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 3 },
    { name: "Python", level: 1 }
  ]);

  function addSkill(skillStr) {
    const newSkill = [{name: skillStr, level: 3}]
    setSkills([...skills, newSkill])
  }

  
  return (
    <div className="App">
      <header className="App-Header">
        <h1>React Dev Skills</h1>
      
        <SkillList skills={skills}/>

      </header>
        
        <hr></hr>

        <NewSkillForm addSkill={addSkill} />

    </div>
  );
}

export default App;

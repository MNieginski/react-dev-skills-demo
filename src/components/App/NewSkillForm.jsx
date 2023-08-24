import { useState } from 'react';

function NewSkillForm( {addSkill} ){

    const [newSkill, setNewSkill] = useState({name: "", level: 3})

    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill(newSkill);
        setNewSkill({name: "", level: 3 });
      }

    return (<form className="border" onSubmit={handleAddSkill}>
        <label>Skill<input
         className="border"
         value={newSkill.name}
         onChange={(evt) => setNewSkill({name: evt.target.value, level: 3})}
         placeholder="Add new skill here"
         required
            />
        </label>
        <label>Level
            <select className="border"
            value={newSkill.level}
            onChange={(evt) => setNewSkill({level: evt.target.value})}
            required
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                
            </select>
        </label>
        <button className="button" type="submit">ADD SKILL</button>
    </form>
    )
}

export default NewSkillForm
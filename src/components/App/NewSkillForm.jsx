function NewSkillForm( {form} ){
    return (<form className="border">
        <label>Skill<input className="border"></input></label>
        <label>Level
            <select className="border">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </label>
        <button className="button">ADD SKILL</button>
    </form>
    )
}

export default NewSkillForm
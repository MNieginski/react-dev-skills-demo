import SkillListItem from "./SkillListItem"

function SkillList({skills}){

    const skillListItems = skills.map(function(skillStr){return(<SkillListItem skill ={skillStr}/>)})

    return(
        <div className="container">
           

            <ul>
                { skillListItems }
            </ul>

        </div>
    )
}

export default SkillList
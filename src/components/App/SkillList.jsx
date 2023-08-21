import SkillListItem from "./SkillListItem"

function SkillList({skills}){

    //const skillListItems = skills.map(function(skillsStr){return(<SkillListItem skill ={skillsStr}/>)})

    return(
        <div>
            {/* <h3>{listName}</h3> */}

            <ul>
                <SkillListItem />
                <SkillListItem />
                <SkillListItem />
            </ul>

        </div>
    )
}

export default SkillList
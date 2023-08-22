export default function SkillListItem( {skill} ){
    return(
    <li className="border">
        <div className="skillName">{skill.name}</div>
        <div className="skillLevel">{skill.level}</div>
    </li>

    )
}
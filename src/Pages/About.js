import CardPresentation from "../components/CardPresentation/CardPresentation"
import CardSkill from "../components/CardSkill/CardSkill"
import db from "../data/db.json"

const About = () => {
    const skills = db.skills
    console.log(skills)
    return ( 
        <div className="">
            <CardPresentation/>
            <div className="">
                <h2>Habilidades</h2>
                { skills.map((skill,index)=>{
                    return (<CardSkill key={`${index}-${skill.name}`} skill={skill}/>)
                })}
            </div>
        </div>

     );
}
 
export default About;
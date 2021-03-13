import CardAboutMe from "../../components/CardAboutMe/CardAboutMe"
import CardSkill from "../../components/CardSkill/CardSkill"
import dbEnglish from "../../data/dbEnglish.json"

const AboutMe = () => {
    const cards= dbEnglish.components.CardSkill;
    return ( 
        <div className="Content">
            <CardAboutMe sectionPage="aboutMe"/>
            {cards.map((card,index)=>{
                if(index===0){
                    return(
                        <div   key={index+"-"+card.namme}>
                            <h2  >{card.name}</h2>
                            <div  >
                                {card.content.map((skills)=>{
                                    <CardSkill skills={skills}/>
                                })}
                            </div>
                        </div>
                    )
                }
                else{
                    return(
                        <CardSkill skills={card}/>
                    )
                }
            })}
        </div>
     );
}
 
export default AboutMe;
import { useSelector }          from 'react-redux'
// Locals
import db                       from '../../data/Components.json'
import "./ProjectContentSection.css"

const ProjectContentSection = ({section}) => {
    const language = useSelector((state) => state.language.currentLanguage)

    let generateSection = () => {
        if (section.name === "User types") {
            let photo =""
            return (
                section.content.map((user, index) => {
                photo=user.imgsrc
                return(
                <div key={section.name.replace(" ", "") + "-" + index} className="userType">
                    <div className="userType__img">
                        <img src={photo} alt={photo}   />
                    </div>
                    <div className="userType__paragraph">
                        <p  >{user.descrption}</p>
                    </div>
                </div>
                )
            }));
        }
        else if (section.name === "Colors") {
            return (section.content.map((color, index) => {
                let clr =  color.color
                return(
                <div key={section.name.replace(" ", "") + "-" + index} className="colorList">
                    <div className="colorList__element" style={{background:clr}}>
                    </div>
                    <div className="colorList__name">
                        <p  >
                            {color.color}
                        </p>
                    </div>
                </div>)
            }));
        }
        else if (section.name === "Interfaces and repository") {
            return (
            <div  > 
                <div  >
                    <a href={section.link}  target="_blank" rel="noreferrer" className="link">{section.repository}</a>
                </div>
                <div  >
                    <p  >{section.interface}</p>
                </div>
                <div className="interface">
                {section.content.map((img) => {
                    let imgsrc = img.imgsrc;
                    return (
                    <div className={img.imgClass} key={img.id}>
                        <img className={img.imgClass} src={imgsrc} alt="" />
                    </div>)
                })}
                </div>
            </div>);
        }
        else if (section.name === "Website and repository") {
            return (
            <div className="group-links"> 
                <div  >
                    <a href={section.link}  target="_blank" rel="noreferrer" className="link">{section.repository}</a>
                </div>
                <div  >
                    <a href={section.page}  target="_blank" rel="noreferrer" className="link">{section.website}</a>
                </div>
            </div>);
        }
        else if (section.name === "Repository") {
            return (
                <div className="repository">
                    <p>{section.repository}</p>
                    {section.links.map((link,i)=>{ 
                        return (<div key={link.name+i}><a href={link.href} target="_blank" rel="noreferrer" className="link">{link.name}</a><br/><br/></div>)
                    })}
                </div>
            );
        }
        else if (section.name === "Responsive design") {
            return (
                <div  >
                    <img src={section.imgsrc} alt=""  />
                </div>
            );
        }
        else if (section.name === "Results obtained") {
            return (
                <div className="resultsObtained">
                    <p  >{section.paragraph1}</p>
                    <p  >{section.paragraph2}</p>
                    <ul>
                        {section.list.map((result,index)=>{
                            return (
                                <li key={result.replaceAll(" ","")+index}>
                                    {result}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="horizontal">
                        <img src={section.imgsrc1} alt=""  />
                    </div>
                    <p  >{section.paragraph3}</p>
                    <p  >{section.paragraph4}</p>
                    <div className="horizontal">
                        <img src={section.imgsrc2} alt=""  />
                    </div>
                    <p  >{section.paragraph5}</p>
                    <div className="verticalContainer">
                        <img src={section.imgsrc3} alt=""  />
                        <img src={section.imgsrc4} alt=""  />
                    </div>
                    <p  >{section.paragraph6}</p>
                    <div className="horizontal">
                        <img src={section.imgsrc5} alt=""  />
                    </div>
                    <p  >{section.paragraph7}</p>
                    <div className="horizontal">
                        <img src={section.imgsrc6} alt=""  />
                    </div>
                </div>
            );
        }
        else if (section.name === "Document and repository") {
            return (
                <div  >
                    <a href="" className="link"></a>
                    <a href="" className="link"></a>
                </div>
            );
        }
    }
    return (
                    <div className="sectionContent">
                        <h2 className="title--section">
                            {db[language].ProjectContentSection[section.name]}
                        </h2>
                        <div className="sectionContent--generate">
                            {generateSection()}
                        </div>
                    </div>
    );
}

export default ProjectContentSection;
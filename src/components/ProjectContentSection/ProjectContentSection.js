import "./ProjectContentSection.css"

const ProjectContentSection = ({section}) => {
    let generateSection = () => {
        if (section.name === "User types") {
            let photo =""
            return (
                section.content.map((user, index) => {
                photo=user.imgsrc
                return(
                <div key={section.name.replace(" ", "") + "-" + index} className="userType">
                    <div className="userType__img">
                        <img src={photo} alt={photo} className="" />
                    </div>
                    <div className="userType__paragraph">
                        <p className="">{user.descrption}</p>
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
                        <p className="">
                            {color.color}
                        </p>
                    </div>
                </div>)
            }));
        }
        else if (section.name === "Interfaces and repository") {
            return (
            <div className=""> 
                <div className="">
                    <a href="" className="link">{section.repository}</a>
                </div>
                <div className="">
                    <p className="">{section.interface}</p>
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
        else if (section.name === "Repository") {
            return (
                <div className="repository">
                    <a href="" className="link">{section.repository}</a>
                </div>
            );
        }
        else if (section.name === "Responsive design") {
            return (
                <div className="">
                    <img src={section.imgsrc} alt="" className=""/>
                </div>
            );
        }
        else if (section.name === "Results obtained") {
            return (
                <div className="resultsObtained">
                    <p className="">{section.paragraph1}</p>
                    <p className="">{section.paragraph2}</p>
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
                        <img src={section.imgsrc1} alt="" className=""/>
                    </div>
                    <p className="">{section.paragraph3}</p>
                    <p className="">{section.paragraph4}</p>
                    <div className="horizontal">
                        <img src={section.imgsrc2} alt="" className=""/>
                    </div>
                    <p className="">{section.paragraph5}</p>
                    <div className="verticalContainer">
                        <img src={section.imgsrc3} alt="" className=""/>
                        <img src={section.imgsrc4} alt="" className=""/>
                    </div>
                    <p className="">{section.paragraph6}</p>
                    <div className="horizontal">
                        <img src={section.imgsrc5} alt="" className=""/>
                    </div>
                    <p className="">{section.paragraph7}</p>
                    <div className="horizontal">
                        <img src={section.imgsrc6} alt="" className=""/>
                    </div>
                </div>
            );
        }
        else if (section.name === "Document and repository") {
            return (
                <div className="">
                    <a href="" className="link"></a>
                    <a href="" className="link"></a>
                </div>
            );
        }
    }
    return (
                    <div className="sectionContent">
                        <h2 className="title--section">{section.name}</h2>
                        <div className="sectionContent--generate">
                            {generateSection()}
                        </div>
                    </div>
    );
}

export default ProjectContentSection;
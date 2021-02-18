const CardSkill = ({skill}) => {
    console.log(skill)
    return (

        <div className={skill.name}>
            <div className={`${skill.name}-title`}>
                <h2 className="">
                    <span className="">{"> "}</span>
                    {skill.name}
                    <span className=""> ...</span>
                </h2>
            </div>
            {skill.elements.map((element) => {
                const pothoSrc = element.pothoSrc
                return (<div key={element.id} className={`${skill.name}-skillList`}>
                    <div className="skill-element">
                        <img src={pothoSrc} alt={element.name} className="skill-element__image" />
                    </div>
                    <p className="skill-element__text">{element.name}</p>
                </div>)
            })}
        </div>
    );
}

export default CardSkill;
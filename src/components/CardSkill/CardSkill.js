import dbEnglish from "../../data/dbEnglish.json"

const CardSkill = ({skills}) => {
  //Se utilizara en un futuro
    const hola= "";
    console.log(skills)
    return (
        <div className={skills.name}>
            <div className={`${skills.name}-title`}>
                <h2  >
                    {skills.name}
                </h2>
            </div>
            <section className="awSlider">
              <div  className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  {skills.content.map((element,index) => {
                      index === 0 ? <li data-target=".carousel" data-slide-to={index} className="active"></li> : <li data-target=".carousel" data-slide-to={index}></li>
                  })}
                </ol>
                <div className="carousel-inner" role="listbox">
                  {skills.content.map((element,index) => {
                      const pothoSrc = element.pothoSrc
                      if(index === 0){
                        return(
                        <div className="item active">
                          <img src={pothoSrc}/>
                          <div className="carousel-caption">Grsel {index}</div>
                        </div>)
                      }
                      else{
                        return(
                        <div className="item">
                          <img src={pothoSrc}/>
                          <div className="carousel-caption">Grsel {index}</div>
                        </div>)
                      }
                  })}
                </div>
                <a className="left carousel-control" href=".carousel" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Geri</span>
                </a>
                <a className="right carousel-control" href=".carousel" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">İleri</span>
                </a>
              </div>
            </section>
        </div>
    );
}

/*
<div key={element.id} className={`${skill.name}-skillList`}>
                    <div className="skill-element">
                        <img src={pothoSrc} alt={element.name} className="skill-element__image" />
                    </div>
                    <p className="skill-element__text">{element.name}</p>
                </div>)

$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});


/* 
Philips ambilight tv
Üzerine gleince duruyor slide
*/
export default CardSkill;
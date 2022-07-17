import CardCarousel from "../CardCarousel/CardCarousel"
import React from "react"

const Carousel = ({projects}) => {

  return (
    <section className="carousel">
      <ol className="carousel-views">
        { projects.map((project) => (
            <li className="cardCarouselElement" key={project.id}>
              <div className={`${project.title}-primary cardCarousel`}>
                <CardCarousel project={project} />
              </div>
            </li>
        ))}
      </ol>

      <aside>
        <ol className="carousel-menu">
        { projects.map((project) => (
            <li className="carousel-men__element" key={project.id}>
            </li>
        ))}
        </ol>
      </aside>
    </section>
  );
}

export default Carousel;
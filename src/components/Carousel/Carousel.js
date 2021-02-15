import CardCarousel from "../CardCarousel/CardCarousel"
import React from "react"

const Carousel = (projects) => {
  return (
    <section>
            <ol className="">

      { projects.map((project) => (
          <li className="" id="">
            <div className="">
              <CardCarousel project={project} />
            </div>
          </li>
      ))}
      </ol>

      <aside>
        <ol className="">
          <li className="" id="">

          </li>
        </ol>
      </aside>
    </section>
  );
}

export default Carousel;
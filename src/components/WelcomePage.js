import React from "react";
import BasePage from "./base";
import Carousel from 'react-bootstrap/Carousel';

const WelcomePage = () => {
  return (
    <BasePage
      title="Hogwards School of Magic"
      description=" Welcomes you to the Hogwarts School of Witchcraft and Wizardry "
    >
      <div className="welcome-page">
      <Carousel>
      <Carousel.Item className="carousal">
        <img
          className="d-block w-100"
          src="https://media-cdn.tripadvisor.com/media/photo-s/1b/10/42/fb/hogwarts-castle.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousal">
        <img
          className="d-block w-100"
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F01%2Fkit-1.jpg&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousal">
        <img
          className="d-block w-100"
          src="https://cdn-almjc.nitrocdn.com/aZYyrACOqPKwqacflNAAVPArFRYGkpZe/assets/static/optimized/rev-76f8472/wp-content/uploads/2015/12/46d82e1a0b0100936591de3958f3408d.great-hall-in-hogwarts.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="carousal">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
     
    </BasePage>
  );
};

export default WelcomePage;

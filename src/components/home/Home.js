import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Pinkbouqet from "../../images/pinkbouqet.jpg";
import Redbouqet from "../../images/redbouqet.jpg";
import Whitebouqet from "../../images/whitebouqet.jpg";

export default function Home() {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Pinkbouqet} alt="Pink bouqet" />
          <Carousel.Caption>
            <h3>Lorem ipsum</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Redbouqet} alt="Red bouqet" />

          <Carousel.Caption>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Whitebouqet} alt="White bouqet" />

          <Carousel.Caption>
            <h3>Lorem ipsum</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Heading title="A Flower store" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lectus mauris
        ultrices eros in cursus. At varius vel pharetra vel turpis nunc eget
        lorem dolor. Lorem ipsum dolor sit amet consectetur adipiscing. Magna ac
        placerat vestibulum lectus mauris ultrices eros in. Luctus accumsan
        tortor posuere ac ut consequat semper viverra. Vitae tortor condimentum
        lacinia quis vel eros donec ac odio. Viverra mauris in aliquam sem.
        Placerat duis ultricies lacus sed turpis tincidunt id. Commodo sed
        egestas egestas fringilla phasellus faucibus scelerisque. Id eu nisl
        nunc mi.
      </p>
      <p>
        Mattis vulputate enim nulla aliquet porttitor. Sit amet justo donec enim
        diam vulputate ut pharetra. Non sodales neque sodales ut etiam sit.
        Euismod in pellentesque massa placerat duis ultricies. Elementum
        sagittis vitae et leo duis. Velit sed ullamcorper morbi tincidunt ornare
        massa. Elementum nisi quis eleifend quam adipiscing vitae proin
        sagittis. Mi bibendum neque egestas congue quisque egestas diam in arcu.
        Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tortor
        condimentum lacinia quis vel eros. Urna et pharetra pharetra massa massa
        ultricies. A iaculis at erat pellentesque adipiscing commodo. Volutpat
        lacus laoreet non curabitur gravida arcu.
      </p>
    </Container>
  );
}

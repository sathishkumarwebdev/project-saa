import React from "react";
import "./Products.css";
import titleIcon from "../assets/titleicon.png";
import cake from "../assets/cake.jpg";
import neemOil from "../assets/neem-oil.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Element } from "react-scroll";
export default function Products() {
  const styles = {
    cardImg: {
      height: "250px",
      weight: "auto",

      cursor: "pointer",
    },
    cardTitle: {
      color: "#86b817",
    },
  };
  return (
    <Element className="product-container" name="products">
      <div className="title-box">
        <img
          src={titleIcon}
          alt="titleIcon"
          width={"50rem"}
          style={{ marginRight: "1rem" }}
        />
        <h2 className="title">Our Products</h2>
      </div>

      {/* <div className="card">
          <div className="picture">
            <img src={fruit} alt="" />
          </div>
          <div className="pic-content"></div>
        </div> */}
      <div className="card-item">
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            style={styles.cardImg}
            src="https://content.jdmagicbox.com/quickquotes/images_main/neem-fruit-377491197-a7w57.jpeg?impolicy=queryparam&im=Resize=(360,360),aspect=fit/100x180"
          />
          <Card.Body>
            <Card.Title style={styles.cardTitle}>Neem Fruit</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" src={neemOil} style={styles.cardImg} />
          <Card.Body>
            <Card.Title style={styles.cardTitle}>Neem Oil</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img variant="top" src={cake} style={styles.cardImg} />
          <Card.Body>
            <Card.Title style={styles.cardTitle}>Neem Cake</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>{" "}
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHXDbiwzWKJD3LlByNMk4CP9tpPoZsbmxkQ&s"
            style={styles.cardImg}
          />
          <Card.Body>
            <Card.Title style={styles.cardTitle}>Neem Seed</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Element>
  );
}

import { Component } from "react";
const listProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./images/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./images/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./images/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./images/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./images/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./images/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./images/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./images/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./images/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class Shop extends Component {
  state = {
    selectedGlasses: "./images/v9.png",
  };
  handleGlassesChange = (glasses) => {
    this.setState({ selectedGlasses: glasses });
  };
  render() {
    return (
      <div>
        <Model selectedGlasses={this.state.selectedGlasses} />
        <div className="container d-flex gap-1">
          {listProduct.map((item) => {
            return (
              <ListGlasses
                item={item}
                key={item.id}
                onChange={this.handleGlassesChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
class Model extends Component {
  render() {
    const { selectedGlasses } = this.props;
    return (
      <div className="d-flex justify-content-center">
        <div className="card my-5" style={{ width: "18rem" }}>
          <img src="./images/model.jpg" className="card-img-top" />
          <img
            style={{
              width: "57%",
              right: 62,
              top: 89,
              height: "3rem",
              position: "absolute",
            }}
            src={selectedGlasses}
            className="card-img-top"
          />
        </div>
      </div>
    );
  }
}
class ListGlasses extends Component {
  render() {
    const item = this.props.item;
    return (
      <div
        onClick={() => {
          this.props.onChange(item.url);
        }}
        className="card"
        style={{ cursor: "pointer", width: "10rem" }}
      >
        <img src={item.url} className="card-img-top" />
      </div>
    );
  }
}

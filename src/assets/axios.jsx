import React, { Component } from "react";
import axios from "axios";

class MyComponent extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Komponent birinchi marta ekranga chiqqanda API orqali ma'lumotlarni oladi
    axios
      .get("https://api.example.com/data")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <p>Ma'lumot: {this.state.data}</p>
        ) : (
          <p>Yuklanmoqda...</p>
        )}
      </div>
    );
  }
}
export default MyComponent;

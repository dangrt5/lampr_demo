import React, {Component} from "react";
import axios from "axios";

class Test extends Component {
  formatPostData(obj) {
    const dataToSend = new URLSearchParams();

    for(let [k, v] of Object.entries(obj)) {
      dataToSend.append(k, v);
    }
    return dataToSend;
  }

  async componentDidMount() {

    const user = this.formatPostData({
      name: "John",
      age: 25,
      email: "fjlaksdfjlk@gmail.com"
    })

    const resp = await axios.post("/api/index.php", user);

    console.log("Server Response", resp);
  }

  render() {
    return (
      <h1>API Test Component</h1>
    )
  }
}

export default Test;

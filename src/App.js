import React from "react";
import RoundImage from "react-rounded-image";
import MyAvatar from "./image/avatar.jpg";
import "./index.css";
import GroupName from "./component/groupName"
import LeftLayout from "./component/leftLayout"
import CenterLayout from "./component/centerLayout"
import ScrollUpButton from "react-scroll-up-button"



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showLeft: true };
    this.onWindowRezie = this.onWindowRezie.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowRezie)
  }

  componentDidMount() {

    window.addEventListener("resize", this.onWindowRezie, false)
    this.onWindowRezie();
  }


  render() {
    return (
      <div>
        {GroupName()}
        <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
          {this.state.showLeft ? LeftLayout() : ""}
          {CenterLayout()}
        </div>
        <ScrollUpButton

          ShowAtPosition={400} />
      </div>)

  }


  onWindowRezie() {
    var current = [window.outerWidth, window.outerHeight];
    if (current[0] < 800 && this.state.showLeft) {
      this.setState({ showLeft: false });
    } else if (current[0] > 800 && !this.state.showLeft) {
      this.setState({ showLeft: true });
    }
  }
}

export default App;

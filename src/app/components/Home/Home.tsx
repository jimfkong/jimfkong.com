import * as React from "react";
import { ContactLinks } from "../ContactLinks";
import { Portrait } from "../Portrait";
import * as Constants from "src/app/constants/Constants";

import "./Home.css";

export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__portrait">
          <Portrait />
        </div>
        <h1 className="home__name">Jim Kong</h1>
        <div className="home__title">
          <div>Software Engineer</div>
        </div>
        <div className="home__links">
          <ContactLinks Links={Constants.contactLinks} />
        </div>
      </div>
    );
  }
}

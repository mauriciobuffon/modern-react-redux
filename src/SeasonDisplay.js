import "./SeasonDisplay.css";

import React from "react";

const calcSeason = (lat, mon) => {
  if (mon > 2 && mon < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonDisplayConfig = {
  summer: {
    text: "Let us hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is cold!",
    iconName: "snowflake",
  },
};

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { season: calcSeason(props.latitude, new Date().getMonth()) };
  }

  render() {
    const { text, iconName } = seasonDisplayConfig[this.state.season];

    return (
      <div className={`season-display ${this.state.season}`}>
        <i className={`${iconName} icon-left massive icon`} />
        <h1>{text}</h1>
        <i className={`${iconName} icon-right massive icon`} />
      </div>
    );
  }
}

export default SeasonDisplay;

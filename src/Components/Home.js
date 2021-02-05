import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import home4 from "../images/home4.jpg";
import home5 from "../images/home5.jpg";
import home6 from "../images/home6.jpg";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src={home1}
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src={home2}
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src={home3}
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src={home4}
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src={home5}
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src={home6}
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;

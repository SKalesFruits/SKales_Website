import React from "react";
import "../styles/FeedBackHome.css";
import LeftImg from "../resources/fdbk-home-left.jpg";
import RightImg from "../resources/fdbk-home-right.jpg";

interface Fdbks {
  userName: string;
  userfdbk: string;
}

const fdbks: Array<Fdbks> = [
  {
    userName: "Jessica Smith, Customer",
    userfdbk:
      "“The fruits exceeded my expectations in both quality and freshness. Each piece was perfectly ripe and bursting with flavor, reflecting the care taken in their selection and handling. The punctual delivery only added to the excellent experience, making this service a must-try for anyone who values premium produce. I highly recommend it for a seamless and delightful fruit-buying experience.”",
  },
  {
    userName: "Michael Brown, Customer",
    userfdbk:
      "“The quality of the fruits is truly unmatched, offering a level of freshness that's hard to find elsewhere. The seamless service, from browsing to delivery, sets a new standard in online fruit shopping. This is, without a doubt, the best place to buy fruits online—perfect for anyone seeking top-tier produce and reliable service.”",
  },
];

const FeedBackHome: React.FC = () => {
  return (
    <div className="feedback-home-container">
      <div className="feedback-left-container">
        <div className="fdk-left">
          <img src={LeftImg} alt="fdbk-left" id="fdbk-left-img"></img>
          <p id="fdb-left-fdbk">{fdbks[0].userfdbk}</p>
          <p id="fdb-left-username">{fdbks[0].userName}</p>
        </div>
      </div>
      <div className="feedback-right-container">
        <div className="fdk-right">
          <img src={RightImg} alt="fdbk-right" id="fdbk-right-img"></img>
          <p id="fdb-right-fdbk">{fdbks[1].userfdbk}</p>
          <p id="fdb-right-username">{fdbks[1].userName}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackHome;

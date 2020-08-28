import React from "react";
import "./IndustryLeaders.scss";
import { ImageBaseUrl } from "../../services/config";

const Images = [
  { url: "clientLogos/b_w_logos/grofers.svg" },
  { url: "clientLogos/b_w_logos/dunzo.svg" },
  { url: "clientLogos/b_w_logos/townscript.svg" },
  { url: "clientLogos/b_w_logos/geotix.png" },
  { url: "clientLogos/b_w_logos/meesho.svg" },
];
function IndustryLeaders() {
  return (
    <div className="industry-leaders">
      <h5 className="head">Trusted by industry leaders</h5>
      <div className="d-flex justify-content-around py-5">
        {Images.map((image, i) => {
          return (
            <div className="col-md-2 px-2">
              {" "}
              <img src={ImageBaseUrl + image.url} className="w-100" />;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IndustryLeaders;

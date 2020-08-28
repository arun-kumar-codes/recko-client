import React from "react";
import { ImageBaseUrl } from "../../services/config";
import "./IndustryServices.scss";
const services = [
  {
    image: "foodtech.svg",
    heading: "Food Tech",
    desc:
      "Make sure you’re receiving the money for the delivered food and paying your restaurant partners on time.",
  },
  {
    image: "ecommerce.svg",
    heading: "E-commerce",
    desc:
      "Reconcile customer payments across payment gateways and ensure right payouts are going to sellers.",
  },
  {
    image: "transportation.svg",
    heading: "Transportation",
    desc:
      "Scale across geographies and offer multiple payment modes to your customers.",
  },
  {
    image: "fintech.svg",
    heading: "Fintech",
    desc:
      "From Lending to Wealth Management, Recko enables you to keep a control over complex money movements.",
  },
  {
    image: "insurance.svg",
    heading: "Insurance",
    desc:
      "Provide your customer the convenience to pay through multiple channels, aggregators and modes.",
  },
  {
    image: "banking.svg",
    heading: "Banking",
    desc:
      "Reconcile your UPI, ATM and card network transactions seamlessly across any volume.",
  },
];
function IndustryServices() {
  return (
    <div className="industry-services">
      <h2 className="text-center head">The industries we serve</h2>
      <div className="services-wrapper">
        {services.map((service, i) => {
          return (
            <div className=" service-info d-flex p-4">
              <div className="col-md-2">
                {" "}
                <img src={ImageBaseUrl + service.image} className="w-100" />
              </div>
              <div className="col-md-10 pl-4">
                <h3>{service.heading}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IndustryServices;

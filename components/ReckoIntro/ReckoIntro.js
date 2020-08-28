import React, { useEffect } from "react";
import "./ReckoIntro.scss";
import { Button } from "reactstrap";

function ReckoIntro() {
  useEffect(() => {
    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #0091ff }";
      document.body.appendChild(css);
    };
  }, []);
  return (
    <div className="text-center intro-section">
      <h1 className="head">We help you reconcile</h1>
      <h1
        class="txt-rotate animated-text"
        data-period="2000"
        data-rotate='[ "Wallet", "Revenue", "Payouts" ]'
      ></h1>
      <p className="text pb-4">
        Recko enables AI-powered reconciliation of digital transactions & keeps
        track of the complete transaction lifecycle for organizations.
      </p>
      <Button className="demo-btn" color="danger">
        Request a Demo
      </Button>
    </div>
  );
}

export default ReckoIntro;

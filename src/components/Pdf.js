import React from "react";
import QReport from "./Shakely Consulting Properties Q3 Demo Report.pdf";
import QImage from "./QReport.png";

export class Pdf extends React.Component {
  render() {
    return (
      <div className="carousel-cell">
        <div className="c-InvestmentCard ">
          <div role="menuitem" href={QReport}></div>
          <div className="c-InvestmentCard__inner">
            <div className="c-InvestmentCard__background">
              <picture className="js-Parallax-intrinsic">
                <source
                  media="(min-width:760px)"
                  data-flickity-lazyload-srcset="img/QReport.png 1518w, img/personalWebsite-267x300.gif 267w, img/personalWebsite-912x1024.gif 912w, img/personalWebsite-768x863.gif 768w, img/personalWebsite-1368x1536.gif 1368w, img/personalWebsite-375x421.gif 375w, img/personalWebsite-600x674.gif 600w, img/personalWebsite-800x899.gif 800w, img/personalWebsite-1000x1123.gif 1000w, img/personalWebsite-1200x1348.gif 1200w, img/personalWebsite-1480x1662.gif 1480w"
                  sizes="(max-width: 1518px) 100vw, 1518px"
                />
                <source
                  data-flickity-lazyload-srcset="img/personalWebsite-800x899.gif 800w, img/personalWebsite-267x300.gif 267w, img/personalWebsite-912x1024.gif 912w, img/personalWebsite-768x863.gif 768w, img/personalWebsite-1368x1536.gif 1368w, img/personalWebsite-375x421.gif 375w, img/personalWebsite-600x674.gif 600w, img/personalWebsite-1000x1123.gif 1000w, img/personalWebsite-1200x1348.gif 1200w, img/personalWebsite-1480x1662.gif 1480w, img/QReport.png 1518w"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
                <img
                  src={QImage}
                  alt="QReport Text"
                  className="fa fa-download"
                ></img>
              </picture>
            </div>
            <div className="c-InvestmentCard__content">
              <div className="c-InvestmentCard__insights-info"></div>
              <p className="c-InvestmentCard--description js-split-description">
                Quartlerly Report for General Partner and Asset Manager produced
                using Yardi Systems' YSR technology.
                <br />
              </p>
              <div className="c-InvestmentCard__content-header">
                <h3 className="c-InvestmentCard--header">Quarterly Report</h3>
                <a
                  href={QReport}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to Document
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
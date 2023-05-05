import Head from "next/head";
import Image from "next/image";
import NewsTicker from "../components/newsTicker";
export default function Home() {
  return (
    <>
      <section className="banner-bm">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/Banner-19.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/Banner-18.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/kbip-maha-sangamam-banner.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/KBIP-Banner-One-Lakh.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/kerala-bamboo-fest-2022-inauguration.jpg"
                alt="Inauguration of Kerala Bamboo Fest 2022"
                title="Inauguration of Kerala Bamboo Fest 2022"
              />
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-16.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item ">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/kbip-assembly.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/GRIEVANCE-RFEDRESSAL-BANNER-KBIP.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-14.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-13.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-12.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-10.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/dubai_expo.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/bamboo_fest_2021.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-1.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-2.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-3.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.kbip.org/images/banner-4.jpg"
                alt="KBIP"
                title="KBIP"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <div className="scrollnews col-12">
        <div className="container">
          <div className="row mx-0">
            <div className="col-12 py-3">
              <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
                
                <marquee
                  className="news-scroll"
                  behavior="scroll"
                  direction="left"
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                >
                  
                  <a
                    href="https://www.kbip.org/documents/industial-policy-2023.pdf"
                    title="KERALA INDUSTRIAL & COMMERCIAL POLICY (Draft) 2022"
                    target="_blank"
                  >
                    <span style={{ color: "#FF0000" }}>
                      KERALA INDUSTRIAL POLICY 2023
                    </span>
                  </a>{" "}
                  || Industries / Investment Toll Free Number - 1800 890 1030 (8
                  AM to 8 PM on all working days)
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light">
        <div className="container">
          <div className="col-12">
            <div className="row">
              <div className="post-slide col-lg-6 col-md-6 col-sm-12 col-12 mob-col-12 mob-mb-2">
                
                <div className="imgbx">
                  <img
                    src="https://www.kbip.org/images/cm-bg.jpg?d=06042023113446"
                    alt="Shri. Pinarayi Vijayan"
                    title="Shri. Pinarayi Vijayan"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="post-slide col-lg-6 col-md-6 col-sm-12 col-12 mob-col-12">
                
                <div className="imgbx">
                  <img
                    src="https://www.kbip.org/images/minister-eng.jpg?d=06042023113446"
                    alt="Shri. P. Rajeev"
                    title="Shri. P. Rajeev"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <div className="col-12">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3 mt-md-0 aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay={0}
                data-aos-duration={1000}
                data-aos-easing="ease-in-out"
              >
                
                <p>
                  Kerala Bureau of Industrial Promotion (K-BIP) is an Autonomous
                  Body under the Department of Industries &amp; Commerce,
                  Government of Kerala with Principal Secretary (Industries) as
                  the Chairman and Director (Industries &amp; Commerce) as the
                  Executive Director. This is a registered society under the
                  Travancore Cochin Scientific Literary &amp; Charitable
                  Societies Act, 1955. The Bureau was established in the year
                  1991.
                </p>
                <a
                  href="https://www.kbip.org/about"
                  className="btn btn-outline-dark btn-theme btn-sm"
                >
                  Learn More <i className="fas fa-long-arrow-alt-right" />{" "}
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="panel panel-default border-right border-left border-top mt-3 pt-2">
                  <div className="panel-heading">
                    <span className="glyphicon glyphicon-list-alt" />
                   
                  </div>
                  <div className="panel-body">
                    <div className="col-12">
                      <div className="row mx-0">
                        <NewsTicker />
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n@media screen and (min-width: 766px) and (max-width: 991px){\n  .log-view.col {\n    width: 33.333333% !important;\n\tflex: 0 0 33.333333% ;\n    max-width: 33.333333% ;\n  }\n  .logo-brd {\n\t  margin: 8px;\n  }\n}\n@media screen and (max-width: 767px){\n  .log-view.col {\n    width: 50% !important;\n\t    flex: 0 0 50%;\n    max-width: 50%;\n}\n  }\n  .logo-brd {\n\t  margin: 8px;\n  }\n  .logo-brd h4{ font-size:17px;}\n}\n",
        }}
      />
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="log-view col">
              <div className="bg-white logo-brd logo-brd1 text-center p-2 txt-d-n">
                <a
                  title="Cluster Development Programme"
                  href="https://www.kbip.org/activities/cluster-development"
                  className="d-block pt-4"
                >
                  <h4 className="mb-0 pt-4 pb-2">
                    {" "}
                    Cluster Development Programme
                  </h4>
                </a>
              </div>
            </div>
            <div className="log-view col">
              <div className="bg-white logo-brd logo-brd2 text-center p-2 txt-d-n">
                <a
                  title="Kerala State Bamboo MissiCluster Development Programmeon"
                  href="http://www.keralabamboomission.org/"
                  className="d-block pt-3"
                  target="_blank"
                >
                  <img
                    src="images/bamboo-logo.png"
                    alt="Kerala State Bamboo Mission"
                    title="Kerala State Bamboo Mission"
                  />
                  <span className="text-dark d-block mt-2 ">
                    Kerala State Bamboo Mission
                  </span>
                </a>
              </div>
            </div>
            <div className="log-view col">
              <div className="bg-white logo-brd logo-brd1 text-center p-2 txt-d-n">
                <a
                  title="National Centre for HACCP Certification"
                  href="http://www.haccpindia.org/"
                  className="d-block pt-3"
                  target="_blank"
                >
                  <img
                    src="images/haccp-logo.png"
                    alt="National Centre for HACCP Certification"
                    title="National Centre for HACCP Certification"
                  />
                  <span className="text-dark d-block mt-2">
                    National Centre for HACCP Certification{" "}
                  </span>
                </a>
              </div>
            </div>
            <div className="log-view col">
              <div className="bg-white logo-brd logo-brd2 text-center p-2 txt-d-n">
                <a
                  title="Kerala e-Market"
                  href="http://www.keralaemarket.com/"
                  className="text-dark d-block"
                  target="_blank"
                >
                  <h4 className="mb-0 pt-5 pb-2">
                    {" "}
                    Kerala <br />
                    e-Market
                  </h4>
                </a>
              </div>
            </div>
            <div className="log-view col">
              <div className="bg-white logo-brd logo-brd1 text-center p-2">
                <a
                  title="Aatmanirbhar Bharat"
                  href="https://www.kbip.org/activities/pm-fme-scheme"
                  className="d-block pt-5"
                >
                  <img
                    src="https://www.kbip.org/images/pmfm-logo.jpg?d=060423113446"
                    alt="PM FME Scheme of Government of India"
                    title="PM FME Scheme of Government of India"
                  />
                </a>
              </div>
            </div>
            <div className="log-view col">
              <div className="bg-white logo-brd logo-brd2 text-center p-2">
                <a
                  title="Investor Konnect Newsletter"
                  href="https://www.kbip.org/Investor-konnect-newsletter"
                  className="d-block pt-4"
                >
                  <img
                    src="https://www.kbip.org/images/inkBg.jpg"
                    alt="Investor Konnect Newsletter"
                    title="Investor Konnect Newsletter"
                  />
                  <span className="text-dark d-block mt-2">
                    Investor Konnect Newsletter
                  </span>
                </a>
              </div>
            </div>
            <div className="log-view col">
              <div className="bg-white logo-brd logo-brd1 text-center p-2 txt-d-n">
                <a
                  title="Kerala e-Market"
                  href="https://www.kbip.org/Vyavasaya-keralam-newsletter"
                  className="text-dark d-block"
                  alt="Vyavasaya Keralam Newsletter"
                >
                  <h4 className="mb-0 pt-5 pb-2">
                    {" "}
                    Vyavasaya Keralam Newsletter{" "}
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
Home.isInner = false;

import { useState } from "react";
import axios from "axios";

function Contctus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const sendReclamation = function () {
    axios
      .post("http://localhost:5000/addreclamation", { name, email, subject })
      .then((res) => {
        setName("") ; 
        setEmail("") ; 
        setSubject("") ; 
      });
  };

  return (
    <div>
      {/* <!-- Preloader Starts --> */}
      <div className="preloader">
        <div className="spinner"></div>
      </div>
      {/* <!-- Preloader End --> */}

      {/* <!-- Header Area Starts --> */}
      <header className="header-area header-area2">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="logo-area">
                <a href="index.html">
                  <img src="assets/images/logo/logo2.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="custom-navbar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="main-menu main-menu2">
                <ul>
                  <li className="active">
                    <a href="/home">home</a>
                  </li>
                  <li>
                    <a href="/about">about</a>
                  </li>

                  <li>
                    <a href="/blog">blog</a>
                  </li>
                  <li>
                    <a href="/contact">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header Area End --> */}

      {/* <!-- Banner Area Starts --> */}
      <section className="banner-area banner-area2 contact-bg text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>
                <i>Contact Us</i>
              </h1>
              <p className="pt-2">
                <i>
                  Beast kind form divide night above let moveth bearing
                  darkness.
                </i>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Area End --> */}

      {/* <!-- Contact Form Starts --> */}
      <section className="contact-form section-padding3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <div className="d-flex">
                <div className="into-icon">
                  <i className="fa fa-home"></i>
                </div>
                <div className="info-text">
                  <h5>Hammam - lif</h5>
                  <p>put your exact adresse</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="into-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="info-text">
                  <h5>(+216)******</h5>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="into-icon">
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="info-text">
                  <h5>support@foodfun.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div>
                <div className="left">
                  <input
                  className = "mx-2"
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <input
                    type="email"
                     className = "mx-2"
                    placeholder="Enter email address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="right">
                  <textarea
                  className = "mt-5"
                    name="message"
                    cols="100"
                    rows="7"
                    placeholder="Enter subject"
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  ></textarea>
                </div>
                <button
                  type="click"
                  onClick={sendReclamation}
                  className="template-btn"
                >
                  Send Reclamation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Form End --> */}

      {/* <!-- Footer Area Starts --> */}
      <footer className="footer-area">
        <div className="footer-widget section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="single-widget single-widget1">
                  <a href="index.html">
                    <img src="assets/images/logo/logo2.png" alt="" />
                  </a>
                  <p className="mt-3">
                    Which morning fourth great won't is to fly bearing man.
                    Called unto shall seed, deep, herb set seed land divide
                    after over first creeping. First creature set upon stars
                    deep male gathered said she'd an image spirit our
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-widget single-widget2 my-5 my-md-0">
                  <h5 className="mb-4">contact us</h5>
                  <div className="d-flex">
                    <div className="into-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="info-text">
                      <p>
                        1234 Some St San Francisco, CA 94102, US 1.800.123.4567{" "}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="into-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="info-text">
                      <p>(123) 456 78 90</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="into-icon">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="info-text">
                      <p>support@axiomthemes.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-widget single-widget3">
                  <h5 className="mb-4">opening hours</h5>
                  <p>Monday ...................... Closed</p>
                  <p>Tue-Fri .............. 10 am - 12 pm</p>
                  <p>Sat-Sun ............... 8 am - 11 pm</p>
                  <p>Holidays ............. 10 am - 12 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <span>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </span>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="social-icons">
                  <ul>
                    <li className="no-margin">Follow Us</li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Area End --> */}
    </div>
  );
}

export default Contctus;

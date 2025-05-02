function About() {
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
                        <a href="index.html"><img src="assets/images/logo/logo2.png" alt="logo"/></a>
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
                            <li className="active"><a href="/home">home</a></li>
                            <li><a href="/about">about</a></li>
                     
                            <li><a href="/blog">blog</a>
                          
                            </li>
                            <li><a href="/contact">contact</a></li>
                     
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- Header Area End --> */}

    {/* <!-- Banner Area Starts --> */}
    <section className="banner-area banner-area2 text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1><i>About Us</i></h1>
                    <p className="pt-2"><i>Beast kind form divide night above let moveth bearing darkness.</i></p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Area End --> */}


    {/* <!-- Welcome Area Starts --> */}
    <section className="welcome-area section-padding2">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <div className="welcome-img">
                        <img src="assets/images/welcome-bg.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="welcome-text mt-5 mt-md-0">
                        <h3><span className="style-change">welcome</span> <br/>to food fun</h3>
                        <p className="pt-3">Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree am waters brought. Divide after there. Was.</p>
                        <p>Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree waters brought. Divide after there. Was. Created god gathered don't you yielding herb you had. And isn't god.</p>
                        <a href="#" className="template-btn mt-3">book a table</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Welcome Area End --> */}






       {/* Footer Area Starts */}
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
                      <p>tunis -hammam lif - 2050 </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="into-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="info-text">
                      <p>(+216) hot noumrouk .....</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="into-icon">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="info-text">
                      <p>name@gmail.com</p>
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
                    maha and nour
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
      {/* Footer Area End */}
        </div>
    )
}

export default About

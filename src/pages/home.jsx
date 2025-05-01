import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  //// reservation :: 
  const [recipeId , setRecipeId] = useState("") ; 
  const [recipeName , setRecipeName] = useState("") ; 
  const [userName , setUserName] = useState("") ; 
  const [userPhone , setUserPhone] = useState("") ; 
  const [reservationSuccess, setReservationSuccess] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/home").then((res) => {
      setData(res.data);
    });
  }, []);

  const addReservation = function (){
    axios.post("http://localhost:5000/addreservation", {
      recipe_id: recipeId,
      recipe_name: recipeName,
      user_name: userName,
      user_phone: userPhone
    }).then((res) => {
      setRecipeId("") ; 
      setRecipeName("") ; 
      setUserName("") ; 
      setUserPhone("") ;
      setReservationSuccess(true); 

      setTimeout(() => {
        setReservationSuccess(false);
      }, 3000);
    })
  }



  return (
    <>
      {/* Preloader Starts */}
      <div className="preloader">
        <div className="spinner"></div>
      </div>
      {/* Preloader End */}

      {/* Header Area Starts */}
      <header className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="logo-area">
                <a href="/">
                  <img src="assets/images/logo/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="custom-navbar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="main-menu">
                <ul>
                  <li className="active">
                    <a href="/home">home</a>
                  </li>
                  <li>
                    <a href="./about">about</a>
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
      {/* Header Area End */}

      {/* Banner Area Starts */}
      <section className="banner-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>the most interesting food in the world</h6>
              <h1>
                Discover the <span className="prime-color">flavors</span>
                <br />
                <span className="style-change">
                  of <span className="prime-color">food</span>fun
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Area End */}

      {/* Welcome Area Starts */}
      <section className="welcome-area section-padding2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="welcome-img">
                <img
                  src="assets/images/welcome-bg.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="welcome-text mt-5 mt-md-0">
                <h3>
                  <span className="style-change">welcome</span> <br />
                  to food fun
                </h3>
                <p className="pt-3">
                  Created god gathered don't you yielding herb you had. And
                  isn't, god was saw. Dominion. Great sixth for in unto was.
                  Open can't tree am waters brought. Divide after there. Was.
                </p>
                <p>
                  Created god gathered don't you yielding herb you had. And
                  isn't, god was saw. Dominion. Great sixth for in unto was.
                  Open can't tree waters brought. Divide after there. Was.
                  Created god gathered don't you yielding herb you had. And
                  isn't god.
                </p>
                <a href="#" className="template-btn mt-3">
                  book a table
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Welcome Area End */}

      {/* Food Area starts */}
      <section className="food-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="section-top">
                <h3>
                  <span className="style-change">we serve</span> <br />
                  delicious food
                </h3>
                <p className="pt-3">
                  They're fill divide i their yielding our after have him fish
                  on there for greater man moveth, moved Won't together isn't
                  for fly divide mids fish firmament on net.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
          {data.map((ele) => (
  <div className="col-md-4 col-sm-6" key={ele.id}>
    <div className="single-food">
      <div className="food-img">
        <img src={ele.image} className="img-fluid" alt="" />
      </div>
      <div className="food-content">
        <div className="d-flex justify-content-between">
          <h5>{ele.name}</h5> 
          <span className="style-change">{ele.price} dt (<span>{ele.id}</span>)</span>
        </div>
        <p className="pt-3">{ele.description}</p>
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </section>
      {/* Food Area End */}

      {/* Reservation Area Starts */}
      <div className="reservation-area section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Natural ingredients and testy food</h2>
              <h4 className="mt-4">some trendy and popular courses offerd</h4>
            
            </div>
          </div>
        </div>
      </div>
      {/* Reservation Area End */}

      {/* Deshes Area Starts */}
      <div className="deshes-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-top2 text-center">
                <h3>
                  Our <span>special</span> deshes
                </h3>
                <p>
                  <i>
                    Beast kind form divide night above let moveth bearing
                    darkness.
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 align-self-center">
              <h1>01.</h1>
              <div className="deshes-text">
                <h3>
                  <span>Garlic</span>
                  <br /> green beans
                </h3>
                <p className="pt-3">
                  Be. Seed saying our signs beginning face give spirit own beast
                  darkness morning moveth green multiply she'd kind saying one
                  shall, two which darkness have day image god their night. his
                  subdue so you rule can.
                </p>
                <span className="style-change">$12.00</span>
                <a href="#" className="template-btn3 mt-3">
                  book a table{" "}
                  <span>
                    <i className="fa fa-long-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
              <img
                src="assets/images/deshes1.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5 col-md-6 align-self-center order-2 order-md-1 mt-4 mt-md-0">
              <img
                src="assets/images/deshes2.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center order-1 order-md-2">
              <h1>02.</h1>
              <div className="deshes-text">
                <h3>
                  <span>Lemon</span>
                  <br /> rosemary chicken
                </h3>
                <p className="pt-3">
                  Be. Seed saying our signs beginning face give spirit own beast
                  darkness morning moveth green multiply she'd kind saying one
                  shall, two which darkness have day image god their night. his
                  subdue so you rule can.
                </p>
                <span className="style-change">$12.00</span>
                <a href="#" className="template-btn3 mt-3">
                  book a table{" "}
                  <span>
                    <i className="fa fa-long-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deshes Area End */}

      {/* Testimonial Area Starts */}
      <section className="testimonial-area section-padding4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-top2 text-center">
                <h3>
                  Customer <span>says</span>
                </h3>
                <p>
                  <i>
                    Beast kind form divide night above let moveth bearing
                    darkness.
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-slider owl-carousel">
                <div className="single-slide d-sm-flex">
                  <div className="customer-img mr-4 mb-4 mb-sm-0">
                    <img src="assets/images/customer1.png" alt="" />
                  </div>
                  <div className="customer-text">
                    <h5>adame nesane</h5>
                    <span>
                      <i>Chief Customer</i>
                    </span>
                    <p className="pt-3">
                      You're had. Subdue grass Meat us winged years you'll
                      doesn't. fruit two also won one yielding creepeth third
                      give may never lie alternet food.
                    </p>
                  </div>
                </div>
                <div className="single-slide d-sm-flex">
                  <div className="customer-img mr-4 mb-4 mb-sm-0">
                    <img src="assets/images/customer2.png" alt="" />
                  </div>
                  <div className="customer-text">
                    <h5>adam nahan</h5>
                    <span>
                      <i>Chief Customer</i>
                    </span>
                    <p className="pt-3">
                      You're had. Subdue grass Meat us winged years you'll
                      doesn't. fruit two also won one yielding creepeth third
                      give may never lie alternet food.
                    </p>
                  </div>
                </div>
                <div className="single-slide d-sm-flex">
                  <div className="customer-img mr-4 mb-4 mb-sm-0">
                    <img src="assets/images/customer1.png" alt="" />
                  </div>
                  <div className="customer-text">
                    <h5>adame nesane</h5>
                    <span>
                      <i>Chief Customer</i>
                    </span>
                    <p className="pt-3">
                      You're had. Subdue grass Meat us winged years you'll
                      doesn't. fruit two also won one yielding creepeth third
                      give may never lie alternet food.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area End */}

      {/* Update Area Starts */}
      <section className="update-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-top2 text-center">
                <h3>
                  Our <span>food</span> update
                </h3>
                <p>
                  <i>
                    Beast kind form divide night above let moveth bearing
                    darkness.
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="single-food">
                <div className="food-img">
                  <img
                    src="assets/images/update1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="food-content">
                  <div className="post-admin d-lg-flex mb-3">
                    <span className="mr-5 d-block mb-2 mb-lg-0">
                      <i className="fa fa-user-o mr-2"></i>Admin
                    </span>
                    <span>
                      <i className="fa fa-calendar-o mr-2"></i>18/09/2018
                    </span>
                  </div>
                  <h5>no finer food can be found</h5>
                  <p>
                    nancy boy off his nut so I said chimney pot be James Bond
                    aking cakes he.
                  </p>
               
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-food my-5 my-md-0">
                <div className="food-img">
                  <img
                    src="assets/images/update2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="food-content">
                  <div className="post-admin d-lg-flex mb-3">
                    <span className="mr-5 d-block mb-2 mb-lg-0">
                      <i className="fa fa-user-o mr-2"></i>Admin
                    </span>
                    <span>
                      <i className="fa fa-calendar-o mr-2"></i>20/09/2018
                    </span>
                  </div>
                  <h5>things go better with food</h5>
                  <p>
                    nancy boy off his nut so I said chimney pot be James Bond
                    aking cakes he.
                  </p>
          
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-food">
                <div className="food-img">
                  <img
                    src="assets/images/update3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="food-content">
                  <div className="post-admin d-lg-flex mb-3">
                    <span className="mr-5 d-block mb-2 mb-lg-0">
                      <i className="fa fa-user-o mr-2"></i>Admin
                    </span>
                    <span>
                      <i className="fa fa-calendar-o mr-2"></i>22/09/2018
                    </span>
                  </div>
                  <h5>food head above the rest</h5>
                  <p>
                    nancy boy off his nut so I said chimney pot be James Bond
                    aking cakes he.
                  </p>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Update Area End */}

      {/* Table Area Starts */}
      <section className="table-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-top2 text-center">
                <h3>
                  Book <span>your</span> recipe
                </h3>
                <p>
                  <i>
                    Beast kind form divide night above let moveth bearing
                    darkness.
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div >
                {/* <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-calendar"></i>
                    </span>
                  </div>
                  <input type="text" id="datepicker" />
                </div> */}
                {/* <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-clock-o"></i>
                    </span>
                  </div>
                  <input type="text" id="datepicker2" />
                </div> */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user-o"></i>
                    </span>
                  </div>
                  <input type="number" placeholder="put the id of the recipe" 
                    onChange={(e) => setRecipeId(e.target.value)}
                    value={recipeId}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user-o"></i>
                    </span>
                  </div>
                  <input type="text"  placeholder="put the name of the recipe"
                    onChange={(e)=>setRecipeName(e.target.value)}
                    value={recipeName}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user-o"></i>
                    </span>
                  </div>
                  <input type="text"  placeholder="user name"
                    onChange={(e)=>setUserName(e.target.value)}
                    value={userName}
                  />
                </div>


                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user-o"></i>
                    </span>
                  </div>
                  <input type="tel"  placeholder="user phone"
                    onChange={(e) => setUserPhone(e.target.value)}
                    value={userPhone}
                  />
                </div>
                <div className="table-btn text-center">
                  <button  className="template-btn template-btn2 mt-4"  
                  onClick={addReservation}
                  >
                    Reservation
                  </button>

                  {reservationSuccess && (
  
    <div class="alert alert-success mt-5" role="alert">
      Successfully reserved!
  </div>
  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Table Area End */}

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
    </>
  );
}

export default Home;

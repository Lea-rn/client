import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [data]);

  return (
    <div>
      {/* <!-- Preloader Starts --> */}
      <div className="preloader">
        <div className="spinner"></div>
      </div>
      {/* <!-- Preloader End -->  */}

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
      <section className="banner-area banner-area2 blog-page text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>
                <i>Our Blog</i>
              </h1>
              <a href="index.html">home</a>
              <span className="mx-2">/</span>
              <a href="blog-home.html">blog page</a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner Area End --> */}

      {/* <!--================Blog Categorie Area =================--> */}
      <section className="blog_categorie_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="categories_post">
                <img
                  src="assets/images/blog/cat-post/cat-post-3.jpg"
                  alt="post"
                />
                <div className="categories_details">
                  <div className="categories_text">
                    <a href="blog-details.html">
                      <h5>Social Life</h5>
                    </a>
                    <div className="border_line"></div>
                    <p>Enjoy your social life together</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="categories_post">
                <img
                  src="assets/images/blog/cat-post/cat-post-2.jpg"
                  alt="post"
                />
                <div className="categories_details">
                  <div className="categories_text">
                    <a href="blog-details.html">
                      <h5>Politics</h5>
                    </a>
                    <div className="border_line"></div>
                    <p>Be a part of politics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="categories_post">
                <img
                  src="assets/images/blog/cat-post/cat-post-1.jpg"
                  alt="post"
                />
                <div className="categories_details">
                  <div className="categories_text">
                    <a href="blog-details.html">
                      <h5>Food</h5>
                    </a>
                    <div className="border_line"></div>
                    <p>Let the food be finished</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================Blog Categorie Area =================--> */}

      {/* <!--================Blog Area =================--> */}
      <section className="blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog_left_sidebar flex-wrap">
                {data.map((blog) => (
                  <article className="row blog_item ">
                    <div className="col-md-3">
                      <div className="blog_info text-right">
               
                        <ul className="blog_meta list">
                          <li>
                            <a href="#">
                              Admin {blog.creator}
                              <i className="fa fa-user-o"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {blog.created_at}
                              <i className="fa fa-calendar-o"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="blog_post">
                        <img width={"100%"} src={blog.blog_img} alt="" />
                        <div className="blog_details  px-3">
                          <a href="blog-details.html">
                            <h4>{blog.title}</h4>
                          </a>
                          <p style={{wordWrap:"break-word"}} >{blog.description}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
            
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                  {/* <!-- /input-group --> */}
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget author_widget">
                  <img
                    className="author_img rounded-circle"
                    src="assets/images/blog/author.png"
                    alt=""
                  />
                  <h5>Charlie Barber</h5>
                  <p>Senior blog writer</p>
                  <div className="social_icon">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-github"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </div>
                  <p>
                    Boot camps have its supporters andit sdetractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get. Boot camps have itssuppor
                    ters andits detractors.
                  </p>
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h4 className="widget_title">Popular Posts</h4>
                  <div className="media post_item">
                    <img
                      src="assets/images/blog/popular-post/post1.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h5>Space The Final Frontier</h5>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="assets/images/blog/popular-post/post2.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h5>The Amazing Hubble</h5>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="assets/images/blog/popular-post/post3.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h5>Astronomy Or Astrology</h5>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="assets/images/blog/popular-post/post4.jpg"
                      alt="post"
                    />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h5>Asteroids telescope</h5>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget ads_widget">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/add.jpg"
                      alt=""
                    />
                  </a>
                  <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Post Catgories</h4>
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Technology</p>
                        <p>37</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Lifestyle</p>
                        <p>24</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Fashion</p>
                        <p>59</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Art</p>
                        <p>29</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Food</p>
                        <p>15</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Architecture</p>
                        <p>09</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Adventure</p>
                        <p>44</p>
                      </a>
                    </li>
                  </ul>
                  <div className="br"></div>
                </aside>
                <aside className="single-sidebar-widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <p>
                    Here, I focus on a range of items and features that we use
                    in life without giving them a second thought.
                  </p>
                  <div className="form-group d-flex flex-row">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                      />
                    </div>
                    <a href="#" className="bbtns">
                      Subscribe
                    </a>
                  </div>
                  <p className="text-bottom">You can unsubscribe at any time</p>
                  <div className="br"></div>
                </aside>
                <aside className="single-sidebar-widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Architecture</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Art</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================Blog Area =================--> */}

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
  );
}

export default Blog;

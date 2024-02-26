import React from "react";
// import ProductDetail from "../Product Details/Product_Details";

const ShoppingCart = () => {
  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <h1>
            <center>Welcome To Furnitures Shop</center>
          </h1>
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>{" "}
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>

            <div className="card rounded-3 mb-4">
              {/* <!-- 1st item--> */}
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <a
                      href="Testing Bootstrap\Product Details\Product_Details.html"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontWeight: "800",
                      }}
                    >
                      <p
                        className="lead fw-normal mb-2"
                        style={{
                          fontWeight: "1000",
                        }}
                      >
                        Orange Leather Sofa
                      </p>
                    </a>

                    <p>
                      <span className="text-muted">Color: </span>Orange
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button
                      className="btn btn-link px-2"
                      onClick={() =>
                        document.getElementById("form1").stepDown()
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <input
                      id="form1"
                      min="0"
                      name="quantity"
                      defaultValue="2"
                      type="number"
                      className="form-control form-control-sm"
                    />

                    <button
                      className="btn btn-link px-2"
                      onClick={() => document.getElementById("form1").stepUp()}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">$239.60</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-danger">
                      <i className="fas fa-trash fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2nd Item */}
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src="https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg"
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <a
                      href="Testing Bootstrap\Product Details\Product_details2.html"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontWeight: "800",
                      }}
                    >
                      <p
                        className="lead fw-normal mb-2"
                        style={{
                          fontWeight: "1000",
                        }}
                      >
                        Monesta Chair
                      </p>
                    </a>
                    <p>
                      <span className="text-muted">Color: </span>Grey
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button
                      className="btn btn-link px-2"
                      onClick={() =>
                        document.getElementById("form1").stepDown()
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <input
                      id="form1"
                      min="0"
                      name="quantity"
                      defaultValue="2"
                      type="number"
                      className="form-control form-control-sm"
                    />

                    <button
                      className="btn btn-link px-2"
                      onClick={() => document.getElementById("form1").stepUp()}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">$399.90</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-danger">
                      <i className="fas fa-trash fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* 3rd Item */}

              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src="https://m.media-amazon.com/images/I/71N+A-kXrlL._AC_UF894,1000_QL80_.jpg"
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">WOODLAB Furniture </p>
                    <p>
                      <span className="text-muted">Color: </span>White
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button
                      className="btn btn-link px-2"
                      onClick={() =>
                        document.getElementById("form1").stepDown()
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <input
                      id="form1"
                      min="0"
                      name="quantity"
                      defaultValue="2"
                      type="number"
                      className="form-control form-control-sm"
                    />

                    <button
                      className="btn btn-link px-2"
                      onClick={() => document.getElementById("form1").stepUp()}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">$699.80</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-danger">
                      <i className="fas fa-trash fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* More card elements... */}

            <div className="card">
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-warning btn-block btn-lg"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;

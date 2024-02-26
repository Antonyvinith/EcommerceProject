const Display = () => {
  return (
    <div class="container">
      <h1 class="mt-5 mb-4">Product Listing</h1>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            {/* <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product Image"></img> */}
            <div class="card-body">
              <h5 class="card-title">Product 1</h5>
              <p class="card-text">Description of Product 1.</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            {/* <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product Image"></img> */}
            <div class="card-body">
              <h5 class="card-title">Product 2</h5>
              <p class="card-text">Description of Product 2.</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            {/* <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product Image"></img> */}
            <div class="card-body">
              <h5 class="card-title">Product 3</h5>
              <p class="card-text">Description of Product 3.</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;

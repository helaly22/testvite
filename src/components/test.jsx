function Carousel() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={
                "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/disney-pinocchio-chicken-little-moana-stitch-aurora-hercules-tinkerbell-ariel-bambi-elsa-zootopia-princess-and-the-frog-moana.jpg"
              }
              class="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={
                "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/Disney-movie-characters-from-every-decade.jpg"
              }
              class="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={
                "https://i.pinimg.com/564x/c0/86/54/c0865444df2c9a6dedd6cb68d40cdc0e.jpg"
              }
              class="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={
                "https://i.pinimg.com/564x/28/dc/0f/28dc0fd37ef7f510797119ffcaabdb97.jpg"
              }
              class="d-block w-75 m-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Carousel;

function Intro() {
  return (
    <section id="intro" className="bg-light py-5">
      <div className="container">

        <div id="carouselExampleIndicators" className="carousel slide">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="/images/carousel_image1.jpg" className="d-block w-100" alt=""/>
            </div>

            <div className="carousel-item">
              <img src="/images/carousel_image2.jpg" className="d-block w-100" alt=""/>
            </div>

            <div className="carousel-item">
              <img src="/images/carousel_image3.jpg" className="d-block w-100" alt=""/>
            </div>

          </div>

        </div>

        <div className="bg-white p-4 shadow rounded mt-4">
          <h2 className="text-center">
            Where technology meets life science — that's where I build.
          </h2>
        </div>

      </div>
    </section>
  );
}

export default Intro;
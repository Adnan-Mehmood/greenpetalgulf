import { newsItems } from '../content';

const NewsSection = () => (
  <section className="news-section default-style">
    <div className="auto-container">
      <div className="sec-title text-center">
        <div className="sub-title">News &amp; Updates</div>
        <h2>Latest From Our Blog</h2>
      </div>
      <div className="row">
        {newsItems.map((item) => (
          <div key={item.title} className="col-lg-4 news-block">
            <div className="inner-box">
              <div className="image">
                <img src={item.image} alt={item.title} />
                <div className="overlay-two">
                  <a href={item.image} className="lightbox-image" data-fancybox="gallery">
                    <span className="fa-solid fa-magnifying-glass-plus" />
                  </a>
                  <a href={item.link}>
                    <span className="fa-solid fa-link" />
                  </a>
                </div>
              </div>
              <div className="lower-content">
                <h3>
                  <a href={item.link}>{item.title}</a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;


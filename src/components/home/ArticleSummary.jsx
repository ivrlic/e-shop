import articleData from "../../assets/data/articleData.js";

const ArticleSummary = () => {
  const articleListHtml = articleData.map(art => {
    return (
      <div key={art.id} className="home-article-cont">
          <img src={art.img} alt={art.imgAlt} />
          <div className="home-article-cont-info-cont">
            <p className="home-article-cont-category">{art.category}</p>
            <p className="home-article-cont-title">{art.title}</p>
            <p className="home-article-cont-text">{art.text}</p>
            <button className="home-link-btn">Read more</button>
          </div>
          <hr className="home-article-line" />
      </div>
    )
  })

  return (
    <section className="home-articles-section">
        <h2>LATEST ARTICLES</h2>
        <div className="home-articles-list-cont">{articleListHtml}</div>
    </section>
  );
};

export default ArticleSummary;
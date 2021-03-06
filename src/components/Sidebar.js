import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <aside>
      {props.topAnime ? (
        <nav>
          <div className="container-arrow">
            <Link to="/" className="arrow-back">&lt;</Link>
          </div>
          <div className="top-anime-container">
            <div>
              <h3>Top anime</h3>
              {props.topAnime.map((anime) => (
                <a
                  href={anime.url}
                  target="_blank"
                  key={anime.mal_id}
                  rel="noreferrer"
                >
                  {anime.title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="container-arrow">
            <Link to="/" className="arrow-back">&lt;</Link>
          </div>
        <div className="top-manga-container">
          <div>
            <h3>Top manga</h3>
            {props.topManga.map((manga) => (
              <a
                href={manga.url}
                target="_blank"
                key={manga.mal_id}
                rel="noreferrer"
              >
                {manga.title}
              </a>
            ))}
          </div>
        </div>
      </nav>
      )}
    </aside>
  );
}

export default Sidebar;

import React from "react";
import ListItemFilm from "./list-item";
import Stars from "./stars";

class FilmFullInfo extends React.Component {
  getStars = k => {
    let val = localStorage.getItem(k);
    if (!val) return 0;
    return val;
  };

  setStars = event => {
    let k = event.currentTarget.dataset.key;
    let v = event.target.dataset.count;
    if (this.getStars(k) === v) {
      v = 0;
    }
    localStorage.setItem(k, v);
    this.forceUpdate();
  };

  render() {
    let { film } = this.props;

    return (
      <>
        <ListItemFilm film={film} size={4} />
        <div>
          <span className="alert-link">Description</span>
          <p>{film.overview}</p>
        </div>
        <div>
          <span className="alert-link">Rate this</span>
          <Stars
            count={this.getStars(film.id)}
            event={this.setStars}
            key1={film.id}
          />
        </div>
      </>
    );
  }
}

export default FilmFullInfo;

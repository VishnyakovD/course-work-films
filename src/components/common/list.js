import React from "react";
import ListItemFilm from "./list-item";
import { Link } from "react-router-dom";

const List = ({ films }) => {
  let renderList = [];

  if (films && films.length > 0) {
    renderList = films;
  } else if (films) {
    renderList.push(films);
  }

  return (
    <div className="list-films">
      {renderList.map(item => {
        return (
          <>
            {<ListItemFilm film={item} size={2} />}
            <div className="text-right">
              <Link
                className="badge-pill badge-info text-monospace"
                to={`/film/${item.id}`}
              >
                More...
              </Link>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default List;

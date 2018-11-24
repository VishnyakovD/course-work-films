import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "./films.svg";
class MainMenu extends Component {
  state = {
    query: ""
  };

  inputChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  abortLink = event => {
    if (this.state.query === "") event.preventDefault();
  };

  render() {
    let { query } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img style={{ width: "45px" }} src={Icon} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/list/latest">
                  Latest
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/list/upcoming">
                  Upcoming
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/list/popular">
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list/ganres">
                  Ganres
                </Link>
              </li>
            </ul>
            <div
              className="form-inline"
              style={{ display: "flex", width: "100%", paddingLeft: "15px" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "calc(100% - 87px)" }}
                onChange={this.inputChange}
              />
              &nbsp; &nbsp;
              <Link
                onClick={this.abortLink}
                className={
                  query === ""
                    ? "btn btn-outline-danger"
                    : "btn btn-outline-success"
                }
                to={`/list/search/${query}`}
              >
                Search
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default MainMenu;
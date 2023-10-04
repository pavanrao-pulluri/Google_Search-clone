import React from "react";
import "../pages/SearchPage.css";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

const SearchPage = ({ hideButtons }) => {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchpage">
      <div className="searchpage-header">
        <a href="/">
          <img
            className="searchpage-logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </a>
        <div className="searchpage-headerbody">
          <Search hideButtons />
          <div className="searchpage-options">
            <div className="searchpage-optionsleft">
              <div className="searchpage-option">
                <SearchIcon />
                <Link to="all">All</Link>
              </div>
              <div className="searchpage-option">
                <Description />
                <Link to="news">News</Link>
              </div>
              <div className="searchpage-option">
                <Image />
                <Link to="images">Images</Link>
              </div>
              <div className="searchpage-option">
                <LocalOffer />
                <Link to="shopping">Shopping</Link>
              </div>
              <div className="searchpage-option">
                <Room />
                <Link to="maps">Maps</Link>
              </div>
              <div className="searchpage-option">
                <MoreVert />
                <Link to="more">More</Link>
              </div>
            </div>
            <div className="searchpage-optionsright">
              <div className="searchpage-option">
                <Link to="settings">Settings</Link>
              </div>
              <div className="searchpage-option">
                <Link to="tolls">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchpage-results">
          {data && data.searchInformation && (
            <p className="searchpage-resultscount">
              About {data.searchInformation.formattedTotalResults} results (
              {data.searchInformation.formattedSearchTime} seconds) for {term}
            </p>
          )}
          {data &&
            data.items &&
            data.items.map((item) => (
              <div className="searchpage-result">
                <a href={item.link}>{item.displayLink}▾</a>
                <a className="searchpage-resultTitle" href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className="searchpage-resultSnippet">{item.snippet}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

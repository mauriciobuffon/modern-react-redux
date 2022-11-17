import React, { useState, useEffect } from "react";
import axios from "axios";
import dompurify from "dompurify";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  const search = async function (t) {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: t,
      },
    });

    setResults(data.query.search);
  };

  const onInputChange = function (event) {
    setTerm(event.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 750);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    if (debouncedTerm) {
      search(debouncedTerm);
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  return (
    <React.Fragment>
      <div className="ui form">
        <div className="field">
          <label htmlFor="term">Enter Search Term</label>
          <input
            id="term"
            className="input"
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
        <div className="ui celled list">
          {results.map((item) => {
            return (
              <div className="item" key={item.pageid}>
                <div className="right floated content">
                  <a
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${item.pageid}`}
                  >
                    Go
                  </a>
                </div>
                <div className="content">
                  <div className="header">{item.title}</div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: dompurify.sanitize(item.snippet),
                    }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;

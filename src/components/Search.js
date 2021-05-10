import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResult] = useState([]);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [term]);

    useEffect(() => {
        const searchWiki = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                }
            );

            setResult(data.query.search);
        };
        searchWiki();
    }, [debouncedTerm]);

    const renderResult = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <h4 className="header">{result.title}</h4>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: result.snippet,
                        }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="ui label">Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderResult}</div>
        </div>
    );
};

export default Search;

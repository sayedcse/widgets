import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Africans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Bangla',
        value: 'bn',
    },
    {
        label: 'Douch',
        value: 'nl',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
];
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, seText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="ui label">Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => seText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectionChange={setLanguage}
                options={options}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;

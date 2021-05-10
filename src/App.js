import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React ?',
        content: 'React is a JavaScript library created by Facebook.',
    },
    {
        title: 'Why use React ?',
        content:
            'React allows developers to create large web applications that can change data, without reloading the page.',
    },
    {
        title: 'How we use React ?',
        content: 'We use React by creating reuseable Components.',
    },
];

const options = [
    {
        label: 'Red',
        value: 'The Color Red',
        color: '#ff7e7e',
    },
    {
        label: 'Green',
        value: 'The Color Green',
        color: '#44d0c3',
    },
    {
        label: 'Blue',
        value: 'A shade of Blue',
        color: '#63b7ff',
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="ui segment container">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    selected={selected}
                    options={options}
                    onSelectionChange={setSelected}
                />
                <div
                    className="ui segment"
                    style={{ background: `${selected.color}` }}
                >
                    {selected.value}
                </div>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};
export default App;

// <button
//     className="ui inverted button secondary"
//     onClick={() => setShowDropdown(!showDropdown)}
// >
//     Toggle Dropdown
// </button>
// {showDropdown ? (
//     <Dropdown
//         selected={selected}
//         options={options}
//         onSelectionChange={setSelected}
//     />
// ) : null}

// <Search />

// <Accordion items={items} />

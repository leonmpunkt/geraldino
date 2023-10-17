// MusikContent.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import musikText from './text/Musik.md'; // Adjust the path to your Hallo markdown file

const MusikContent = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(musikText)
            .then((response) => response.text())
            .then((text) => setMarkdown(text))
            .catch((error) => console.error('Error fetching markdown:', error));
    }, []);

    return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MusikContent;

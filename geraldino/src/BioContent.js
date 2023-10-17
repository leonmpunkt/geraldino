// BioContent.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import bioText from './text/Bio.md'; // Adjust the path to your Hallo markdown file

const BioContent = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(bioText)
            .then((response) => response.text())
            .then((text) => setMarkdown(text))
            .catch((error) => console.error('Error fetching markdown:', error));
    }, []);

    return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default BioContent;

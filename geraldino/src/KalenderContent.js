// KalenderContent.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import kalenderText from './text/Kalender.md'; // Adjust the path to your Hallo markdown file

const KalenderContent = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(kalenderText)
            .then((response) => response.text())
            .then((text) => setMarkdown(text))
            .catch((error) => console.error('Error fetching markdown:', error));
    }, []);

    return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default KalenderContent;

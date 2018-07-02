import React from 'react';
import './crawl-text.css';

const CrawlText = (props) => {
  const {crawlText } = props;

  return (
    <div className="crawl-text-container">
      <h3 className="crawl-text">{crawlText.crawlText}</h3>
      <h5>{crawlText.title}</h5>
      <h5>{crawlText.release}</h5>
    </div>
  );

};

export default CrawlText;
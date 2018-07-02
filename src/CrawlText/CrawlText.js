import React from 'react';

const CrawlText = (props) => {
  const {crawlText } = props;

  return (
    <div>
      <h3>{crawlText.crawlText}</h3>
      <h5>{crawlText.title}</h5>
      <h5>{crawlText.release}</h5>
    </div>
  );

};

export default CrawlText;
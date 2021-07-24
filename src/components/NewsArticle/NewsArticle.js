import React from 'react';
import './NewsArticle.scss';
import NewsLogo from '../NewsLogo/NewsLogo';
import PropTypes from 'prop-types';

const NewsArticle = (props) => {
    const {data, position} = props;

    const extraThumbnailClasses = () => {
      if (position === 'highlight-1') return 'news-article-thumb-highlight-1';
      if (position === 'highlight-2') return 'news-article-thumb-highlight-2';
      return "";
    };

    const extraArticleClasses = () => {
      if (position === 'highlight-1') return 'news-article-body-highlight-1';
      if (position === 'highlight-2') return 'news-article-body-highlight-2';
      return "";
    };

        
    return (
      <div className="news-article-block">
        <div className="d-flex">
          <img
            src={`./dummy-cdn/images/${data.image}.jpg`}
            className={`news-article-thumb ${extraThumbnailClasses()}`}
            alt={data.title}
          />
          <div
            className={`news-article-body ${extraArticleClasses()}`}
          >
            <NewsLogo logo={data.newsSource} />

            <div className="news-article-title">
              {data.title}
            </div>

            <div className="news-article-date">{data.formattedDate}</div>
            <div className="news-article-read-more">
                <span className="read-more-text">
                  Read more
                </span>
            </div>
          </div>
        </div>
      </div>
    );
};

NewsArticle.propTypes = {
  data: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired
};


export default NewsArticle;
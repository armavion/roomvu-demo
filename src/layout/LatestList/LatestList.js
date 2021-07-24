import React from 'react';
import NewsArticle from '../../components/NewsArticle/NewsArticle';
import PropTypes from 'prop-types';
import './LatestList.scss';

const LatestList = (props) => {

    const {data} = props;

    return (
      <>
        <div className="latest-list-title">Latest</div>
        {data.map((item) => (<NewsArticle data={item} position="latest" key={item.articleId} />))}
      </>
    );
};

LatestList.propTypes = {
  data: PropTypes.array.isRequired
};

export default LatestList;
import './HighlightsGrid.scss';
import React from 'react';
import {Grid} from 'semantic-ui-react';
import NewsArticle from './../../components/NewsArticle/NewsArticle';
import PropTypes from 'prop-types';


const HightlightsGrid = (props) => {
  const { data } = props;

  // "Roomvu in the press":
  const renderPageTitle = (
    <div className="page-title">
      <img src="./assets/logo-black.svg" alt="Roomvu" />
      <h2> in the Press</h2>
    </div>
  );

  return (
    <>
      {renderPageTitle}
      <Grid columns={16}>
        <Grid.Column mobile={16} widescreen={9} largeScreen={9} computer={9} tablet={16}>
          <NewsArticle data={data[0]} position="highlight-1" />
          <NewsArticle data={data[1]} position="highlight-2" />
        </Grid.Column>
        <Grid.Column mobile={16} widescreen={7} largeScreen={7} computer={7} tablet={16}>
          <NewsArticle data={data[2]} position="highlight-right" />
          <NewsArticle data={data[3]} position="highlight-right" />
          <NewsArticle data={data[4]} position="highlight-right" />
        </Grid.Column>
      </Grid>
    </>
  );
};

HightlightsGrid.propTypes = {
  data: PropTypes.array.isRequired
};

export default HightlightsGrid;
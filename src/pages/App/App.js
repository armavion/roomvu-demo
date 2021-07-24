import React, { useState } from 'react';
import './App.scss';
import { Container, Menu, Segment, Sidebar, Icon } from "semantic-ui-react";
import 'semantic-ui-less/semantic.less';
import dataSource from '../../data/dummy-data';
import Spacer from '../../components/Spacer';
import HightlightsGrid from '../../layout/HighlightsGrid/HighlightsGrid';
import LatestList from '../../layout/LatestList/LatestList';
import MainMenu from './../../layout/MainMenu/MainMenu';

const App = () => {

  // News data:
  const {highlights, latest} = dataSource;

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleOpenMenu = () => {
    setMobileMenuVisible(true);
  };

  const onClickAway = () => {
    if (mobileMenuVisible) setMobileMenuVisible(false);
  };

    return (
      <Sidebar.Pushable as={Segment} style={{ overflow: "hidden" }}>
        <Sidebar
          as={Menu}
          animation="uncover"
          direction="left"
          inverted
          vertical
          visible={mobileMenuVisible}
        >
          <Menu.Item as="a" style={{fontSize: 18}}>Video series</Menu.Item>
          <Menu.Item as="a" style={{fontSize: 18}}>Features</Menu.Item>
          <Menu.Item as="a" style={{fontSize: 18}}>Pricing</Menu.Item>
          <Menu.Item as="a" style={{fontSize: 18}}><Icon name="camera" /> Need a photographer?</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={mobileMenuVisible} onClick={onClickAway}>
          <div className="page-layout">
            <MainMenu handleOpenMenu={handleOpenMenu} />
            <Container className="main-container">
              <HightlightsGrid data={highlights} />
              <LatestList data={latest} />
              <Spacer height={100} />
            </Container>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
};

export default App;
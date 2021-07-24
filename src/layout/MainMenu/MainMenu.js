import React from "react";
import { Button, Menu, Dropdown, Grid, Icon } from "semantic-ui-react";
import PropTypes from 'prop-types';

const MainMenu = (props) => {
  
  const {handleOpenMenu} = props;

  return (
    <Grid>
      <Grid.Row only="computer">
        <Grid.Column>
          <Menu size="huge" style={{ padding: "0 32px" }} secondary>
            <img
              src="./assets/logo.svg"
              style={{ width: 230, height: "auto" }}
              alt="Roomvu"
            />

            <Menu.Menu>
              <Dropdown
                item
                text="Video Series"
                icon="chevron down"
                className="menu-dropdown"
              >
                <Dropdown.Menu>
                  <Dropdown.Item>Video Series one</Dropdown.Item>
                  <Dropdown.Item>Video Series two</Dropdown.Item>
                  <Dropdown.Item>Video Series three</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                item
                text="Features"
                icon="chevron down"
                className="menu-dropdown"
              >
                <Dropdown.Menu>
                  <Dropdown.Item>Awesome feature one</Dropdown.Item>
                  <Dropdown.Item>Awesome feature two</Dropdown.Item>
                  <Dropdown.Item>Other features</Dropdown.Item>
                  <Dropdown.Item>Social media features</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item
                name="reviews"
                active={false}
                content="Pricing"
                onClick={() => {}}
              />

              <Menu.Item
                name="reviews"
                active={false}
                icon="camera"
                content="Need a Photographer?"
                id="menu-photographer-button"
                style={{ fontWeight: "bold" }}
                onClick={() => {}}
              />
            </Menu.Menu>

            <Menu.Menu position="right">
              <Menu.Item style={{ padding: "0" }}>
                <Button style={{ borderRadius: 12 }} primary>
                  GET STARTED FREE
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile tablet">
      <Grid.Column>
          <Menu size="huge" style={{ padding: "0 32px" }} secondary>
              <Menu.Item
                name="menu-trigger"
                active={false}
                onClick={handleOpenMenu}
              >
                <Icon name="bars" style={{fontSize: 20}} />
                </Menu.Item>

            <img
              src="./assets/logo.svg"
              style={{ width: 230, height: "auto" }}
              alt="Roomvu"
            />

          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

MainMenu.propTypes = {
  data: PropTypes.func.isRequired
};

export default MainMenu;
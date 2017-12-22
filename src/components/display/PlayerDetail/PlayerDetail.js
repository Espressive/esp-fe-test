import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import {
  Button,
  Flag,
  Form,
  Grid,
  Header,
  Image,
  Label,
  Segment,
}                           from 'semantic-ui-react';

const propTypes = { match: PropTypes.shape({ params: PropTypes.shape({ playerID: PropTypes.string }) }) };

const defaultProps = { match: null };

class PlayerDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    // TODO: This temporary data needs to be removed and replaced with real
    // player data from /api/v1/players/$playerID
    const player = {
      id         : 17,
      first_name : 'First',
      last_name  : 'Last',
      country    : 'gb eng',
      position   : 'MID',
      img        : '/img/team/17.png',
      bio        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque modi nobis tempora et laboriosam enim cum fugiat ab adipisci nostrum quae aliquam, laudantium minus vel repudiandae cupiditate labore, soluta repellendus.',
    };

    // TODO: This temporary data needs to be removed and replaced with real
    // position data from /api/v1/positions
    const positions = [
      {
        key   : 'MID',
        value : 'MID',
        text  : 'MID',
      },
    ];

    const { playerID } = this.props.match.params;

    const { isEditing } = this.state;

    return (
      <Grid.Column width={10}>
        <Segment
          clearing
          color='teal'
          inverted
        >
          <Image
            floated='left'
            size='medium'
            src={player.img}
            style={{ marginBottom: 0 }}
            wrapped
          />

          <Header
            as='h2'
            content={[player.first_name,player.last_name].join(' ')}
            style={{ marginTop: 0 }}
            subheader={
              <Label
                circular
                content={playerID}
                style={{
                  float     : 'right',
                  marginTop : '.25em',
                }}
              />
            }
          />

          <Form
            inverted
          >
            <Form.Group widths='equal'>
              <Form.Field inline>
                <label htmlFor='#'>{'Country'}</label>
                <Flag
                  className={player.country}
                  style={{ margin: '1em 0' }}
                />
              </Form.Field>
              {isEditing ?
                <Form.Select
                  compact
                  inline
                  label='Position'
                  options={positions}
                  value={player.position}
                />
                :
                <Form.Field inline>
                  <label htmlFor='#'>{'Position'}</label>
                  <p style={{ margin: '1em 0' }}>{player.position}</p>
                </Form.Field>
              }
            </Form.Group>
          </Form>
          <p>{player.bio}</p>

          {/*
            TODO: This button needs to toggle an edit state for the player. this
            will reveal a dropdown with available posiitons. This position can
            be changed in the dropdown and then the save button below can be
            used to save the changes.
          */}
          {isEditing ?
            <Button
              content='SAVE'
              inverted
              positive
            />
            :
            <Button
              content='Edit Player Position'
              inverted
            />
          }
        </Segment>
      </Grid.Column>
    );
  }

}

PlayerDetail.propTypes = propTypes;

PlayerDetail.defaultProps = defaultProps;

export default PlayerDetail;

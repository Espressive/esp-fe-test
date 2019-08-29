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
  Transition,
}                           from 'semantic-ui-react';


class PlayerDetail extends Component {

  static propTypes = { match: PropTypes.shape({ params: PropTypes.shape({ playerID: PropTypes.string }) }) };

  static defaultProps = { match: null };

  state = { isEditing: false };

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
  // TODO: This temporary data needs to be removed and replaced with real
  // player data from /api/v1/players/$playerID
    const player = {
      bio        : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque modi nobis tempora et laboriosam enim cum fugiat ab adipisci nostrum quae aliquam, laudantium minus vel repudiandae cupiditate labore, soluta repellendus.',
      country    : 'gb eng',
      first_name : 'First',
      id         : 17,
      img        : '/img/team/17.png',
      last_name  : 'Last',
      position   : 'MID',
    };

    // TODO: This temporary data needs to be removed and replaced with real
    // position data from /api/v1/positions
    const positions = [
      {
        key   : 'MID',
        text  : 'MID',
        value : 'MID',
      },
    ];

    const { playerID } = this.props.match.params;

    const { isEditing } = this.state;

    return (
      <Transition
        animation='fly up'
        duration={600}
        transitionOnMount
      >
        <Grid.Column width={11}>
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
      </Transition>
    );
  }

}

export default PlayerDetail;

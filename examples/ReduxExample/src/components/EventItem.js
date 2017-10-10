import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';
import * as actions from '../actions';


class EventItem extends Component {
  // lifecycle method
  // runs just between Componenet rerenderer and View Updates
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  // this is a helper method
  renderDescription() {
      // destructure
      const { event, expanded } = this.props;
      const htmlContent = event.description;
      if (expanded) {
        return(
          <View>
            <CardSection>
              <Text style={{ flex: 1 }}> Starts: {event.starts_on}</Text>
            </CardSection>
            <CardSection>
              <Text style={{ flex: 1 }}> Ends: {event.ends_on}</Text>
            </CardSection>
            <CardSection>
              <Button onPress={() => Linking.openURL(event.url)}>
                Visit
              </Button>
            </CardSection>
          </View>
        );
      }
  }


  render() {
    const { titleStyle } = styles;
    const { id, name } = this.props.event;


    //console.log(this.props);
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectEvent(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {name}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  },
  a: {
    fontWeight: '300',
    //color: '#FF3366', // make links coloured pink
    color: 'green', // make links coloured pink
  }
};

// ownProps grabs state to use inside the const mapStateToProps below
// (ess state and ownProps are the same but ownProps is accessible state is not)
const mapStateToProps = (state, ownProps) => {
  // this is considered a precalculation before heading to line 9
  const expanded = state.selectedEventId === ownProps.event.id;
  return { expanded: expanded };
};

// the first argument is for mapStateToProps - if you do not Wish to do this
// ThenYou pass in null.
export default connect(mapStateToProps, actions)(EventItem);
// was export default connect(null, actions)(ListItem);
// The actions controlGoes to the actions controllerAnd turns onAll the actions
// The next thing does is It takes all the actionsAnd passes them to the above component
// As props

import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import EventItem from './EventItem';



class EventsScreen extends Component {
  static navigationOptions = {
    title: 'Upcoming Events',
  }
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (ri, r1) => r1 !== r2
    });
    // this is the meat
    this.dataSource = ds.cloneWithRows(this.props.events);
  }

  renderRow(event) {
    return <EventItem event={event} />;
  }


  render() {
    // console.log(this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// this is why we have access to "this.props.libraries" above
const mapStateToProps = state => {
  //console.log(state);
  return { events: state.events };
};

// 1st connect gets called then it calls whatever ins in the next curved brackets
export default connect(mapStateToProps)(EventsScreen);






//
// const EventsScreen = () => (
//   <View style={styles.container}>
//     <Text style={styles.welcome}>
//       Events Screen
//     </Text>
//   </View>
// );
//
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });
//
//
//
// EventsScreen.navigationOptions = {
//   title: 'Events',
// };
//
// export default EventsScreen;

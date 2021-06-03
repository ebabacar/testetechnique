import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import * as userActions from '../../../redux/actions/userAction';
import {Avatar, ListItem, FAB} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const ListUser = props => {
  const listUsers = useSelector(state => state.userList.userList);

  useEffect(() => {
    let {actions} = props;
    actions.getUserList(12);
  });

  return (
    <SafeAreaView>
      <ScrollView>
        {listUsers.map((el, i) => (
          <ListItem
            key={i}
            bottomDivider
            onPress={() => {
              props.navigation.navigate('userDetail', {
                user: el,
              });
            }}>
            <Avatar
              title={el.first_name}
              source={el.avatar && {uri: el.avatar}}
              avatarStyle={{borderRadius: 150}}
            />
            <ListItem.Content>
              <ListItem.Title>
                {el.first_name + ' ' + el.last_name}
              </ListItem.Title>
              <ListItem.Subtitle>{el.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    userList: state.userList,
  };
};

const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);

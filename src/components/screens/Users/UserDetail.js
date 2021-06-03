import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import * as userActions from '../../../redux/actions/userAction';
import {Avatar, ListItem} from 'react-native-elements';
import stylesless from '../dashboard/style';

const UserDetail = props => {
  useEffect(() => {});

  return (
    <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
      <Avatar
        avatarStyle={{borderRadius: 150}}
        size="xlarge"
        title={props.route.params.user.first_name}
        source={
          props.route.params.user.avatar && {
            uri: props.route.params.user.avatar,
          }
        }
      />
      <Text style={{marginTop: 30, fontSize: 20, textAlign: 'center'}}>
        {props.route.params.user.first_name +
          ' ' +
          props.route.params.user.last_name}
      </Text>
        <Text style={{marginTop: 30, fontSize: 15, textAlign: 'center'}}>
        {props.route.params.user.email}
      </Text>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

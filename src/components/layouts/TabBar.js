import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../../redux/actions/loginAction';
import {View} from 'react-native';

const TabBar = () => {
  return <View></View>;
};

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

const ActionCreators = Object.assign({}, loginActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../../redux/actions/authAction';
import {Text, View} from 'react-native';
import styles from '../../auth/login/style';
import stylesless from './style';

const Dashboard = props => {
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => null,
    });
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={stylesless.logoText}>Bienvenue dans le résultat du teste technique</Text>
    </View>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

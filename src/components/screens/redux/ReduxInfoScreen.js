import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../../redux/actions/authAction';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import JSONTree from 'react-native-json-tree';
import {Map} from 'immutable';

const ReduxInfoScreen = props => {
  const reduxInfo = useSelector(state => state);

  useEffect(() => {
    reduxInfo.immutable = Map({key: 'value'});
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <JSONTree data={reduxInfo} />
      </ScrollView>
    </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReduxInfoScreen);

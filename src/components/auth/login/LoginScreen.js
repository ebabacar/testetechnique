import React, {Component, useState} from 'react';
import axios from 'axios';

import styles from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import {Button as PretyButton} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../../redux/actions/authAction';

const LoginScreen = props => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    let {actions} = props;
    actions.login({
      email: email,
      password: password,
    });
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: password,
      })
      .then(response => {
        props.navigation.navigate('home');
      });
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Teste Technique</Text>
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              //value={this.state.email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              //value={this.state.password}
              onChangeText={password => setPassword(password)}
            />
            <PretyButton
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
            />
            <View style={{margin: 50}}>
              <Button
                title="Pas de compte? inscription"
                color="#3897f1"
                onPress={() => props.navigation.navigate('register')}
              />
            </View>
          </View>
          {/* <Snackbar
              visible={this.state.visibleSnackBar}
              onDismiss={this.onDismissSnackBar}
              theme={{colors: {surface: 'white', accent: 'red'}}}
              action={{
                label: 'Fermer',
                onPress: () => {},
              }}>
              Veuiilez vérifier les infromatiosn saisies.
            </Snackbar>*/}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

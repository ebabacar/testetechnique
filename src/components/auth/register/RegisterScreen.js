import React, {Component, useState} from 'react';

import styles from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import {Button as PretyButton} from 'react-native-elements';
import * as loginActions from '../../../redux/actions/authAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';

const RegisterScreen = props => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const onRegister = () => {
    let {actions} = props;
    actions.register({
      email: email,
      password: password,
    });
    axios
      .post('https://reqres.in/api/register', {
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
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
            />
            <PretyButton
              buttonStyle={styles.loginButton}
              onPress={() => onRegister()}
              title="Inscription"
            />
            <View style={{margin: 50}}>
              <Button
                title="Deja un compte? connexion"
                color="#3897f1"
                onPress={() => props.navigation.navigate('login')}
              />
            </View>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

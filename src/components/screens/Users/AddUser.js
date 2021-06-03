import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as userActions from '../../../redux/actions/userAction';
import {Avatar, Button as PretyButton, ListItem} from 'react-native-elements';
import styles from '../../auth/login/style';

const AddUser = props => {
  const [name, setName] = useState('');

  const [job, setJob] = useState('');


  useEffect(() => {});

  const onCreateUser = () => {
    if (name === '') {
      Alert.alert('Status', 'Veuillez renseigner les champs vides');
    } else if (job === '') {
      Alert.alert('Status', 'Veuillez renseigner les champs vides');
    } else {
      let {actions} = props;
      actions.createUser({name: name, job: job});
    }

  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Ajout</Text>
            <TextInput
              placeholder="Nom"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              //value={this.state.email}
              onChangeText={text => setName(text)}
            />
            <TextInput
              placeholder="Job"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              //value={this.state.password}
              onChangeText={text => setJob(text)}
            />
            <PretyButton
              buttonStyle={styles.loginButton}
              onPress={() => onCreateUser()}
              title="Valider"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return {
    listUserCreated: state.listUserCreated,
  };
};

const ActionCreators = Object.assign({}, userActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);

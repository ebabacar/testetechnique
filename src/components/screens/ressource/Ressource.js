import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SafeAreaView, ScrollView, View} from 'react-native';
import * as ressourceActions from '../../../redux/actions/ressourceAction';
import {ListItem, Avatar} from 'react-native-elements';

const Ressource = props => {
  const listRessource = useSelector(state => state.ressourceList.ressourceList);

  useEffect(() => {
    let {actions} = props;
    actions.getRessourceList(12);
  });

  return (
    <SafeAreaView>
      <ScrollView>
        {listRessource.map((el, i) => (
          <ListItem
            key={i}
            bottomDivider
            containerStyle={{backgroundColor: el.color}}>
            <ListItem.Content>
              <ListItem.Title>{el.name}</ListItem.Title>
              <ListItem.Subtitle>{el.year}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    ressourceList: state.ressourceList,
  };
};

const ActionCreators = Object.assign({}, ressourceActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ressource);

import * as React from 'react';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  parentView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'skyblue'
  },
  
  view1: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'blue',
  },
  
  view2: {
    flex: 1.5,
    alignItems: 'center',
    backgroundColor: 'purple'
  },

  view3: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'skyblue'
  },

  view3n1: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: "column",
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
  },

  view3n2: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: "column",
    backgroundColor: 'lightgreen',
    justifyContent: 'center'
  },

  view4: {
    flex: 2.5,
    backgroundColor: 'pink',
    alignItems:'center',
  },

  horizontalView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'red',
    justifyContent: 'center'
  },

  textInput: {
    margin:0,
    fontSize: 16,

  },

});

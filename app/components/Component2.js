/**
 * Created by Kiran on 22/7/17.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';


export default class Component2 extends Component {

    onPress(){
        console.log("area pressed");
    }

    onPress2(){
        console.log("area pressed 2");
    }

    render () {
        return(
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}> Hello Kiran!!</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight underlayColor="blue" style={styles.v1} onPress={this.onPress}>
                        <View >
                            <Text>View 1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.v2}
                        onPress={this.onPress2}
                        activeOpactiy='2'
                    >
                    <View >
                        <Text>View 2</Text>
                    </View>
                        </TouchableHighlight>
                    <View style={styles.v3}>
                        <Text style={styles.vText}>View 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView:{
        backgroundColor:'blue'
    },
    myText:{
        color:'white'
    },
    container:{
        flexDirection:'row',
        height:100
    },
    v1:{
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2:{
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    v3:{
        flex:1,
        backgroundColor:'black',
        padding:10,
    },
    vText: {
        color:'white'
    }

})

AppRegistry.registerComponent('Component2', () => Component2);


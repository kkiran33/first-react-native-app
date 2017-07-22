/**
 * Created by Kiran on 22/7/17.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';


export default class Component3 extends Component {

    constructor(){
        super();
        this.state ={
            textValue: 'Hello',
            switchValue: true
        }
    }

    onChangeText(value){
        this.setState({
          textValue:value
        })
    }

    onSubmit(){
        console.log("Input Submitted");
    }

    onSwitchChange(value){
        this.setState({
            switchValue: false
        })
    }

    render () {
        return(
            <View style={{ padding:50}}>
                <TextInput
                    placeholder="Enter Text"
                    value={this.state.textValue}
                    onChangeText={(value) => this.onChangeText(value)}
                    onSubmitEditing={this.onSubmit()}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                />
                <Text>{this.state.textValue}</Text>
                <Switch
                    value={this.state.switchValue}
                    onValueChang={(value) => this.onSwitchChange(value)}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Component3', () => Component3);


import React, {Component} from "react";
import { View, Text, Image } from "react-native";

class Dogs extends Component{
    render(){
        return (
            <View>
                <Text>{this.props.data.title}</Text>

            </View>
        )
    }
}

export default Dogs;
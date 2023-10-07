import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from "react";

export default function Screen2_a() {

    const [isEye, setEye] = useState(true);

    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.textLogin}>LOGIN</Text>
            </View>
            <View style={styles.textInput}>
                <View style={styles.textInputName}>
                    <Icon name="github" backgroundColor="#3b5998" size={30} style={{flex: '1'}}
                          ><TextInput placeholder={"Name"} style={{flex: '1', height: 40,
                        margin: 12,
                        padding: 10, width: "80%", outlineStyle: 'none'}}></TextInput></Icon>

                </View>
                <View style={styles.textInputName}>
                    <Icon name="lock" backgroundColor="#3b5998" size={30} style={{flex: '9'}}>
                        <TextInput secureTextEntry={isEye?true:false} placeholder={"Name"} style={{flex: '1', height: 40,
                        margin: 12,
                        padding: 10, width: "80%", outlineStyle: 'none'}}></TextInput>
                    </Icon>
                    <Button
                        onPress={()=>{
                            if(isEye) setEye(false);
                            else setEye(true);
                        }}
                        title={<Icon name="eye" size={30} color="black" style={{flex:"1", onclick: 1}}></Icon>} color='false'></Button>

                </View>
            </View>

            <View style={styles.buttonEnd}>
                <View style={{flex: 1, marginHorizontal: "30px"}}>
                    <Button
                    title="LOGIN"
                    color="black"
                    accessibilityLabel="Learn more about this purple button"
                    />
                    <Text style={{flex: 1, textAlign:"center", paddingTop: 30, fontWeight: "bold", fontSize: 20}}>
                        Forgot your password?
                    </Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        width: '100%'
    },
    textLogin:{
        flex: 1,
        marginVertical: 100,
        fontWeight: "bold",
        fontSize: 50

    },
    textInput:{
        flex: 1
    },
    textInputName:{
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        marginVertical: "20px",
        marginHorizontal:"10px",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "20px"

    },
    buttonEnd:{
        flex: 1
    },
    icon1:{
        flex: 1,
        margin: "5px",

    }
});

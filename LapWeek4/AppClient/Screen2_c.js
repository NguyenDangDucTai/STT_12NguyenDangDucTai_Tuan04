import {StyleSheet, Button, Text, TextInput, View, Image, CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from "react";

function makeid(length, isSelect1, isSelect2, isSelect3, isSelect4) {
    let result = '';
    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersIsSelect1 = isSelect1?'ABCDEFGHIJKLMNOPQRSTUVWXYZ':'';
    const charactersIsSelect2 = isSelect2?'abcdefghijklmnopqrstuvwxyz':'';
    const charactersIsSelect3 = isSelect3?'0123456789':'';
    const charactersIsSelect4 = isSelect4?'!@#$%^&*':'';
    const characters = charactersIsSelect1 + charactersIsSelect2 + charactersIsSelect3 + charactersIsSelect4;
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}


function Screen2_c() {
    const [lengthPassword, setLengthPassword] = useState()
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(true);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [password, setPassword] = useState('')

    return(
        <View style={{flex:1, backgroundColor:"#3399FF", paddingHorizontal: 15, paddingVertical: 20, width: "100%"}}>
            <View style={{flex:1, backgroundColor:"#003399", borderWidth: 1, borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5}}>
                <View style={{flex: 2}}>
                    <View style={{flex: 3, justifyContent:"center", alignItems:'center'}}>
                        <Text style={{color:'white', fontSize: 30, fontWeight:'bold'}}>
                            PASSWORD<br/>
                            GENERATOR
                        </Text>
                    </View>
                    <View style={{flex: 2, marginVertical: 5, marginHorizontal: 10, backgroundColor: '#330033', justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{color:'white', fontSize: 25}}>{password}</Text>
                    </View>
                </View>
                <View style={{flex: 3, paddingHorizontal: 5, paddingVertical: 5}}>
                    <View style={{flex: 1, paddingHorizontal: 2, paddingVertical: 2, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex: 3}}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color:'white'}}>Password length</Text>
                        </View>
                        <View style={{flex: 2, height: '60%', backgroundColor:'white'}}>
                            <TextInput onChangeText={setLengthPassword} value={lengthPassword} style={{flex:1 }}></TextInput>
                        </View>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 2, paddingVertical: 2, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex: 5}}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color:'white'}}>Include lower case letters</Text>
                        </View>
                        <View style={{flex: 1, height: '80%', justifyContent:'center', alignItems:'center'}}>
                            <CheckBox
                                value={isSelected1}
                                onValueChange={setSelection1}
                            ></CheckBox>
                        </View>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 2, paddingVertical: 2, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex: 5}}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color:'white'}}>Include upcase letters</Text>
                        </View>
                        <View style={{flex: 1, height: '80%', justifyContent:'center', alignItems:'center'}}>
                            <CheckBox
                                value={isSelected2}
                                onValueChange={setSelection2}
                            ></CheckBox>
                        </View>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 2, paddingVertical: 2, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex: 5}}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color:'white'}}>Include number</Text>
                        </View>
                        <View style={{flex: 1, height: '80%', justifyContent:'center', alignItems:'center'}}>
                            <CheckBox
                                value={isSelected3}
                                onValueChange={setSelection3}
                            ></CheckBox>
                        </View>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 2, paddingVertical: 2, flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex: 5}}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color:'white'}}>Include special symbol</Text>
                        </View>
                        <View style={{flex: 1, height: '80%', justifyContent:'center', alignItems:'center'}}>
                            <CheckBox
                                value={isSelected4}
                                onValueChange={setSelection4}
                            ></CheckBox>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, paddingHorizontal: 30, paddingVertical: 5, justifyContent:'center'}}>
                    <Button
                        onPress={()=>{
                            setPassword(makeid(parseInt(lengthPassword), isSelected1, isSelected2, isSelected3, isSelected4))
                        }}
                        title={<Text style={{fontSize: 20, fontWeight: 'bold'}}>GENERATE PASSWORD</Text>}></Button>
                </View>
            </View>
        </View>
    )
}


export default Screen2_c
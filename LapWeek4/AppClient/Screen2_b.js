import {StyleSheet, Button, Text, TextInput, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from "react";



function Screen2_b(){

    const [isButton1, setButton1] = useState(true)
    const [isButton2, setButton2] = useState(true)
    const [isButton3, setButton3] = useState(true)
    const [isButton4, setButton4] = useState(true)
    const [isButton5, setButton5] = useState(true)
    const [review, setReview] = useState('Cực kỳ hài lòng')

    return(
        <View style={{flex: 1, width: '100%'}}>
            <View style={style.view1}>
                <View style={{flex:3,}}>
                    <Image source={require('../Image/usb.jpg')}
                           style={{width:100, height:100}}></Image>
                </View>
                <View style={{flex:7}}>
                    <Text style={{fontSize: 17, fontWeight: "bold"}}>
                        USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooh
                    </Text>
                </View>
            </View>
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems:"center"}}>
                    <Text style={{fontSize: 25, fontWeight: "bold",}}>{review}</Text>
                </View>
                <View style={{flex: 2, flexDirection:"row", justifyContent:"space-between", paddingVertical: "20%", paddingHorizontal: "20%"}}>
                    <Button
                        onPress={()=>{
                            setButton1(true)
                            setButton2(false)
                            setButton3(false)
                            setButton4(false)
                            setButton5(false)
                            setReview('Rất không hài lòng')
                        }}
                        title={<Icon name="star" size={30} color={isButton1?"#33FF00":"silver"}></Icon>} color="white"></Button>
                    <Button
                        onPress={()=>{
                            setButton1(true)
                            setButton2(true)
                            setButton3(false)
                            setButton4(false)
                            setButton5(false)
                            setReview('Không hài lòng')
                        }}
                        title={<Icon name="star" size={30} color={isButton2?"#33FF00":"silver"}></Icon>} color="white"></Button>
                    <Button
                        onPress={()=>{
                            setButton1(true)
                            setButton2(true)
                            setButton3(true)
                            setButton4(false)
                            setButton5(false)
                            setReview('Bình thường')
                        }}
                        title={<Icon name="star" size={30} color={isButton3?"#33FF00":"silver"}></Icon>} color="white"></Button>
                    <Button
                        onPress={()=>{
                            setButton1(true)
                            setButton2(true)
                            setButton3(true)
                            setButton4(true)
                            setButton5(false)
                            setReview('Hài lòng')
                        }}
                        title={<Icon name="star" size={30} color={isButton4?"#33FF00":"silver"}></Icon>} color="white"></Button>
                    <Button
                        onPress={()=>{
                            setButton1(true)
                            setButton2(true)
                            setButton3(true)
                            setButton4(true)
                            setButton5(true)
                            setReview('Cực kỳ hài lòng')
                        }}
                        title={<Icon name="star" size={30} color={isButton5?"#33FF00":"silver"}></Icon>} color="white"></Button>
                </View>
            </View>
            <View style={{flex: 3, paddingVertical:"10px", paddingHorizontal:"10px"}}>
                <View style={{flex: 1, borderWidth: 1, borderColor: 'blue', marginVertical: 5}}>
                    {/*<Icon name="camera" size={35}></Icon>*/}
                    <Button
                        color="white"
                        title={<Icon name="camera" size={30} color="black"><Text>Hello</Text></Icon>}>
                    </Button>
                </View>
                <View style={{flex: 3, borderWidth: 1, borderColor: 'silver'}}>
                    <TextInput placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm" style={{height:"90%", textAlign:"justyfy"}}></TextInput>
                    <Text style={{textAlign: "right", fontWeight: "bold"}}>https://meet.google.com/nsj-ojwi-xpp</Text>
                </View>
                <View style={{flex: 1, marginVertical: 5}}>
                    <Button title="GỬI"></Button>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    view1:{
        // alignItems: "center",
        flex: 1,
        // marginHorizontal: 10,
        // marginVertical: 10,
        flexDirection:"row",
        paddingVertical: 10,
        paddingHorizontal: 10,
    }

})





export default Screen2_b
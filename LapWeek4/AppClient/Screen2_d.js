import {StyleSheet, Button, Text, TextInput, View, Image, CheckBox, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from "react";

function Screen2_d() {
    const [count, setCount] = useState(1);


    return(
        <View style={{flex:1, width: '100%', backgroundColor: "silver"}}>
            <View style={{flex:5, backgroundColor:'white', paddingVertical: 5, paddingHorizontal: 5}}>
                 <View style={{flex:4, flexDirection:"row"}}>
                    <View style={{flex:2}}>
                        <Image source={require("../Image/book.png")} style={{width: "100%", height:"100%"}}></Image>
                    </View>
                    <View style={{flex:5}}>
                        <View style={{flex:1}}><Text style={{fontWeight:"bold"}}>Nguyên hàm tích phân và ứng dụng</Text></View>
                        <View style={{flex:1}}><Text style={{fontWeight:"bold"}}>Cung cấp bởi Tiki Trading</Text></View>
                        <View style={{flex:1}}><Text style={{fontWeight:"bold", fontSize: 20, color:'red'}}>141.800 đ</Text></View>
                        <View style={{flex:1}}><Text style={{fontWeight:"bold", fontSize: 10, color:'silver', textDecorationLine:'line-through'}}>141.800 đ</Text></View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{flex:2, justifyContent:'space-around', alignItems:"center", flexDirection:'row'}}>
                                <Button title={<Icon name="minus"></Icon>}
                                onPress={() =>{
                                    if(count > 0){
                                        setCount(parseInt(count) -1)
                                    }
                                }}
                                ></Button>
                                <Text style={{fontWeight: "bold", fontSize: 20}}>{count}</Text>
                                <Button title={<Icon name="plus"></Icon>} onPress={() =>{
                                    if(count < 99){
                                        setCount(parseInt(count) + 1)
                                    }
                                }}

                                ></Button>
                            </View>
                            <View style={{flex:3, justifyContent:'center', alignItems:'flex-end'}}>
                                <Button title="Mua sau" color="green"></Button>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{flex:2, justifyContent:'center'}}>
                        <Text style={{fontWeight:"bold"}}>Mã giảm giá đã lưu</Text>
                    </View>
                    <View style={{flex:3, justifyContent:'center'}}>
                        <Text style={{fontWeight:"bold", color:"blue"}}>Xem tại đây</Text>
                    </View>
                </View>
                <View style={{flex:2, flexDirection:'row', paddingVertical: 10, paddingHorizontal: 10}}>
                    <View style={{flex:3, justifyContent:'center'}}>
                        <View style={{flex: 1, borderWidth: 1, marginVertical:'10%', flexDirection:'row', justifyContent:'center', alignItems:'center', paddingHorizontal: 10}}>
                            <Icon name="plus" size={20} style={{flex: 1, }}></Icon>
                            <Text style={{flex: 4, fontWeight: 'bold'}}>Nhập mã giảm giá</Text>
                        </View>
                    </View>
                    <View style={{flex:2, justifyContent:'center', marginLeft: 20}}>
                        <Button title="ÁP DỤNG"></Button>
                    </View>
                </View>
            </View>
            <View style={{flex:6}}>
                <View style={{flex:1, backgroundColor:'white', marginVertical: 10, flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{flex: 3, fontWeight: 'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
                    <Text style={{flex: 1, color:'blue', textDecorationLine:'underline'}}>Nhập tại đây?</Text>
                </View>
                <View style={{flex:1, backgroundColor:'white', flexDirection:'row', alignItems:'center', paddingHorizontal: 20}}>
                    <Text style={{flex: 2, textAlign: 'left', fontWeight: 'bold', fontSize: 20}}>Tạm tính</Text>
                    <Text style={{flex: 2, textAlign: 'right', fontWeight: 'bold', fontSize: 20, color:'red'}}>141.800 đ</Text>
                </View>
                <View style={{flex:2}}></View>
                <View style={{flex:2, backgroundColor:'white'}}>
                    <View style={{flex: 1, flexDirection:'row', paddingHorizontal: 10, alignItems:'center'}}>
                        <Text style={{flex: 2, textAlign: 'left', fontWeight: 'bold', fontSize: 20, color:'silver'}}>Thành tiền</Text>
                        <Text style={{flex: 2, textAlign: 'right', fontWeight: 'bold', fontSize: 20, color:'red'}}>141.800 đ</Text>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 15}}>
                        <Button title="TIẾN HÀNH ĐẶT HÀNG" color="red"></Button>
                    </View>
                </View>
            </View>
        </View>
    )

}

export default Screen2_d
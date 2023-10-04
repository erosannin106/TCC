import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ScrollView, FlatList} from 'react-native';

export default function TelaProdutos(props) {
   
    
    const produtos =
       [
            {
                id:"1",
                imagem: require("../assets/log2.png"),
                titulo: "tenis", 
                
            },
            {
                id:"2",
                imagem: require("../assets/favicon.png"),
                titulo: "luva",
                
            },
            {
                id:"3",
                imagem: require("../assets/adaptive-icon.png"),
                titulo: "camisa",
                
            },
            {
                id:"4",
                imagem: require("../assets/academia.jpg"),
                titulo: "whey",
                
            },
        ];
    
        return (
            <ScrollView>
                <View style={estilo.container2}>
                    <FlatList
                        data={produtos}
                        renderItem={({item})=>
                            <Card
                                imagem={item.imagem}
                                titulo={item.titulo}
                               
                            />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        );
    }
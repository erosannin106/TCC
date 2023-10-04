import React from 'react';
import { Text, View, Button } from 'react-native';



export default function TelaHome (props) {
  return (
    <View style={estilo.container}>

      <View onTouchStart={()=>{props.navigation.navigate('Rota')}}>
        <Text style={estilo.titulo} >
          Como navegar?
        </Text>
      </View>
      <Text style={estilo.texto}>
        Toque nas abas abaixo para navegar entre as telas. 
      </Text>
      <View style={estilo.botao}>
        <Button
          title='Abrir menu'
          onPress={()=>{props.navigation.openDrawer()}}
        />
      </View>

      <View style={estilo.botao}>
        <Button
          title='Descrição'
          onPress={()=>{props.navigation.navigate('Descrição')}}         
        />
      </View>

    </View>
  );
}
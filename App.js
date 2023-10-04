import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaBoasVindas from './Components/TelaBoasVindas';
import TelaChat from './Components/TelaChat';
import TelaDA from './Components/TelaDA';
import TelaHome from './Components/TelaHome';
import TelaLogin from './Components/TelaLogin';
import TelaProdutos from './Components/TelaProdutos';
import TelaSobre from './Components/TelaSobre';
import TelaTreino from './Components/TelaTreino';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name='BoasVindas' component={TelaBoasVindas}/>
      <Drawer.Screen name='Chat' component={TelaChat}/>
      <Drawer.Screen name='DA' component={TelaDA}/>
      <Drawer.Screen name='Home' component={TelaHome}/>
      <Drawer.Screen name='Login' component={TelaLogin}/>
      <Drawer.Screen name='Produtos' component={TelaProdutos}/>
      <Drawer.Screen name='Sobre' component={TelaSobre}/>
      <Drawer.Screen name='Treino' component={TelaTreino}/>
      </Drawer.Navigator>

   
    </NavigationContainer>
  );
}

//npm i -g npm Atualizar o NPM
// Email git config --global user.email ""
// Nome git config --global user.name ""
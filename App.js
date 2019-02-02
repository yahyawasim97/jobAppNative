import React,{Component} from 'react';
import {createBottomTabNavigator,createAppContainer,createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import Store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';


const MainNavigator = createBottomTabNavigator({
  welcome: {screen:WelcomeScreen},
  auth: {screen:AuthScreen},
  main:{
    screen:createBottomTabNavigator({
      map:{screen:MapScreen},
      deck:{screen:DeckScreen},
      review:{
          screen:createStackNavigator({
            review:{screen:ReviewScreen},
            settings:{screen:SettingScreen}
          })
      }
    })
  }  
},{
  defaultNavigationOptions: {
    tabBarVisible: false,
  },
  lazy:true
});
const AppContainer = createAppContainer(MainNavigator);
class App extends Component{
  render(){
    return(
      <Provider store={Store}>
        <AppContainer/>
      </Provider>
    )
  }
}

export default App;

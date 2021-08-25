import React,{Component} from 'react';
import {View} from 'react-native';
import Home from './pages/Home'

class App extends Component{
    render(){
        return(
            <View style={{flex:1}}>
              {/* 主页视图 */}
              <Home></Home>
            </View>
        )
    }
}

export default App
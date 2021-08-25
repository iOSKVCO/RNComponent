// In App.js in a new project

import * as React from 'react';
import { View, Text ,Button, StyleSheet , Alert,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HB_Button from './HB_Button'
import HB_ActivityIndicator from './HB_ActivityIndicator'
import HB_flatlist_simple from './HB_flatlist_simple'
import HB_flatlist_selectable from './HB_flatlist_selectable'
import HB_Image from './HB_Image'
import HB_ImageBackground from './HB_ImageBackground'
import HB_KeyboardAvoidingView from './HB_KeyboardAvoidingView'
import HB_Modal from './HB_Modal'
import HB_Pressable from './HB_Pressable'
import HB_RefreshControl from './HB_RefreshControl'
import HB_ScrollView from './HB_ScrollView'
import HB_SectionList from './HB_SectionList'
import HB_StatusBar from './HB_StatusBar'
import HB_Switch from './HB_Switch'
import HB_Text from './HB_Text'
import HB_TextInput from './HB_TextInput'
import HB_TouchableHighlight from './HB_TouchableHighlight'
import HB_TouchableOpacity from './HB_TouchableOpacity'
import HB_TouchableWithoutFeedback from './HB_TouchableWithoutFeedback'
import HB_View from './HB_View'
import HB_VirtualizedList from './HB_VirtualizedList'

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('ActivityIndicator示例')}>
          <View style={styles.separator}>
            <Button
                title="ActivityIndicator示例"
                onPress={() => navigation.navigate('ActivityIndicator示例')}
                color={'#FF6800'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Button示例')}>
          <View style={styles.separator}>
            <Button
                title="Button示例"
                onPress={() => navigation.navigate('Button示例')}
                color={'#FF6800'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('flatlist_simple示例')}>
          <View style={styles.separator}>
            <Button
                title="flatlist_simple示例"
                onPress={() => navigation.navigate('flatlist_simple示例')}
                color={'#FF6800'}
            />
          </View>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('flatlist_selectable示例')}>
      <View style={styles.separator}>
        <Button
            title="flatlist_selectable示例"
            onPress={() => navigation.navigate('flatlist_selectable示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Image示例')}>
      <View style={styles.separator}>
        <Button
            title="Image示例"
            onPress={() => navigation.navigate('Image示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ImageBackground示例')}>
      <View style={styles.separator}>
        <Button
            title="ImageBackground示例"
            onPress={() => navigation.navigate('ImageBackground示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('KeyboardAvoidingView示例')}>
      <View style={styles.separator}>
        <Button
            title="KeyboardAvoidingView示例"
            onPress={() => navigation.navigate('KeyboardAvoidingView示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Modal示例')}>
      <View style={styles.separator}>
        <Button
            title="Modal示例"
            onPress={() => navigation.navigate('Modal示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Pressable示例')}>
      <View style={styles.separator}>
        <Button
            title="Pressable示例"
            onPress={() => navigation.navigate('Pressable示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RefreshControl示例')}>
      <View style={styles.separator}>
        <Button
            title="RefreshControl示例"
            onPress={() => navigation.navigate('RefreshControl示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ScrollView示例')}>
      <View style={styles.separator}>
        <Button
            title="ScrollView示例"
            onPress={() => navigation.navigate('ScrollView示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SectionList示例')}>
      <View style={styles.separator}>
        <Button
            title="SectionList示例"
            onPress={() => navigation.navigate('SectionList示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('StatusBar示例')}>
      <View style={styles.separator}>
        <Button
            title="StatusBar示例"
            onPress={() => navigation.navigate('StatusBar示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Switch示例')}>
      <View style={styles.separator}>
        <Button
            title="Switch示例"
            onPress={() => navigation.navigate('Switch示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Text示例')}>
      <View style={styles.separator}>
        <Button
            title="Text示例"
            onPress={() => navigation.navigate('Text示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TextInput示例')}>
      <View style={styles.separator}>
        <Button
            title="TextInput示例"
            onPress={() => navigation.navigate('TextInput示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TouchableHighlight示例')}>
      <View style={styles.separator}>
        <Button
            title="TouchableHighlight示例"
            onPress={() => navigation.navigate('TouchableHighlight示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TouchableOpacity示例')}>
      <View style={styles.separator}>
        <Button
            title="TouchableOpacity示例"
            onPress={() => navigation.navigate('TouchableOpacity示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TouchableWithoutFeedback示例')}>
      <View style={styles.separator}>
        <Button
            title="TouchableWithoutFeedback示例"
            onPress={() => navigation.navigate('TouchableWithoutFeedback示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('View示例')}>
      <View style={styles.separator}>
        <Button
            title="View示例"
            onPress={() => navigation.navigate('View示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('VirtualizedList示例')}>
      <View style={styles.separator}>
        <Button
            title="VirtualizedList示例"
            onPress={() => navigation.navigate('VirtualizedList示例')}
            color={'#FF6800'}
        />
      </View>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="首页">
        <Stack.Screen name="首页" component={HomeScreen} options={HBnavigationstyle}/>
        <Stack.Screen name="Button示例" component={HB_Button} />
        <Stack.Screen name="ActivityIndicator示例" component={HB_ActivityIndicator} />
        <Stack.Screen name="flatlist_simple示例" component={HB_flatlist_simple} />
        <Stack.Screen name="flatlist_selectable示例" component={HB_flatlist_selectable} />
        <Stack.Screen name="Image示例" component={HB_Image} />
        <Stack.Screen name="ImageBackground示例" component={HB_ImageBackground} />
        <Stack.Screen name="KeyboardAvoidingView示例" component={HB_KeyboardAvoidingView} />
        <Stack.Screen name="Modal示例" component={HB_Modal} />
        <Stack.Screen name="Pressable示例" component={HB_Pressable} />
        <Stack.Screen name="RefreshControl示例" component={HB_RefreshControl} />
        <Stack.Screen name="ScrollView示例" component={HB_ScrollView} />
        <Stack.Screen name="SectionList示例" component={HB_SectionList} />
        <Stack.Screen name="StatusBar示例" component={HB_StatusBar} />
        <Stack.Screen name="Switch示例" component={HB_Switch} />
        <Stack.Screen name="Text示例" component={HB_Text} />
        <Stack.Screen name="TextInput示例" component={HB_TextInput} />
        <Stack.Screen name="TouchableHighlight示例" component={HB_TouchableHighlight} />
        <Stack.Screen name="TouchableOpacity示例" component={HB_TouchableOpacity} />
        <Stack.Screen name="TouchableWithoutFeedback示例" component={HB_TouchableWithoutFeedback} />
        <Stack.Screen name="View示例" component={HB_View} />
        <Stack.Screen name="VirtualizedList示例" component={HB_VirtualizedList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',//垂直居中
        //marginHorizontal: 16,
    },
    separator: { //含有分割线的view的样式
        flex: 1,
        paddingVertical:9,
        paddingBottom:9,
        paddingLeft:12,
        borderBottomColor: '#1E1E1E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        //backgroundColor: "#DDDDDD",
        flexDirection: 'row',//从左开始排列
        //justifyContent: 'space-between', //平分剩余空间
    },
    btn:{
        flex: 1,
        color:"#FF66E6"
    },
});

//导航栏样式
const HBnavigationstyle = {
  //title: 'My home',
  headerStyle: {
    backgroundColor: '#1F83FF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),
  headerLeft:() => (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),
}
export default Home;
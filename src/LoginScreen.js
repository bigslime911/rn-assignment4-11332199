import { View, Text , SafeAreaView, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Home from './HomeScreen';

const LoginIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.header}>
          Jobizz
          </Text>
          <Text style={styles.welcome}>
            Welcome Back 👋
          </Text>
          <Text style={styles.job}>
            Let’s log in. Apply to jobs!
          </Text>
        </View>
        <View>
          <TextInput
            placeholder='Name'
            style={styles.nameInput}
          />
        </View>
        <View>
          <TextInput
            placeholder='Email'
            value='test'
            style={styles.emailInput}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate(Home)}>
          <Text style={styles.login}>
            Log In 
          </Text>
        </TouchableOpacity>
        
        <View style={{flexDirection:"row", alignItems: 'center', justifyContent:'space-around', marginTop: 60}}>
          <View style={{ borderBottomColor: '#BDBEC2',width: 110,borderBottomWidth: 1,marginVertical: 10,}}></View>
          <View>
            <Text style={{color:'#BDBEC2'}}>
            Or continue with
            </Text>
          </View>
          <View style={{ borderBottomColor: '#BDBEC2',width: 110,borderBottomWidth:1,marginVertical: 10,}}></View>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity >
            <Image source={require('../assets/apple.png')}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={require('../assets/google.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/facbook.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.textbelow}>
          <Text style={styles.firstTextbelow}>Haven’t an account? <Text style={styles.secondTextbelow}>Register</Text> </Text>
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    marginHorizontal: 20,
  },
  title:{
    marginTop: 90,

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#356899'
  },
  welcome:{
    marginTop: 8,
    fontWeight: 'bold',
    color: '#0D0D26',
    fontSize: 24,
    letterSpacing: 1,
  },
  job:{
    color: '#BDBEC2',
    marginTop: 5,
    fontSize: 14

  },
  nameInput:{
    marginTop: 80,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
  },
  emailInput:{
    marginTop: 40,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
  },
  button :{
    backgroundColor:'#356899',
    marginTop:40,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  login:{
    color: '#fff',
    fontSize: 16,
  },
  icons:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
    marginTop: 50,
     
  },
  textbelow:{
    alignItems: 'center',
    marginTop: 30,
  },
  firstTextbelow :{
    color: '#BDBEC2'
  },
  secondTextbelow :{
    color: '#356899'
  }

  
  
})

export default LoginIn
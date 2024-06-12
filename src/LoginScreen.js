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
            style={styles.emailInput}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate(Home)}>
          <Text style={styles.login}>
            Log In 
          </Text>
        </TouchableOpacity>
        {/**I have to do this one before i submit the work */}
        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
          <View style={{ borderColor:'#AFB0B6', borderBottomWidth:2, width:'auto'}}></View>
          <View>
            <Text>
            Or continue with
            </Text>
          </View>
          <View></View>
        </View>
        <View>

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
    color:'#0D0D26',
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
  }
})

export default LoginIn
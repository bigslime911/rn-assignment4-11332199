import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, FlatList} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import FeatureJobsMockUp from './FeatureJobsMockUp';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileView}> 
          <View>
            <Text style={styles.profileName}>Eric Atsu</Text>
            <Text style={styles.profileMail}>eric@gmail.com</Text>
          </View>
          <View>
            <Image source={require('../assets/profilepic.png')}/>
          </View>
        </View>
        <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
          <View style={styles.Input} >
            <AntDesign name="search1" size={24} color="black" />
            <TextInput placeholder='Search' style={{marginLeft: 10, width: 260}} />
          </View>
          <View  style={{backgroundColor: 'red'}}>
            <Image source={require('../assets/filter5.png')}/>
          </View>
        </View>
        <View style={styles.featureSection}>
          <Text style={styles.jobs}>Featured Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View>
          <FlatList
            data={FeatureJobsMockUp}
            keyExtractor={(items)=> items.id.toString()}
            horizontal
            contentContainerStyle={{columnGap: 10}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>(
              <View style={{padding: 20, backgroundColor:(item.backgroundColor),borderRadius: 20, width:280,height:186,}}>
                <View style={{flexDirection: 'row', }}>
                  <View style={{backgroundColor: 'white',borderRadius: 5, marginRight: 10,  padding: 5}}>
                    <Image source={item.logo}/>
                  </View>
                  <View>
                    <Text style={{fontSize: 16, color: 'white'}}>{item.role}</Text>
                    <Text style={{fontSize: 14, color: 'white'}}>{item.company} </Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',justifyContent: "space-between", marginTop:85}}>
                  <Text style={{fontSize: 15, color: 'white'}}>{item.salary} </Text>
                  <Text style={{fontSize: 15, color: 'white'}} >{item.location}</Text>
                </View>
              </View>
            )}
          />
          
        </View>
        <View style={styles.featureSection}>
          <Text style={styles.jobs}>Popular Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
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
  profileView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
  },
  profileName :{
    fontWeight : 'bold',
    fontSize: 24,
    lineSpacing: 1,
  },
  profileMail : {
    color : '#95969D',
    letterSpacing : 1
  },
  Input:{
    marginTop:50,
    flexDirection: "row",
    backgroundColor: '#DDDDDD',
    padding:10,
    borderRadius:10,
  },
  featureSection:{
    marginTop : 45,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  jobs:{
    fontWeight: 'bold',
    fontSize: 16,

  },
  seeAll:{
    fontSize: 14,
    color: '#95969D',
  }

})
export default Home
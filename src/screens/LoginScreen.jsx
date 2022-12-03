import { useEffect, useState } from "react";
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";
import { asyncStorage } from "../helpers/asyncStorage";


export const LoginScreen = ({ navigation }) => {

  const [ hidePassword, setHidePassword] = useState(true)

  const { users, startLogin } = useAuthStore();

  const { saveUserStorage, getUserStorage } = asyncStorage();

  const { email, password, onChange, form } = useForm({
    email:'',
    password:''
  })

  useEffect(() => {
   
    getUserStorage() 
    // console.log('se ejecuto effect getUserStorage');

  }, [])

  useEffect(() => {

    if(users.length > 0) {   
        saveUserStorage(users)
        // console.log('se ejecuto effect saveUser', users);
    }

  }, [users])

  const onLogIn = () => {
    Keyboard.dismiss();

    if( Object.values( form ).includes('') ){ 
      Alert.alert(
        'Error', 
        'All fields are required',
        [{ text: 'I get it!'}]
      )
      return
    } 

   const user = users.find( u => u.email === form.email)


    if(user === undefined){

      Alert.alert(
        'Error', 
        'user does not exist',
        [{ text: 'I get it!'}]
      )
      return
    }

    if(user.email !== form.email){
        Alert.alert(
          'Error', 
          'The email or password is not correct',
          [{ text: 'I get it!'}]
        )
      return
    }

    if(user.password !== form.password){
        Alert.alert(
          'Error', 
          'The email or password is not correct',
          [{ text: 'I get it!'}]
        )
      return
    }
    

    startLogin(user)
    navigation.replace('BottomTab')

  }

  return (
    <View style={{ paddingHorizontal: 20}}>

        <View style={{ flexDirection: 'row'}}>

          <TouchableOpacity
            activeOpacity={ 0.8 }
            style={ styles.arrow }
            onPress={ () => navigation.navigate('RegisterScreen')}
          >
            <Icon 
              name="arrow-back-outline"
              size={25}
              color="#FFF"
                
            />
          </TouchableOpacity>

          <Text style={{ ...styles.title, fontSize: 24 }}>Login</Text>

        </View>

        <View style={{ height: 110, top: 50 }}>

          <Text style={{ color: '#9C9C9C', fontSize: 13, fontWeight: '400' }}>Log in with one of following options</Text>

          <View style={{ height: 55, top: 50, flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={ styles.network }>
                <Icon 
                  name="logo-apple" 
                  color="#FFF"
                  size={ 25 }
                />
            </View>

            <View style={ styles.network }>
                <Icon 
                  name= "logo-google"
                  color="#FFF"
                  size={ 25 }
                />
              
            </View>

          </View>
        </View>

        <View style={{ height: 230, top: 100 }}>

          <Text style={ styles.title }>Email</Text>

          <TextInput 
            placeholder="Enter your email"
            placeholderTextColor='#FFF'
            cursorColor='#FFF'
            style={ styles.textInput }
            onChangeText={ value => onChange( 'email', value ) }
            keyboardType="email-address"
            value={ email }
            autoCapitalize="none"
            autoComplete="off"
          />

          <Text style={ styles.title }>Password</Text>

          <TextInput 
            placeholder="Enter your password"
            placeholderTextColor='#FFF'
            cursorColor='#FFF'
            style={ styles.textInput }
            secureTextEntry={ hidePassword }
            onChangeText={ value => onChange( 'password', value ) }
            value={ password }
            autoCapitalize="none"
          />

          <Icon
            name={ hidePassword ? "eye-off-outline"  : "eye-outline" }
            size={ 20 }
            color="#959596"
            style={ styles.icon }
            onPress={ () => setHidePassword(!hidePassword) }
          />

        </View>
   
          {/* Btn gradient */}
          <TouchableOpacity 
            onPress={ onLogIn } 
            activeOpacity={ 0.8 }
            style={{ top: 120 }}
          >
            <LinearGradient 
              start={{x: 0, y: 0}} 
              end={{x: 1, y: 0}} 
              colors={['#67657c', '#ff8e54']}
              style={ styles.btn }
            >

              <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '700' }}>Log in</Text>

            </LinearGradient>
          </TouchableOpacity>

          <View style={ styles.containerFooter }>

            <Text style={{ ...styles.footer, color: '#9C9C9C' }}>Don't have an account?</Text>

            <TouchableOpacity 
                activeOpacity={ 0.8 }
                onPress={ () => navigation.navigate('RegisterScreen')}
              >

              <Text style={{ ...styles.footer, color: '#FFF', marginLeft: 3 }}>Sign up</Text>

            </TouchableOpacity>

          </View>

    </View>
  )
}

const styles = StyleSheet.create({
  network: {
    backgroundColor: '#7E7C84',
    width: 165,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    opacity: 0.6
  },
  textInput:{
    backgroundColor: '#7E7C84',
    paddingLeft: 20,
    borderRadius: 10,
    color: '#FFF',
    fontWeight: '400',
    marginBottom: 10,
    height: 45,
    opacity: 0.6,
    fontSize: 14
  },
  title: { 
    color: '#FFF', 
    marginVertical: 12, 
    fontWeight: '700',
    fontSize: 18 
  },
  icon:{
    bottom: 45,
    right: 12,
    zIndex: 5,
    position: 'absolute',
  },
  arrow: { 
    width: 30,
    top: 16
  },
  btn: {
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFooter:{
    top: 240,
    flexDirection: 'row',
    justifyContent:'center'
  },
  footer: {
    fontSize: 18,
    fontWeight: '400'
  }
})
import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";


export const LoginScreen = ({ navigation }) => {

  const [ hidePassword, setHidePassword] = useState(true)

  const { users, startLogin } = useAuthStore();


  const { email, password, onChange, form } = useForm({
    email:'',
    password:''
  })


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

  }

  return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
        >
          <ScrollView style={{ flex: 1 }}
            showsVerticalScrollIndicator={ false }
          >
              <View style={{ paddingHorizontal: 20, flex: 1 }}>

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

                  <View style={{ height: 120, top: 40 }}>

                    <Text style={{ color: '#9C9C9C', fontSize: 13, fontWeight: '400' }}>Log in with one of following options</Text>

                    <View style={{ height: 55, top: 40, flexDirection: 'row', justifyContent: 'space-between' }}>

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

                  <View style={{ height: 230, top: 90 }}>

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

                    <TouchableOpacity 
                      activeOpacity={ 0.7 }
                      style={ styles.icon } 
                      onPress={ () => setHidePassword(!hidePassword) }
                    >
                      <Icon
                        name={ hidePassword ? "eye-off-outline"  : "eye-outline" }
                        size={ 20 }
                        color="#959596"
                      />
                    </TouchableOpacity>

                  </View>
            
                    {/* Btn gradient */}
                    <TouchableOpacity 
                      onPress={ onLogIn } 
                      activeOpacity={ 0.8 }
                      style={{ top: 120, height: 60 }}
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
          </ScrollView>
        </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  network: {
    backgroundColor: '#7E7C84',
    width: 158,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    opacity: 0.6,
    height: 57,
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
    bottom: 35,
    right: 5,
    zIndex: 5,
    position: 'absolute',
    height: 40,
    justifyContent: 'center',
    width: 40,
    alignItems: 'center'
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
    top: 150,
    flexDirection: 'row',
    justifyContent:'center',
    height: 240,
  },
  footer: {
    fontSize: 18,
    fontWeight: '400'
  }
})
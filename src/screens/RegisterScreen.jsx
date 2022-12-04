import { useEffect, useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";
import { asyncStorage } from "../helpers/asyncStorage";

export const RegisterScreen = ({ navigation }) => {

  const [ hidePassword, setHidePassword] = useState(true);

  const { saveUserStorage, getUserStorage } = asyncStorage();

  const { users, startSaveUser, startLogin } = useAuthStore();

  const { name, email, password, onChange, form } = useForm({
    name:'',
    email:'',
    password:'',
    id: Date.now().toString(36)
  })

  useEffect(() => {
   
    getUserStorage() 

  }, [])

  useEffect(() => {

    if(users.length > 0) {   
        saveUserStorage(users)

    }

  }, [users])


  const onSignUp = () => {  
    
    Keyboard.dismiss();


    if( Object.values( form ).includes('') ){ 
      Alert.alert('Error', 
        'All fields are required',
        [{ text: 'I get it!'}]
        )

      return
    } 

    startSaveUser(form);

    navigation.replace('LoginScreen');
  }


  return (
    <KeyboardAvoidingView style={{ paddingHorizontal: 20, flex: 1 }}>

      <ScrollView
        showsVerticalScrollIndicator={ false }
      >

        <View style={{ flexDirection: 'row'}}>

          <TouchableOpacity
            activeOpacity={ 0.8 }
            style={ styles.arrow }
            onPress={ () => navigation.navigate('LoginScreen') }
          >
            <Icon 
              name="arrow-back-outline"
              size={25}
              color="#FFF"
                
            />
          </TouchableOpacity>

          <Text style={{ ...styles.title, fontSize: 24 }}>Sign up</Text>

        </View>

        <View style={{ height: 110, top: 50 }}>

          <Text style={{ color: '#9C9C9C', fontSize: 13, fontWeight: '400' }}>Sign up with one of following options</Text>

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

        {/* Formulario registro */}
        <View style={{ height: 390, top: 80 }}>

          <Text style={ styles.title }>Name</Text>

          <TextInput 
            placeholder="Enter your name"
            placeholderTextColor='#FFF'
            cursorColor='#FFF'
            style={ styles.textInput }
            onChangeText={ value => onChange( 'name', value ) }
            autoComplete='off'
            autoCapitalize="words"
            value={name}
          />

          <Text style={ styles.title }>Email</Text>

          <TextInput 
            placeholder="Enter your email"
            placeholderTextColor='#FFF'
            cursorColor='#FFF'
            style={ styles.textInput }
            onChangeText={ value => onChange( 'email', value ) }
            keyboardType="email-address"
            autoComplete='off'
            value={ email }
            autoCapitalize="none"
          />

          <Text style={ styles.title }>Password</Text>

          <TextInput 
            placeholder="Enter your password"
            placeholderTextColor='#FFF'
            cursorColor='#FFF'
            style={ styles.textInput }
            onChangeText={ value => onChange( 'password', value ) }
            secureTextEntry={ hidePassword }
            value={ password }
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
          <View style={{ height: 300 }}>

            <TouchableOpacity onPress={ onSignUp } activeOpacity={ 0.8 }>
              <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={['#67657c', '#ff8e54']}
                style={ styles.btn }
              >

              <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '700' }}>Create Account</Text>

              </LinearGradient>
            </TouchableOpacity>

            <View style={ styles.containerFooter }>
              <Text style={{ ...styles.footer, color: '#9C9C9C' }}>Already have an account?</Text>

              <TouchableOpacity 
                activeOpacity={ 0.8 }
                onPress={ () => navigation.navigate('LoginScreen')}
              >

                <Text style={{ ...styles.footer, color: '#FFF', marginLeft: 3 }}>Login</Text>

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
    bottom: 100,
    right: 12,
    zIndex: 5,
    position: 'absolute',
  },
  arrow: { 
    width: 30,
    top: 16
  },
  btn: {
    top: 50,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFooter:{
    top: 100,
    flexDirection: 'row',
    justifyContent:'center'
  },
  footer: {
    fontSize: 18,
    fontWeight: '400'
  }
})
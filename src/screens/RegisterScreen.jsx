import { useEffect, useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";


export const RegisterScreen = ({ navigation }) => {

  const [ hidePassword, setHidePassword] = useState(true);

 
  const { users, user, startSaveUser } = useAuthStore();

  const { name, email, password, onChange, form } = useForm({
    name:'',
    email:'',
    password:'',
    id: Date.now().toString(36)
  })


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

  }


  return (
    <KeyboardAvoidingView style={{  flex: 1 }}>

      <ScrollView style={{ flex: 1 }}
        showsVerticalScrollIndicator={ false }
      >
        <View style={{ paddingHorizontal: 20, flex: 1 }}>

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

            <View style={{ height: 120, top: 40 }}>

              <Text style={{ color: '#9C9C9C', fontSize: 13, fontWeight: '400' }}>Sign up with one of following options</Text>

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

            {/* Formulario registro */}
            <View style={{ height: 370, top: 60 }}>

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
              <View style={{ height: 300 }}>

                <TouchableOpacity onPress={ onSignUp } activeOpacity={ 0.8 }>
                  <LinearGradient 
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={['#67657c', '#ff8e54']}
                    style={{ ...styles.btn }}
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
    borderRadius: 7,
    opacity: 0.6,
    height: 57
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
    bottom: 70,
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
    top: 35,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFooter:{
    top: 75,
    flexDirection: 'row',
    justifyContent:'center'
  },
  footer: {
    fontSize: 18,
    fontWeight: '400'
  }
})
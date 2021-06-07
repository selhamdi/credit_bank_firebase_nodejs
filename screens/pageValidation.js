import React, { useState ,useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/shared/background'
import { theme } from '../core/theme'
import Header from '../components/shared/Header'
import BackButton from '../components/shared/BackButton'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import Button from '../components/shared/Button'

export default function PageValidation(props ) {

    const [value, setvalue] = useState('');
    const [value1, setvalue1] = useState('');
    const [value2, setvalue2] = useState('');


    useEffect(( ) => { 

   AsyncStorage.getItem('Montant')
.then((value)=>{
    setvalue(value);
     });
     AsyncStorage.getItem('DureeParMois')
     .then((value1)=>{
        setvalue1(value1);
         });

         AsyncStorage.getItem('mensualite')
         .then((value2)=>{
            setvalue2(value2);
        
        
             });

    },[]);

    function next(){
      props.navigation.navigate("Validation");

    }

  return (
    <Background >
          <BackButton goBack={props.goBack} />

          <Header>Welcome back.</Header>
   
     
                <Text style={{color: 'black'}}> montant crédit  : {value}</Text>
                <Text style={{color: 'black'}}>  durée de crédit : {value1}</Text>
                <Text style={{color: 'black'}}> mensualite :{value2}</Text>

                <Button mode="contained" onPress={next}  >
        valider 
      </Button>
          

      </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.text,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})


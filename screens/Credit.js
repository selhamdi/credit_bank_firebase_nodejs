import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import TextInput from '../components/shared/TextInput'
import Background from '../components/shared/background'
import { theme } from '../core/theme'
import Header from '../components/shared/Header'
import BackButton from '../components/shared/BackButton'
import Button from '../components/shared/Button'
import Slide from '../components/shared/SlideInput'
import Slider from '@react-native-community/slider';
import  AsyncStorage  from '@react-native-async-storage/async-storage';


export default function Credit( props ) {


    const [error, setError] = useState('');
    const [Montant, MontantValue] = useState();
    const [DureeParMois, DureeParMoisValue1] = useState();
    const [Res, setRes] = useState();


function calcAmortissment( VMontant,VDureeParMois){
    const div = (VMontant/VDureeParMois)
    const fraisDossier = (((0.71*VDureeParMois)*50)/VDureeParMois)
    var Ig = ((VMontant*VDureeParMois*0.2)/1200)
    var iParMois =(Ig/VDureeParMois)
    var mensualite = (( div+ iParMois + fraisDossier).toFixed(2))
          setRes(mensualite)

         

}
 const saveValue = () => {
     if(Montant){
         AsyncStorage.setItem('Montant', Montant.toString());
         AsyncStorage.setItem('DureeParMois', DureeParMois.toString());
         AsyncStorage.setItem('mensualite', Res.toString());


         console.log('save it');
         props.navigation.navigate("PageValidation"); 



     }
     else{
         console.log('nothing to save');
     }
 }



  

  return (
    <Background >
          <BackButton goBack={props.goBack} />

          <Header>Welcome back.</Header>
        {/*Text to show slider value*/}
        <Text style={{color: 'black'}}>
        montant crédit  : {Montant}
        </Text>

        {/*Slider with max, min, step and initial value*/}
        <Slider
    style={{width: 200, height: 40}}
    minimumValue={40000}
    maximumValue={100000}
    step={1}
    thumbTintColor="#DC143C"
    minimumTrackTintColor="#DC143C"
    maximumTrackTintColor="#000000"
    value={Montant}
          onValueChange={
              
            Montant =>{ MontantValue(Montant)
            
            }
            
          }
  />
   <Text style={{color: 'black'}}>
   durée de crédit : {DureeParMois}
        </Text>
<Slider
    style={{width: 200, height: 40}}
    minimumValue={4}
    maximumValue={100}
    step={1}
    thumbTintColor="#DC143C"

    minimumTrackTintColor="#DC143C"
    maximumTrackTintColor="#000000"
    value={DureeParMois}
          onValueChange={
            DureeParMois => {DureeParMoisValue1(DureeParMois)
            calcAmortissment(Montant,DureeParMois)

          }}
  />
      
     <Text style={{color: '#DC143C'}}>
           Value  : {Res}
        </Text>
      
      <Button mode="contained" onPress={saveValue}  >
        Next 
      </Button>
      {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
        {/* <Text>{test}</Text> */}
       
     
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

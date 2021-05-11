import React ,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,CheckBox } from 'react-native';
import firebase from "../firebase"



export default function  SignUpScreen (props) {
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [isChecked, setIsChecked] = useState(false);


  const submitCredit = async () => {

    const db = firebase.firestore();
    try {
      if (db) {
        if (nom === "" || prenom === "" || phone === "" || email === "") {
          Alert.alert("Please ", "Enter The Infos");
        } 
        else {
          db.collection('singUp').add({
            nom: nom,
            prenom:prenom,
            phone:phone ,
            email:email
          });
          props.navigation.navigate("Credit"); 

    }
  }
}
    catch (error) {
      console.log(error);
    }



    }


    return (
      
      <View style={styles.container}>
          <Image    style={{
            resizeMode: "cover",
            height: 100,
            width: 100,
            marginLeft:-200,
          backgroundColor:'white'         }} source={require("../assets/icon.png")}
           />
 
        <Text style={styles.titre} onPress={()=>history.push("/")}>Mes coordonnées</Text>
        <Text style={styles.title} onPress={()=>history.push("/")}> renseigner les champs ci-dessous et passer a l'etape suivante</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Nom..." 
            placeholderTextColor="#003f5c"
            value={nom}
            onChangeText={setnom}
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Prenom..." 
            placeholderTextColor="#003f5c"
            value={prenom}
            onChangeText={setprenom}
           />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Phone.." 
            placeholderTextColor="#003f5c"
            value={phone}
            onChangeText={setphone}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={setemail}
            />
        </View>
       
        <View style={styles.terms}>
          <CheckBox value={isChecked} onValueChange={setIsChecked} />
          <Text style={styles.termsText}>
            J'AI LU ET ACCEPTÉ LES CONDITIONS GÉNÉRALES D'UTILISATION ET LES
            MENTIONS LÉGALES NOTAMMENT LA MENTION RELATIVE AUX DONNÉES À
            CARACTÈRE PERSONNEL
          </Text>
        </View>
   
        <TouchableOpacity style={styles.loginBtn}
                onPress={submitCredit}>
          <Text disabled={!isChecked} style={styles.loginText} >Simuler </Text>
        </TouchableOpacity>
      

  
      </View>
    );
}

const styles = StyleSheet.create({
  terms: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 60,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  termsText: {
    fontSize: 8,
    width: "75%",
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft:-30
  },
  titre:{
    fontWeight:"bold",
    fontSize:40,
    color:"#fb5b5a",
    marginRight:-40
  },
  title:{
    fontWeight:"normal",
    fontSize:15,
    color:"grey",
    marginLeft:25
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
  }
});
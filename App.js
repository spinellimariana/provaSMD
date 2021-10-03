import * as React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
import Constants from 'expo-constants';

//função que faz o fetch
async function executeGet(url, jsonState) {
  await fetch(url)
    .then(response => {
      if (response.status === 200) {
        //console.log('sucesso');
        response.json().then(function (message) {

          //console.log(result);
          jsonState(message)

        });
      } else {
        throw new Error('Erro ao consumir a API!');
      }
    })
} //fim do execute get

export default function App() {

  const [jsonData, setJsonData] = React.useState({})
  
  //useEffect para não ficar atualizando sem parar
  React.useEffect(() => {
    executeGet("https://dog.ceo/api/breeds/image/random", setJsonData);
  }, [])

  var dogs = jsonData.message
  //colocando a informação numa variável.

  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>RANDOM DOGS</Text>
      <Image style={styles.tinyLogo} source={{ uri: dogs }} //retornando a info armazenada na variável para a tela
      />
      <Text style={styles.texto}>Somos uma fonte inesgotável de imagens de cachorros fofinhos!
        Aperte o botão azul para mudar!</Text>

      <Button 
        title="TROCA!"
        onPress={() => executeGet("https://dog.ceo/api/breeds/image/random", setJsonData)}
        //cada vez que aberta o botão executa o fetch novamente
      />

    </View>
  )
} // fim do metodo de consumir a api


//FOLHA DE ESTILOS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#E6E3E8',
    padding: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 100,
  },
  titulo: {
    fontFamily: 'sans-serif',
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  texto: {
    fontFamily: 'sans-serif',
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',

  }
});
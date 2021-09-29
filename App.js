//import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

//import dos arquivos
import api from './src/services/api';
import Dogs from './src/Dogs';

class App extends Component{
  constructor (props){
    super(props);

    //Estado: lugar onde vamos armazenar os dogs para exibir na tela
    this.state = {
      dogs: []
    
    }
  }

  //declarando componente
  async componentDidMount(){
    //const response = await api.get('breeds/image/random') //16.41  //qual vai ser o link
    //const response = await api.get('r-api/?api=filmes')
    const response = await api.get('products')

    this.setState({
      dogs: response.data
    })
  }

  render(){
    return(
      <View style={styles.container}>
          <FlatList
            data={this.state.dogs}
            keyExtractor = {item => item.id.toString} //qual vai ser meu keyStractor?
            renderItem={({item}) => <Dogs data={item} /> }
          />
      </View>
    )
  }


}//fecha a classe

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },

  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
});


/*import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';

async function executeGet(url,jsonState){
    //get síncrono com o uso do fetch
    await fetch(url)
    .then(response => {
          if (response.status === 200) {
            //console.log('sucesso');
            response.json().then(function(result){ 

              //console.log(result);
              jsonState(result)

              });
          } else {
            throw new Error('Erro ao consumir a API!');
          }
      })
      .then(response => {
        //console.debug(response);
      }).catch(error => {
        console.error(error);
      });
  }



const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )
//3) deixar compatível com os itens 1 e 2
const Pessoa = ({nome,email,link,price}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={price}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
        <Text style={styles.parag}>{email}</Text>
        
      </Pressable>
    </View>
    )
}



export default function App() {

  const [jsonData,setJsonData] = React.useState({})
  //1) trocar a url abaixo
  executeGet("https://fakestoreapi.com/products",setJsonData)

  //função que renderiza cada item do FlatList
  function meuItem({item}){
    return(
      <Pessoa nome={item.title} 
              link={item.image}
              email={item.description}
              price={item.price}
      />
    )
  }
  
  //2) depois de trocar a url mexer aqui no pessoa deixando compatível (olhar acima o passo 3)
  return (

    <View style={styles.container}>

      <FlatList
        data={jsonData}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

  //4) arrumar aqui para os estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    color: "white"
  },
    parag: {
    margin: 12,
    padding: 12,
    fontSize: 12,
    //color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: 'black'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});*/

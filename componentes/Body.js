import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Image } from 'react-native';
import styleExterno from "../styles.js";
import styles from "../styles.js";

const Body = () => {

    return (

    <View>

        <View>

                <Image style={style.imageExemple} source={require('images/neuro.png')}>
                </Image>

 
        </View>   

        <View style={style.textStyle}>
            <Text> O Céu sobre o porto tinha cor de televisão num canal fora do ar. Considerada a obra precursora do movimento cyberpunk e um clássico da ficção científica moderna, Neuromancer conta a história de Case, um cowboy do ciberespaço e hacker da matrix. Como punição por tentar enganar os patrões, seu sistema nervoso foi contaminado por uma toxina que o impede de entrar no mundo virtual. Agora, ele vaga pelos subúrbios de Tóquio, cometendo pequenos crimes para sobreviver, e acaba se envolvendo em uma jornada que mudará para sempre o mundo e a percepção da realidade. Evoluindo de Blade Runner e antecipando Matrix, Neuromancer é o romance de estreia de William Gibson. Esta obra distópica, publicada em 1984, antevê, de modo muito preciso, vários aspectos fundamentais da sociedade atual e de sua relação com a tecnologia. Foi o primeiro livro a ganhar a chamada “tríplice coroa da ficção científica”: os prestigiados prêmios Hugo, Nebula e Philip K. Dick.</Text>
        </View>

    </View>     
    );

}

const style = StyleSheet.create({

    textStyle: { 
        padding: 30,
        textAlign: 'justify',
        flex: 1
        
    },

    imageExemple: {
        marginTop: 60,
        marginBottom: 30,
        marginLeft: 100,
        width: 200,
        height: 300,
        
    },

    
    imageExemple2: {
        width: 50,
        height: 50,
  
    },





});


export default Body;
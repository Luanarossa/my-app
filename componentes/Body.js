import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import styleExterno from "../styles.js";
import styles from "../styles.js";

const Body = (props) =>  {


    return (

    <View>

        <View>

                <Image style={style.imageExemple} source={require('images/neuro.png')}>
                </Image>
 
        </View>   

        <View style={style.textStyle}>
            <Text style={style.text}>O Céu sobre o porto tinha cor de televisão num canal fora do ar. Considerada a obra precursora do movimento cyberpunk e um clássico da ficção científica moderna, Neuromancer conta a história de Case, um cowboy do ciberespaço e hacker da matrix. Como punição por tentar enganar os patrões, seu sistema nervoso foi contaminado por uma toxina que o impede de entrar no mundo virtual. Agora, ele vaga pelos subúrbios de Tóquio, cometendo pequenos crimes para sobreviver, e acaba se envolvendo em uma jornada que mudará para sempre o mundo e a percepção da realidade. Evoluindo de Blade Runner e antecipando Matrix, Neuromancer é o romance de estreia de William Gibson. Esta obra distópica, publicada em 1984, antevê, de modo muito preciso, vários aspectos fundamentais da sociedade atual e de sua relação com a tecnologia. Foi o primeiro livro a ganhar a chamada “tríplice coroa da ficção científica”: os prestigiados prêmios Hugo, Nebula e Philip K. Dick.</Text>
        </View>

        <View>
            <Button title="Clique para saber mais!" 
        onPress={() => Alert.alert('...')}></Button>
        </View>


        <View>

        <Image style={style.imageExemple2} source={require('images/meianoite.jpg')}> 
        </Image>

        </View>

        <View style={style.textStyle}>
            <Text style={style.text}>Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela vive se perguntando o que poderia ter acontecido caso tivesse vivido de maneira diferente. Após ser demitida e seu gato ser atropelado, Nora vê pouco sentido em sua existência e decide colocar um ponto final em tudo. Porém, quando se vê na Biblioteca da Meia-Noite, Nora ganha uma oportunidade única de viver todas as vidas que poderia ter vivido.
            </Text>

            <Text style={style.text}>Neste lugar entre a vida e a morte, e graças à ajuda de uma velha amiga, Nora pode, finalmente, se mudar para a Austrália, reatar relacionamentos antigos – ou começar outros –, ser uma estrela do rock, uma glaciologista, uma nadadora olímpica... enfim, as opções são infinitas. Mas será que alguma dessas outras vidas é realmente melhor do que a que ela já tem?</Text>

            <Text style={style.text}>Em A Biblioteca da Meia-Noite, Nora Seed se vê exatamente na situação pela qual todos gostaríamos de poder passar: voltar no tempo e desfazer algo de que nos arrependemos. Diante dessa possibilidade, Nora faz um mergulho interior viajando pelos livros da Biblioteca da Meia-Noite até entender o que é verdadeiramente importante na vida e o que faz, de fato, com que ela valha a pena ser vivida.</Text>
        </View>

        <View style={style.botao}>
            <Button title="Clique para saber mais!" 
            onPress={() => Alert.alert('Clicado...')}></Button>
        </View>



    </View>    


    );

}


const style = StyleSheet.create({

    text: {
        textAlign: 'justify',
        fontSize: 15,
        margin: 5,
    },


    textStyle: { 
        padding: 30,
        flex: 1,
    },

    imageExemple: {
        marginTop: 60,
        marginBottom: 30,
        marginLeft: 100,
        width: 200,
        height: 300,
        flex: 1,
        flexDirection: 'row'
    },

    
    imageExemple2: {
        marginTop: 40,
        marginBottom: 30,
        marginLeft: 100,
        width: 200,
        height: 300,
        flex: 1,
        flexDirection: 'row'
    },



});

export default Body;
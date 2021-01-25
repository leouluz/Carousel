import React, { Component } from 'react'
import { ScrollView,Text, View, StyleSheet, Dimensions, Image } from 'react-native'

const { width } = Dimensions.get("window");
const  height  = width * 0.6; //60%

const infos = {
    "images" : [
        "https://www.tuacasa.com.br/wp-content/uploads/2020/06/area-de-lazer-pequena-1-730x862.jpg",
        "https://i.pinimg.com/736x/f1/c0/32/f1c03214d150a4b8ad0462881d0c9735.jpg",
        "https://imagens-revista.vivadecora.com.br/uploads/2019/04/Deck-ao-redor-da-piscina.-Projeto-de-Otoni-Arquitetura.jpg",
    ]
}



export default class Carousel extends Component {
  state = {
    active: 0
  }
  change = ({nativeEvent}) => {
    const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    if(slide !== this.state.active){
      this.setState({active: slide})
    } 
  }

  render() {
    return (
      <View style={styles.container}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={this.change}
            style={styles.scroll}
          >
            {
              infos.images.map((image, index) => (
                  <Image
                  key={index}
                  source={{uri:image}}
                  style={styles.image}
                  />
              ))
            }
          </ScrollView>
          <View style={styles.pagination}>
            {
              infos.images.map((i, k) => (
                <Text
                  key={k}
                  style={ k == this.state.active ? styles.pagingActiveText : styles.pagingText}
                >⬤</Text>
              ))
            }
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        width,
        height
    },
    scroll:{
        width,
        height,
    },
    image:{
        width,
        height,
        resizeMode: 'cover'
    },
    pagination:{
      flexDirection: 'row',
      position: 'absolute',
      bottom:0,
      alignSelf: 'center',
    },
    pagingActiveText:{
      color:'#fff',
      margin:3,
      fontSize:(width/30)
    },
    pagingText:{
      color:'#888',
      margin:3,
      fontSize:(width/30)
    }


})

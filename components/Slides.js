import React,{Component} from 'react';
import {ScrollView,Text,View,Dimensions} from 'react-native';
import { Button } from 'react-native-elements';

const WIDTH = Dimensions.get('window').width;

class Slides extends Component{
    renderLastSlide(index){
        if(index === this.props.data.length -1){
            return(
                <Button
                    containerStyle={styles.buttonStyle}
                    title="Onwards!"
                    raised
                    onPress={this.props.onComplete}
                />
            );
        }
    }
    renderSlides=()=>{
        return this.props.data.map((slide,index)=>{
            return(
                <View key={slide.text} style={[styles.slide,{backgroundColor:slide.color}]}>
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }
    render(){
        return(
        <ScrollView
            style={{flex:1}}
            horizontal
            pagingEnabled
        >
            {this.renderSlides()}
        </ScrollView>);
    }
}

const styles={
    slide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:WIDTH
    },
    slideText:{
        fontSize:30,
        textAlign:'center',
        color:'white'
    },
    buttonStyle:{
        backgroundColor:'#0288D1',
        marginTop:15
    }
};
export default Slides;
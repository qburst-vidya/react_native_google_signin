import { StyleSheet } from "react-native/";

const style = StyleSheet.create
({
    button: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        padding:12,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:6,
        backgroundColor:'#fff'
    },
    text:{
        marginLeft:10,
        fontSize:16,
        color:'#000'
    },
});

export default style;
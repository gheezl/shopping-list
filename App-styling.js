import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "black",
    },

    text: {
        color: "blue",
        fontSize: 25,
    },

    input: {
        marginTop: 15,
        height: 35,
        width: 275,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 100 / 2,
        textAlign: "center",
        fontSize: 15,
    },

    button: {
        padding: 5,
        marginTop: 15,
        height: 35,
        width: 275,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 100 / 2,
        textAlign: "center",
        fontSize: 15,
    }
});


export default appStyles;
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    game: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#181818',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    question: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    answer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    text: {
      margin: 35,
      color: "white",
      fontSize: 25
    },
    input: {
      color: "white",
      fontSize: 20,
      marginBottom: 25
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'rgb(188, 183, 174)',
      padding: 8,
      marginTop: 10
    },
    buttonText: {
      color: "rgb(188, 183, 174)",
      fontSize: 15,
    },
    CorrectText: {
      color: "green",
      fontSize: 30,
    },
    FalseText: {
      color: "red",
      fontSize: 30,
    }
});
import { StyleSheet } from 'react-native';

const NewsCadsStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    element: {
        backgroundColor: '#222222',
    },
    title: {
        color: '#D9D9D9',
    }, 
    divider: {
        borderBottomColor: '#D9D9D9',
    },
    fonts: {
        marginBottom: 8,
        color: '#D9D9D9',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    name: {
        color: '#D9D9D9',
        fontSize: 16,
        marginTop: 5,
    },
});

export default NewsCadsStyles;
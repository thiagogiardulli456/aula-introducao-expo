import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        flex: 1,
        alingItems: 'center',
        borderRadius: 20,
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: 'deepskyblue',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBotton: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlingVertical: 'center',
        borderRadius: 20,
    },
    texto: {
        width: '80%',
        resizeMode: 'contain',
    },
});

export default styles;
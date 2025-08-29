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
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
    },
    txt: {
        fontSize: RFPercentage(2.2),
    },
    txtnsei: {
        color: '#070',
        fontSize: RFPercentage(2.1),
        borderColor: 'yellow',
    },
    txtlulinha: {
        color: 'red',
        fontSize: RFPercentage(3.5),
        borderColor: 'yellow',
    },
});

export default styles;
import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    topWave: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 400,
    },

    bottomWave: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 400,
    },

    logo: {
        width: 280,
        height: 320,
        marginBottom: -60,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#F28C28',
        marginBottom: 30,
    },

    inputContainer: {
        width: '100%',
        gap: 12,
        marginBottom: 5,
    },

    loginButton: {
        width: '100%',
        backgroundColor: '#FF8C00',
        borderRadius: 10,
        
    },

    registerText: {
        marginTop: 20,
        color: '#666',
        marginBottom: 130,
        
    },

    registerLink: {
        color: '#F28C28',
        fontWeight: 'bold',
    },
});
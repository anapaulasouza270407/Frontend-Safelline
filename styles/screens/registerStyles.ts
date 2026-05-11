import { StyleSheet } from 'react-native';

export const registerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },

    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'center',
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
            width: 200,
            height: 200,
            marginBottom: -30,
            marginTop: -44,
        },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#F28C28',
        marginBottom: 15,
    },

    inputContainer: {
        width: '100%',
        gap: 12,
        marginBottom: 15,
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },

    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 2,
        borderColor: '#F28C28',
        marginRight: 8,
    },

    checkboxChecked: {
        backgroundColor: '#F28C28',
    },

    checkboxText: {
        fontSize: 13,
        color: '#666',
    },

    registerButton: {
        width: '100%',
        backgroundColor: '#FF8C00',
        borderRadius: 10,
    },

    loginText: {
        marginTop: 15,
        color: '#666',
    },

    loginLink: {
        color: '#F28C28',
        fontWeight: 'bold',
    },
});
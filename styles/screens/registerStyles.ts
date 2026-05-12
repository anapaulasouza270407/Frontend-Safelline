import { StyleSheet } from 'react-native';

export const registerStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        zIndex: 2,
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
        width: 190,
        height: 190,
        marginBottom: -20,
        marginTop: -30,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F28C28',
        marginBottom: 22,
    },

    inputContainer: {
        width: '100%',
        gap: 12,
        marginBottom: 18,
    },

    /* INPUT PADRÃO */
    inputWrapper: {
        width: '100%',
        height: 55,

        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#FFF',

        /* 🔥 mesma borda dos outros */
        borderWidth: 2,
        borderColor: '#F28C28',

        borderRadius: 14,

        paddingHorizontal: 16,
    },

    inputIcon: {
        width: 22,
        height: 22,

        resizeMode: 'contain',

        marginRight: 10,
    },

    input: {
        flex: 1,

        fontSize: 15,
        color: '#333',
    },

    checkboxContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 22,
        paddingLeft: 3,
    },
    checkIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',

    position: 'absolute',

    top: -3,
    left: 3,
},

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#F28C28',
        borderRadius: 6,
        marginRight: 10,
        backgroundColor: '#FFF',
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
        backgroundColor: '#F28C28',
        borderRadius: 14,
        height: 55,

        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#F28C28',
        shadowOffset: {
            width: 0,
            height: 4,
        },

        shadowOpacity: 0.25,
        shadowRadius: 4,

        elevation: 5,
    },

    loginText: {
        marginTop: 8,
        marginBottom: 12,
        color: '#666',
        fontSize: 14,
    },

    loginLink: {
        color: '#F28C28',
        fontWeight: 'bold',
    },

});
import { StyleSheet } from "react-native";

export const WelcomeStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    content: {
        zIndex: 1,
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 25,
    },

    topWave: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
    height: 400,
},

bottomWave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 0,
    height: 400,
},

    logo: {
        width: 220,
        height: 220,
        marginBottom: 10,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FF7A00",
        textAlign: "center",
        marginBottom: 10,
    },

    description: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginBottom: 25,
        paddingHorizontal: 10,
    },

    buttons: {
        width: "100%",
        gap: 12,
        alignItems: "center",
    },

    primaryButton: {
        backgroundColor: "#FF7A00",
        borderRadius: 12,
        width: "100%",
    },

    secondaryButton: {
        borderColor: "#FF7A00",
        borderWidth: 1.5,
        borderRadius: 12,
        width: "100%",
    },

    textInfo: {
        fontSize: 12,
        color: "#888",
        textAlign: "center",
        marginVertical: 5,
    },
});
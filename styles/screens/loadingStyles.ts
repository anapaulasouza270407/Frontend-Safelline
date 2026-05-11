import { StyleSheet } from "react-native";

export const loadingStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fefefe",
        justifyContent: "center",
        alignItems: "center",
    },

    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },

    backButton: {
        position: "absolute",
        top: 55,
        left: 18,
        zIndex: 10,
    },

    backImage: {
        width: 28,
        height: 42,
        resizeMode: "contain",
    },

    logoVideo: {
        width: 320,
        height: 320,
        marginBottom: -40,
    },

    loadingText: {
        fontFamily: "OpenSans_700Bold",
        color: "#BC6948",
        fontWeight: "800",
        marginTop: -20,
        letterSpacing: 0.5,
    },
    topWave: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: 400,
    },

    bottomWave: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 400,
    },

});
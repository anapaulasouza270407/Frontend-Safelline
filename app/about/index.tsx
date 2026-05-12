import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { aboutStyles as styles } from '../../styles/screens/aboutStyles';

export default function About() {
    const router = useRouter();

    return (
        <View style={styles.container}>

            {/* TOPO LARANJA */}
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image
                        source={require('../../assets/setaE.png')}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
            </View>

            {/* 🔥 LOGO FIXA (NÃO DESCE MAIS) */}
            <View style={styles.logoWrapper}>
                <Image
                    source={require('../../assets/logoS.png')}
                    style={styles.logo}
                />
            </View>

            {/* CONTEÚDO SCROLLÁVEL (SÓ UMA VEZ!) */}
            <ScrollView contentContainerStyle={styles.content}>

                <Text style={styles.description}>
                    O Safelline é um aplicativo mobile de chat privado desenvolvido com o objetivo de conectar pessoas que compartilham diversos interesses em comum, de forma segura, prática e imediata.
                </Text>

                <Text style={styles.description}>
                    A proposta do projeto é criar uma plataforma moderna e intuitiva, onde usuários de qualquer lugar do mundo possam interagir livremente sobre temas de sua preferência, respeitando sempre a privacidade e a confidencialidade das conversas.
                </Text>
                
                   <Text style={styles.subtitle}>
                    🦊Projeto de curso💫
                </Text>
                <Text style={styles.description}>
                    Versão 1.0
                </Text>

            </ScrollView>

            {/* BORDA / ONDA FIXA NO FUNDO */}
            <Image
                source={require('../../assets/bordaB.png')}
                style={styles.wave}
            />

        </View>
    );
}
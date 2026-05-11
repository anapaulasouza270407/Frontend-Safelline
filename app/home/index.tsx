import { Text, View, Image } from 'react-native';
import { Button } from '../../components/Button';
import { useRouter } from 'expo-router';
// import {useAuth} from '../../hooks/useAuth'
import { homeStyles as styles } from '../../styles/screens/homeStyles';
import React from 'react';

export default function Home() {
    const router = useRouter();
    // const { user, Logout } = useAuth();
    const user = { username: 'Jeremias' }; //remover apo implementacao do auth
    const handleStartChat = () => {
        router.push('/chat/select');
    }
    const handleAbout = () => {
        router.push('/about');
    }
    const handleLogout = () => {
        //await Logout();
        router.replace('/auth/login'); // remover após implementacao do logout
    }
    return (
        <View style={styles.container}>
            {/** cabeçalho*/}
            <View style={styles.header}>
                <Image source={require('../../assets/logoS.png')}
                    resizeMode='contain'
                />
                <Text style={styles.welcome}>Bem-vindo, {user?.username || 'Stranger'}</Text>
                <Text style={styles.SubTitle}> Pronto para se conectar com novas pessoas?</Text>
            </View>
            {/**centro da pagina*/}
            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Safelline</Text>
                    <Text style={styles.cardDescription}>Conversa com pessoas ao redor do mundo e encontre pessoas que gostam dos mesmos interesses que os seus!!!</Text>
                </View>

                {/**sessão central do centro da pagina*/}
                <View style={styles.feature}>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>🦊</Text>
                        <Text style={styles.featureText}> Explore o mundo através do Safelline</Text>
                    </View>

                    <View>
                        <Text style={styles.featureIcon}>💫</Text>
                        <Text style={styles.featureText}>Converse com pessoas ao redor do mundo de forma rápida e fácil</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttons}>
                {/**sessão inferir*/}
                <Button
                    title='Conheca mais sobre o app'
                    onPress={() => { handleAbout(); }}
                    style={styles.button}
                    variant='outline'
                />
                <Button
                    title='Sair'
                    onPress={() => { handleLogout(); }}
                    style={styles.button}
                    variant='secondary'
                />
            </View>
        </View>

    );
}
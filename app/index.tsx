import { router, useRouter } from "expo-router";
//import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { View, Text, Image } from "react-native";
import { WelcomeStyles as styles } from "../styles/screens/welcomeStyles";

export default function welcome() {
    //     const router = useRouter();
    //     useEffect(() => {
    //         if (user) {
    //             router.push('/home')
    //         }
    // },[user, router]);

    return (
        <View style={styles.container}>

            {/* borda laranja superior */}
            <Image
                source={require('../assets/bordaC.png')}
                style={styles.topWave}
                resizeMode="cover"
            />

            {/* conteúdo central */}
            <View style={styles.content}>

                <Image
                    source={require('../assets/logoS.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>Bem-vindo ao Safelline</Text>

                <Text style={styles.description}>
                    Um espaço para conhecer pessoas, compartilhar interesses e criar conexões reais.
                </Text>

                {/* sessão de botões */}
                <View style={styles.buttons}>

                    <Button
                        title="Começar"
                        onPress={() => router.push('/auth/login')}
                        style={styles.primaryButton}
                    />

                    <Text style={styles.textInfo}>
                        Não possui conta ainda? Clique no botão abaixo
                    </Text>

                    <Button
                        title="Register"
                        onPress={() => router.push('/auth/register')}
                        style={styles.secondaryButton}
                        variant="secondary"
                    />

                    {/* rota mantida */}
                    <Button
                        title="Select"
                        onPress={() => router.push('/chat/select')}
                    />
                </View>

            </View>

            {/* borda laranja inferior */}
            <Image
                source={require('../assets/bordaB.png')}
                style={styles.bottomWave}
                resizeMode="cover"
            />
        </View>
    );
}
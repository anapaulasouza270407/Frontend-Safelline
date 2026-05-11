import { router, useRouter } from "expo-router";
//import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { View, Text, Image } from "react-native";
//import {WelcomeStyles as styles} from "../styles/screens/welcomeStyles";

export default function welcome() {
//     const router = useRouter();
//     useEffect(() => {
//         if (user) {
//             router.push('/home')
//         }
// },[user, router]);
    return (
        <View>
            <View>
                <Image source={require('../assets/logoS.png')} resizeMode="contain"/>
                <Text>Bem-vindo ao Safelline</Text>
                <Text>
                   Um espaço para conhecer pessoas, compartilhar interesses e criar conexões reais.
                </Text>
                <View>
                    <Button title="Começar" onPress={() => router.push('/auth/login')}/>
                    <Text> Não possui conta ainda clique no botão abiaxo </Text>
                    <Button title ="Register" onPress={() => router.push('/auth/register')}/>
                    <Button title ="Select" onPress={() => router.push('/chat/select')}/>    
                </View>
            </View>
        </View>
    );
}

import { Text, View, Alert, KeyboardAvoidingView, Platform, Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { loginStyles as styles } from '../../styles/screens/loginStyles';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, _setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            router.replace('/home');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {/* Onda topo */}
            <Image
                source={require('../../assets/bordaC.png')}
                style={styles.topWave}
                resizeMode="cover"
            />

            {/* Onda baixo */}
            <Image
                source={require('../../assets/bordaB.png')}
                style={styles.bottomWave}
                resizeMode="cover"
            />

            <View style={styles.content}>

                {/* Logo */}
                <Image
                    source={require('../../assets/logoS.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>Login</Text>

                <View style={styles.inputContainer}>
                    <Input
                        value={email}
                        onChangeText={setEmail}
                        placeholder="user@gmail.com"
                    />

                    <Input
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="senha"
                    />
                </View>

                <Button
                    title={loading ? 'Entrando...' : 'Entrar'}
                    onPress={handleLogin}
                    style={styles.loginButton}
                />

                <Text style={styles.registerText}>
                    Não tem uma conta?{' '}
                    <Text
                        style={styles.registerLink}
                        onPress={() => router.push('/auth/register')}
                    >
                        Cadastre-se
                    </Text>
                </Text>

            </View>
        </KeyboardAvoidingView>
    );
}
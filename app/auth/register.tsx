import {
    Text,
    View,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { registerStyles as styles } from '../../styles/screens/registerStyles';

export default function Register() {

    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {

        if (!name || !email || !password || !confirmPassword || !birthDate) {
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }

        if (password.length < 8) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        if (!acceptedTerms) {
            Alert.alert('Erro', 'Você precisa aceitar os termos');
            return;
        }

        try {

            setLoading(true);

            router.replace('/home');

        } catch (error) {

            Alert.alert('Erro', 'Erro ao registrar');

        } finally {

            setLoading(false);

        }
    };

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            {/* ONDA TOPO */}
            <Image
                source={require('../../assets/bordaC.png')}
                style={styles.topWave}
                resizeMode="cover"
            />

            {/* ONDA BAIXO */}
            <Image
                source={require('../../assets/bordaB.png')}
                style={styles.bottomWave}
                resizeMode="cover"
            />

            <View style={styles.content}>

                {/* LOGO */}
                <Image
                    source={require('../../assets/logoS.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    Cadastre-se
                </Text>

                <View style={styles.inputContainer}>

                    <Input
                        value={name}
                        onChangeText={setName}
                        placeholder="seu nome"
                    />

                    <Input
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="user@gmail.com"
                    />

                    <Input
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="senha"
                    />

                    <Input
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        placeholder="confirmar senha"
                    />

                    {/* DATA DE NASCIMENTO */}
                    <Input
                        value={birthDate}
                        onChangeText={(text) => {

                            const numeric = text.replace(/\D/g, '');

                            let formatted = numeric;

                            if (numeric.length > 2) {

                                formatted =
                                    numeric.slice(0, 2) +
                                    '/' +
                                    numeric.slice(2);
                            }

                            if (numeric.length > 4) {

                                formatted =
                                    numeric.slice(0, 2) +
                                    '/' +
                                    numeric.slice(2, 4) +
                                    '/' +
                                    numeric.slice(4, 8);
                            }

                            setBirthDate(formatted);
                        }}

                        placeholder="dd/mm/aaaa"
                        placeholderTextColor="#F28C28"
                        keyboardType="numeric"
                        maxLength={10}

                      
                    />

                </View>

                {/* CHECKBOX */}
              <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setAcceptedTerms(!acceptedTerms)}
                >
                    <View style={[
                        styles.checkbox,
                        acceptedTerms && styles.checkboxChecked
                    ]}>
                        {acceptedTerms && (
                            <Text style={styles.checkIcon}>✓</Text>
                        )}
                    </View>
 
                    <Text style={styles.checkboxText}>
                        Aceitar os termos de uso
                    </Text>
                </TouchableOpacity>

                {/* BOTÃO */}
                <Button
                    title={loading ? 'Carregando...' : 'Continuar'}
                    onPress={handleRegister}
                    style={styles.registerButton}
                />

                {/* LOGIN */}
                <Text style={styles.loginText}>

                    já tem uma conta?{' '}

                    <Text
                        style={styles.loginLink}
                        onPress={() => router.push('/auth/login')}
                    >
                        Login
                    </Text>

                </Text>

            </View>

        </KeyboardAvoidingView>
    );
}
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import { useRouter } from 'expo-router';
import { chatSelectStyles as styles } from '../../styles/screens/chatSelectStyles';

interface Category {
  id: string;
  name: string;
  icon: any;
}
const categories: Category[] = [
  {
    id: 'Movies',
    name: 'Filmes',
    icon: require('../../assets/movies.png'),
  },

  {
    id: 'Series',
    name: 'Séries',
    icon: require('../../assets/series.png'),
  },

  {
    id: 'Games',
    name: 'Jogos',
    icon: require('../../assets/games.png'),
  },
];

export default function Select() {
  const [selectedAvatar, setSelectedAvatar] = useState(require('../../assets/avatar1.png'));
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);

  const [name, setName] = useState('jujubinha');
  const [email, setEmail] = useState('j***@gmail.com');
  const [password, setPassword] = useState('*****');

  const [editField, setEditField] = useState<'name' | 'email' | 'password' | null>(null);

  const handleSelect = (id: string) => {
    router.push(`/chat/room?category=${id}`);
  };
  const avatars = [
  require('../../assets/avatar1.png'),
  require('../../assets/avatar2.png'),
  require('../../assets/avatar3.png'),
  require('../../assets/avatar4.png'),
  require('../../assets/avatar5.png'),
  require('../../assets/avatar6.png'),
];

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.profile}
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={require('../../assets/avatar1.png')}
            style={styles.avatar}
          />

          <Text style={styles.username}>Jujubinha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => router.push('/about')}
        >
          <Text style={styles.aboutText}>Sobre</Text>
        </TouchableOpacity>

      </View>

      {/* TITLE */}
      <Text style={styles.title}>Selecione seu Interesse!</Text>

      {/* GRID */}
      <View style={styles.grid}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => handleSelect(item.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>

            <Image
              source={item.icon}
              style={styles.icon}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* BOTÃO SAIR */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.push('/')}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      {/* IMAGEM DA BASE */}
      <Image
        source={require('../../assets/bordaB.png')}
        style={styles.wave}
      />

      {/* POP-UP PERFIL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            <View style={styles.modalHeader} />

            {/* AVATAR CLICÁVEL */}
            <View style={styles.modalAvatarContainer}>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setAvatarModalVisible(true);
                }}
              >
                <Image
                  source={require('../../assets/avatar1.png')}
                  style={styles.modalAvatar}
                />
              </TouchableOpacity>

            </View>

            <View style={styles.modalContent}>

              <Text style={styles.sectionTitle}>
                Informações da conta
              </Text>
              <View style={styles.infoRow}>
                {/* nome */}

                {editField === 'name' ? (
                  <TextInput
                    style={styles.infoInput}
                    value={name}
                    onChangeText={setName}
                    autoFocus
                    onBlur={() => setEditField(null)}
                  />
                ) : (
                  <Text style={styles.infoText}>
                    Nome: {name}
                  </Text>
                )}

                <TouchableOpacity onPress={() => setEditField('name')}>
                  <Image
                    source={require('../../assets/editardark.png')}
                    style={styles.editIcon}
                  />
                </TouchableOpacity>

              </View>
              {/* email */}
              <View style={styles.infoRow}>

                {editField === 'email' ? (
                  <TextInput
                    style={styles.infoInput}
                    value={email}
                    onChangeText={setEmail}
                    autoFocus
                    onBlur={() => setEditField(null)}
                  />
                ) : (
                  <Text style={styles.infoText}>
                    E-mail: {email}
                  </Text>
                )}

                <TouchableOpacity onPress={() => setEditField('email')}>
                  <Image
                    source={require('../../assets/editardark.png')}
                    style={styles.editIcon}
                  />
                </TouchableOpacity>

              </View>
              {/* senha */}
              <View style={styles.infoRow}>

                {editField === 'password' ? (
                  <TextInput
                    style={styles.infoInput}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoFocus
                    onBlur={() => setEditField(null)}
                  />
                ) : (
                  <Text style={styles.infoText}>
                    Senha: {password}
                  </Text>
                )}

                <TouchableOpacity onPress={() => setEditField('password')}>
                  <Image
                    source={require('../../assets/editardark.png')}
                    style={styles.editIcon}
                  />
                </TouchableOpacity>

              </View>
              <Text style={[styles.sectionTitle, { marginTop: 25 }]}>
                Gerenciamento da conta
              </Text>
              <View style={styles.infoRow}>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  router.push('/');
                }}
              >
                <Text style={styles.manageText}>
                  Sair conta
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.deleteText}>
                  Excluir conta
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.saveText}>
                  Salvar e voltar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>
                  Cancelar
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>

      {/* POP-UP AVATARES */}
      <Modal
        visible={avatarModalVisible}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>

          <View style={styles.avatarPopup}>

            <View style={styles.modalHeader} />

            {/* AVATAR GRANDE */}
            <View style={styles.modalAvatarContainer}>
              <Image
                source={require('../../assets/avatar1.png')}
                style={styles.bigAvatar}
              />
            </View>

            {/* AVATARES */}
           <View style={styles.avatarGrid}>
  {avatars.map((item, index) => {
    const isSelected = selectedAvatar === item;

    return (
      <TouchableOpacity
        key={index}
        onPress={() => setSelectedAvatar(item)}
      >
        <Image
          source={item}
          style={[
            styles.avatarOption,
            isSelected && styles.selectedAvatar,
          ]}
        />
      </TouchableOpacity>
    );
  })}
</View>

            {/* BOTÃO */}
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                setAvatarModalVisible(false);
                setModalVisible(true);
              }}
            >
              <Text style={styles.saveText}>
                Voltar
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </View>
  );
}
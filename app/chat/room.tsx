import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Modal,
} from "react-native";

import { useRouter, useLocalSearchParams } from "expo-router";
import { ChatRoomStyles as styles } from "../../styles/screens/ChatRoomStyles";

const categories = [
  { id: "Movies", name: "Filmes" },
  { id: "Games", name: "Jogos" },
  { id: "Series", name: "Séries" },
];

export default function ChatRoom() {
  const categoryInfo = categories.find(
    (cat) => cat.id === useLocalSearchParams().category
  );

  const [otherReason, setOtherReason] = useState("");
  

  const router = useRouter();

  const flatListRef = useRef<FlatList>(null);

  // CHAT FAKE
  const [messages, setMessages] = useState<any[]>([]);

  const [inputText, setInputText] = useState("");

  // POPUP
  const [reportVisible, setReportVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 50);
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      isMine: true,
    };

    setMessages((prev) => [...prev, newMessage]);

    setInputText("");
  };

  const renderMessage = ({ item }: any) => {
    const isMyMessage = item.isMine;

    return (
      <View
        style={[
          styles.messageContainer,
          isMyMessage
            ? styles.myMessageContainer
            : styles.otherMessageContainer,
        ]}
      >
        <View
          style={[
            styles.messageBubble,
            isMyMessage ? styles.myMessage : styles.otherMessage,
          ]}
        >
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "android" ? -85 : 0}
    >
      {/* FUNDO */}
      <Image
        source={require("../../assets/logoS.png")}
        style={styles.backgroundFox}
      />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../../assets/avatar1.png")}
            style={styles.profileImage}
          />

          <View>
            <Text style={styles.userName}>
              Cebolinha
            </Text>

            <Text style={styles.categoryText}>
              {categoryInfo?.name || "Filmes"}
            </Text>
          </View>

          {/* ALERTA */}
          <TouchableOpacity
            onPress={() => setReportVisible(true)}
          >
            <Image
              source={require("../../assets/alert.png")}
              style={styles.alertIcon}
            />
          </TouchableOpacity>
        </View>

      <TouchableOpacity
    style={styles.nextButton}
    onPress={() => router.push("/loading")}
  >
          <Text style={styles.nextText}>Próximo</Text>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* CHAT */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      />

      {/* BORDA */}
      <Image
        source={require("../../assets/bordachat.png")}
        style={styles.bottomDecoration}
        resizeMode="cover"
      />

      {/* INPUT */}
      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Digite a sua mensagem...."
          placeholderTextColor="#8B8B8B"
          style={styles.input}
          multiline
          maxLength={500}
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendMessage}
          disabled={inputText.trim() === ""}
        >
          <Image
            source={require("../../assets/enviar.png")}
            style={styles.sendImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* POP-UP */}
      <Modal
        visible={reportVisible}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>

  {/* TOPO LARANJA */}
  <View style={styles.modalTop} />

  {/* FOTO */}
  <Image
    source={require("../../assets/avatar1.png")}
    style={styles.modalAvatar}
  />

            {/* NOME */}
            <View style={styles.nameBox}>
              <Text style={styles.modalName}>
                Cebolinha
              </Text>
            </View>

            {/* OPÇÃO 1 */}
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() =>
                setSelectedOption("Momento de insegurança")
              }
            >
              <View style={styles.radioOuter}>
                {selectedOption === "Momento de insegurança" && (
                  <View style={styles.radioInner} />
                )}
              </View>

              <Text style={styles.optionText}>
                Momento de insegurança
              </Text>
            </TouchableOpacity>

            {/* OPÇÃO 2 */}
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() =>
                setSelectedOption("Desconforto")
              }
            >
              <View style={styles.radioOuter}>
                {selectedOption === "Desconforto" && (
                  <View style={styles.radioInner} />
                )}
              </View>

              <Text style={styles.optionText}>
                Desconforto
              </Text>
            </TouchableOpacity>

            {/* OPÇÃO 3 */}
            <TouchableOpacity
              style={styles.optionRow}
              onPress={() =>
                setSelectedOption("Outro")
              }
            >
              <View style={styles.radioOuter}>
                {selectedOption === "Outro" && (
                  <View style={styles.radioInner} />
                )}
              </View>

              <Text style={styles.optionText}>
                Outro
              </Text>
            </TouchableOpacity>
            {/* CAMPO OUTRO */}
{selectedOption === "Outro" && (
  <TextInput
    style={styles.otherInput}
    placeholder="Digite o motivo..."
    placeholderTextColor="#B98A74"
    value={otherReason}
    onChangeText={setOtherReason}
    multiline
    maxLength={200}
  />
)}

            {/* DENUNCIAR */}
<TouchableOpacity
  style={styles.reportButton}
  onPress={() => {

    const finalReason =
      selectedOption === "Outro"
        ? otherReason
        : selectedOption;

    console.log("Denunciado:", finalReason);

    setReportVisible(false);

    setSelectedOption("");
    setOtherReason("");
  }}
>
  <Text style={styles.reportButtonText}>
    Denunciar
  </Text>
</TouchableOpacity>

            {/* CANCELAR */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setReportVisible(false)}
            >
              <Text style={styles.cancelButtonText}>
                Cancelar
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </KeyboardAvoidingView>
  );
}
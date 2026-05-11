import { StyleSheet } from "react-native";

export const ChatRoomStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // RAPOSA DO FUNDO
  backgroundFox: {
    position: "absolute",

    width: 260,
    height: 260,

    alignSelf: "center",

    top: "29%",

    opacity: 0.10,
  },

  // HEADER
  header: {
    paddingTop: 6,

    backgroundColor: "#F89B5A",

    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,

    paddingHorizontal: 12,
    paddingVertical: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "visible",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  // FOTO PERFIL
profileImage: {
  width: 68,
  height: 68,

  borderRadius: 999,

  marginRight: 10,

  marginTop: 18,
},

  userName: {
    color: "#FFFFFF",

    fontSize: 18,
    fontWeight: "800",

    marginBottom: -2,
  },

  categoryText: {
    color: "#FFF3EC",

    fontSize: 12,
    fontWeight: "600",
  },

  // !
  alertIcon: {
    width: 20,
    height: 20,

    marginLeft: 6,
    marginBottom: 18,
  },

  // BOTÃO PRÓXIMO
  nextButton: {
    backgroundColor: "#FFF5EE",

    borderRadius: 999,

    paddingHorizontal: 16,
    paddingVertical: 8,

    flexDirection: "row",
    alignItems: "center",
  },

  nextText: {
    color: "#F89B5A",

    fontSize: 16,
    fontWeight: "800",
  },

  arrow: {
    color: "#F89B5A",

    fontSize: 22,
    fontWeight: "bold",

    marginLeft: 4,
  },

  // CHAT
  chatContent: {
    paddingHorizontal: 14,
    paddingTop: 25,
    paddingBottom: 120,
  },

  messageContainer: {
    marginBottom: 14,

    flexDirection: "row",
  },

  myMessageContainer: {
    justifyContent: "flex-end",
  },

  otherMessageContainer: {
    justifyContent: "flex-start",
  },

  // BALÕES
  messageBubble: {
    maxWidth: "72%",

    paddingHorizontal: 15,
    paddingVertical: 10,

    borderRadius: 18,
  },

  // SUA MENSAGEM
  myMessage: {
    backgroundColor: "#F3B04B",

    borderBottomRightRadius: 5,
  },

  // OUTRO USUÁRIO
  otherMessage: {
    backgroundColor: "#FF9200",

    borderBottomLeftRadius: 5,
  },

  messageText: {
    color: "#FFFFFF",

    fontSize: 14,
    fontWeight: "700",

    lineHeight: 20,
  },

  // BORDA INFERIOR
  bottomDecoration: {
    position: "absolute",

    bottom: 0,

    width: "100%",
    height: 105,
  },

  // INPUT
  inputContainer: {
    position: "absolute",

    bottom: 18,
    left: 14,
    right: 14,

    height: 46,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F6F0EC",

    borderWidth: 3,
    borderColor: "#F2C7AE",

    borderRadius: 999,

    paddingLeft: 16,
    paddingRight: 5,
  },

  input: {
    flex: 1,

    color: "#555",

    fontSize: 12,

    paddingBottom: 1,
  },

  // BOTÃO ENVIAR
  sendButton: {
    width: 40,
    height: 40,

    alignItems: "center",
    justifyContent: "center",
  },

  sendImage: {
    width: 38,
    height: 38,
  },
});
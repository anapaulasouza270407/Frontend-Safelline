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
    fontFamily: "Montserrat_700Bold",
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

    fontFamily: "OpenSans_400Regular",
    fontWeight: "700",

    lineHeight: 20,
  },

  // BORDA INFERIOR
  bottomDecoration: {
    position: "absolute",

    bottom: 0,

    width: "100%",
    height: 400,
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
  /* ================= MODAL ================= */

modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.45)",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 18,
},

modalContainer: {
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: 35,
  overflow: "hidden",
  alignItems: "center",
  paddingBottom: 30,
},

modalTop: {
  width: "100%",
  height: 100,
  backgroundColor: "#FF9950",
},

modalAvatar: {
  width: 120,
  height: 120,
  borderRadius: 999,
  borderWidth: 5,
  borderColor: "#F26522",
  marginTop: -60,
  marginBottom: 18,
},

nameBox: {
  width: "82%",
  borderWidth: 3,
  borderColor: "#F3CCB9",
  borderRadius: 18,
  paddingVertical: 10,
  alignItems: "center",
  marginBottom: 28,
},

modalName: {
  color: "#C16A4C",
  fontSize: 24,
  fontWeight: "800",
},

optionRow: {
  width: "72%",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 22,
},

radioOuter: {
  width: 24,
  height: 24,
  borderRadius: 999,
  borderWidth: 4,
  borderColor: "#F28A00",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 12,
},

radioInner: {
  width: 10,
  height: 10,
  borderRadius: 999,
  backgroundColor: "#F28A00",
},

optionText: {
  color: "#C96F4C",
  fontSize: 20,
  fontWeight: "700",
},

reportButton: {
  width: "72%",
  backgroundColor: "#FF9800",
  paddingVertical: 14,
  borderRadius: 12,
  alignItems: "center",
  marginTop: 18,
},

reportButtonText: {
  color: "#fff",
  fontSize: 24,
  fontWeight: "900",
},
otherInput: {
  width: "72%",
  minHeight: 90,
  borderWidth: 2,
  borderColor: "#F3CCB9",
  borderRadius: 16,
  padding: 14,
  marginTop: -5,
  marginBottom: 10,
  color: "#A35D3F",
  fontSize: 16,
  textAlignVertical: "top",
  backgroundColor: "#FFF8F5",
},

cancelButton: {
  width: "72%",
  borderWidth: 3,
  borderColor: "#F3CCB9",
  paddingVertical: 11,
  borderRadius: 12,
  alignItems: "center",
  marginTop: 12,
},

cancelButtonText: {
  color: "#C16A4C",
  fontSize: 24,
  fontWeight: "800",
},
emptyContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: 120,
},

emptyText: {
  color: "#D6A58A",

  fontSize: 18,
  fontWeight: "700",

  opacity: 0.8,
},

exitImage: {
  width: 30,
  height: 22,
},
});
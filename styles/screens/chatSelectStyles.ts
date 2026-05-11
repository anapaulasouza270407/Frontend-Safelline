import { StyleSheet } from "react-native";

export const chatSelectStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },

  header: {
    backgroundColor: '#F28C38',
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    zIndex: 2,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    resizeMode: 'cover',
  },

  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  aboutButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },

  aboutText: {
    color: '#F28C38',
    fontWeight: 'bold',
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B85C2E',
    marginVertical: 25,

    zIndex: 2,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

    zIndex: 2,
  },

  card: {
    width: '47%',
    backgroundColor: '#F28C38',
    borderRadius: 20,
    paddingVertical: 25,
    alignItems: 'center',
    marginBottom: 20,

    borderWidth: 2,
    borderColor: '#E6761E',
  },

  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },

  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  logoutButton: {
    backgroundColor: '#F28C38',
    marginHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 80,

    zIndex: 2,
  },

  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  /* 🔥 FUNDO (wave corrigida) */
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    zIndex: 0,
    pointerEvents: 'none',
  },

  /* POP-UP */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '88%',
    backgroundColor: '#fff',
    borderRadius: 35,
    overflow: 'hidden',
  },

  modalHeader: {
    backgroundColor: '#F28C38',
    height: 95,
  },

  modalAvatarContainer: {
    alignItems: 'center',
    marginTop: -55,
  },

  modalAvatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#F28C38',
  },

  modalContent: {
    padding: 25,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B85C2E',
    marginBottom: 20,
  },

  infoText: {
    fontSize: 18,
    color: '#B85C2E',
    marginBottom: 12,
    fontWeight: '600',
  },

  manageText: {
    fontSize: 18,
    color: '#F28C38',
    marginTop: 15,
    fontWeight: 'bold',
  },

  deleteText: {
    fontSize: 18,
    color: '#D94B4B',
    marginTop: 15,
    fontWeight: 'bold',
  },

  saveButton: {
    backgroundColor: '#FF9500',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 25,
  },

  saveText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  cancelButton: {
    borderWidth: 2,
    borderColor: '#F2C2A6',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 15,
  },

  cancelText: {
    color: '#B85C2E',
    fontSize: 20,
    fontWeight: 'bold',
  },

  /* AVATARES */
  avatarPopup: {
    width: '88%',
    backgroundColor: '#fff',
    borderRadius: 35,
    overflow: 'hidden',
    paddingBottom: 30,
  },

  bigAvatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#F28C38',
  },

  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 18,
    paddingHorizontal: 25,
    marginTop: 20,
  },

  avatarOption: {
    width: 75,
    height: 75,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#F28C38',
  },

  selectedAvatar: {
    borderColor: '#FF9500',
    borderWidth: 5,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  infoInput: {
    flex: 1,
    fontSize: 18,
    color: '#B85C2E',
    fontWeight: '600',
  },

  editIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
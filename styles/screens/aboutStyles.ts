import { StyleSheet } from 'react-native';

export const aboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // 👈 corrigido
  },

  /* TOPO */
  topContainer: {
    backgroundColor: '#F28C38',
    height: 140,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backIcon: {
  width: 24,
  height: 24,
  resizeMode: 'contain',
},

  back: {
    color: '#fff',
    fontSize: 28,
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 180, // 👈 espaço pra onda não cobrir
  },

    logoWrapper: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',

    width: 140,
    height: 140,
    borderRadius: 65,

    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 10,
    elevation: 10,
    },

    logo: {
    width: 150,  // 👈 agora cabe certinho
    height: 150,
    borderRadius: 50,
    resizeMode: 'contain', // 👈 melhor pra logo
    },

  /* TEXTO */
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F3A4A',
    marginBottom: 20,
  },

  highlight: {
    color: '#FF6B00',
  },

  description: {
    textAlign: 'center',
    color: '#B85C2E',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },

  /* ONDA (CORRIGIDO) */
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    
  },
  list: {
  color: '#B85C2E',
  fontSize: 14,
  marginBottom: 6,
  textAlign: 'center',
},

subtitle: {
  marginTop: 20,
  fontWeight: 'bold',
  color: '#B85C2E',
  fontSize: 16,
  textAlign: 'center',
},
});
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.containerPrincipal}>
    <Text style={styles.titulo}>Chat</Text>
    
    <View style={styles.containerMensagens}>
      <View style={[styles.balao, styles.mensagemEnviada]}>
        <Text style={styles.remetente}>Eu:</Text>
        <Text style={styles.textoMensagem}>Olá! Tudo bem?</Text>
      </View>
      <View style={[styles.balao, styles.mensagemRecebida]}>
        <Text style={styles.destinatario}>Amigo:</Text>
        <Text style={styles.textoMensagem}>Oi! Sim, e você?</Text>
      </View>
      <View style={[styles.balao, styles.mensagemEnviada]}>
        <Text style={styles.remetente}>Eu:</Text>
        <Text style={styles.textoMensagem}>Teste de mensagem média</Text>
      </View>
      <View style={[styles.balao, styles.mensagemRecebida]}>
        <Text style={styles.destinatario}>Amigo:</Text>
        <Text style={styles.textoMensagem}>Teste</Text>
      </View>
      <View style={[styles.balao, styles.mensagemEnviada]}>
        <Text style={styles.remetente}>Eu:</Text>
        <Text style={styles.textoMensagem}>Teste de mensagem grandonaaaaaaa</Text>
      </View>
      <View style={[styles.balao, styles.mensagemRecebida]}>
        <Text style={styles.destinatario}>Amigo:</Text>
        <Text style={styles.textoMensagem}>Teste de mensagem normalzinha tico tico tico</Text>
      </View>
    </View>

    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem..."
        value=""
      />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#63458A',
  },
  titulo:{
    fontSize: 24,
    padding: 5,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'black'
  },
  containerMensagens: {
    padding: 20,
    height: 770,
    backgroundColor: '#B288C0',
  },
  balao: {
    maxWidth: '70%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  mensagemEnviada: {
    alignSelf: 'flex-end',
    backgroundColor: '#E4B7E5',
    marginLeft: '30%',
  },
  mensagemRecebida: {
    alignSelf: 'flex-start',
    backgroundColor: '#E4B7E5',
    marginRight: '30%',
  },
  remetente: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#9A48D0',
  },
  destinatario: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#9A48D0',
  },
  textoMensagem: {
    fontSize: 16,
  },

  containerInput:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
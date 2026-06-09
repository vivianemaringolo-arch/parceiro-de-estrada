import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0f172a'
    }}>
      <Text style={{
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
      }}>
        🚛 Parceiro da Estrada
      </Text>

      <Text style={{
        fontSize: 16,
        color: '#cbd5e1',
        marginTop: 10
      }}>
        Seu companheiro de trabalho na estrada
      </Text>
    </View>
  );
}
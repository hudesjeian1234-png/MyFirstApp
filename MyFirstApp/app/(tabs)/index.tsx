import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

// I added useState and TextInput to make the profile card interactive. 05/15/2026
export default function Index() {
  const [name, setName] = useState('');

  return (
    <View style={styles.screen}>
      <Image 
        source={{ uri: 'https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-6/559234675_3019796174869541_3635976533216017146_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGwsuB0Nqu8J5YZ0prkRcEfLKvmeL0RiQosq-Z4vRGJCjDe_meOSTZ9cOGyjq1F1v4QeR--B3S6LdBHqN_lqrP8&_nc_ohc=cv-kHsR9RgQQ7kNvwFvYylB&_nc_oc=AdqQUeKmoko3SMP1_4T2i8bLYxMvXfxrYN6fM79Zi-9GSu0-qNAke5MKZn6DWHeLz-w&_nc_zt=23&_nc_ht=scontent.fceb1-5.fna&_nc_gid=cRLcSS3l7A3MdUnoJX9w9w&_nc_ss=7b2a8&oh=00_Af6DiSZn6eFBBrA7iGtyiKBTxgRp87X7hacr6MKY8s7sag&oe=6A0CE295' }} 
        style={styles.photo} 
      />
      
      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        style={styles.input}
      />
      
      <Text style={styles.name}>
        Hello, {name}!
      </Text>
      
      <Text style={styles.course}>
        MMA Student · CS126-1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60,
    marginBottom: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 200,
    borderRadius: 8,
    textAlign: 'center'
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  course: { 
    fontSize: 14, 
    color: '#888',
    marginTop: 4
  }
});
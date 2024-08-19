import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default function Mohssen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' }}
          style={styles.image}
        />
        <Text style={styles.productName}>Product Name</Text>
        <Text style={styles.price}>$99.99</Text>
        <Text style={styles.description}>
          This is a brief description of the product. It highlights the key features and benefits.
        </Text>
        <View style={styles.row}>
          <Text style={styles.text}>Category</Text>
          <Text style={styles.text}>In Stock</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Rating: 4.5</Text>
          <Text style={styles.text}>Reviews: 120</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 16,
    width: width * 0.9,
    maxWidth: 400,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
})
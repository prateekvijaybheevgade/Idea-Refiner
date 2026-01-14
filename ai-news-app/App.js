import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';

const MOCK_NEWS = [
  {
    id: '1',
    title: 'AI Breakthrough: GPT-5 Announced',
    description: 'The latest iteration of the Generative Pre-trained Transformer series promises unprecedented reasoning capabilities and multimodal understanding.',
    source: 'Tech Daily',
    date: '2 hrs ago',
    imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=AI+News'
  },
  {
    id: '2',
    title: 'New AI Model Predicts Weather with 99% Accuracy',
    description: 'Scientists have developed a new deep learning model that outperforms traditional weather forecasting methods by a significant margin.',
    source: 'Science Today',
    date: '5 hrs ago',
    imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Weather+AI'
  },
  {
    id: '3',
    title: 'Robots That Learn Like Humans',
    description: 'A new study from MIT shows how robots can learn complex tasks by observing humans, reducing training time drastically.',
    source: 'Robotics World',
    date: '1 day ago',
    imageUrl: 'https://via.placeholder.com/150/00FF00/000000?Text=Robot+Learning'
  },
  {
    id: '4',
    title: 'AI in Healthcare: Detecting Diseases Early',
    description: 'AI algorithms are now capable of detecting early signs of cancer from X-rays with higher accuracy than human radiologists.',
    source: 'Health News',
    date: '2 days ago',
    imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?Text=Health+AI'
  },
  {
    id: '5',
    title: 'Ethical AI: The Debate Continues',
    description: 'Experts gather in Geneva to discuss the ethical implications of autonomous weapons and AI surveillance.',
    source: 'Global Politics',
    date: '3 days ago',
    imageUrl: 'https://via.placeholder.com/150/000000/FFFFFF?Text=Ethical+AI'
  },
];

const NewsItem = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.imageContainer}>
        {/* Using a colored view as placeholder if image fails to load or just as a style choice */}
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
      <View style={styles.metaContainer}>
        <Text style={styles.source}>{item.source}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function App() {
  const [news, setNews] = useState(MOCK_NEWS);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI News Feed</Text>
      </View>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    height: 150,
    backgroundColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  source: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, Image, TouchableOpacity, Platform } from 'react-native';

const MOCK_NEWS = [
  {
    id: '1',
    title: 'AI Breakthrough: GPT-5 Announced',
    description: 'The latest iteration of the Generative Pre-trained Transformer series promises unprecedented reasoning capabilities and multimodal understanding.',
    source: 'Tech Daily',
    category: 'Technology',
    date: '2 hrs ago',
    imageUrl: 'https://via.placeholder.com/600x300/0000FF/808080?Text=GPT-5+Announced'
  },
  {
    id: '2',
    title: 'New AI Model Predicts Weather with 99% Accuracy',
    description: 'Scientists have developed a new deep learning model that outperforms traditional weather forecasting methods by a significant margin.',
    source: 'Science Today',
    category: 'Environment',
    date: '5 hrs ago',
    imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Weather+AI'
  },
  {
    id: '3',
    title: 'Robots That Learn Like Humans',
    description: 'A new study from MIT shows how robots can learn complex tasks by observing humans, reducing training time drastically.',
    source: 'Robotics World',
    category: 'Robotics',
    date: '1 day ago',
    imageUrl: 'https://via.placeholder.com/150/00FF00/000000?Text=Robot+Learning'
  },
  {
    id: '4',
    title: 'AI in Healthcare: Detecting Diseases Early',
    description: 'AI algorithms are now capable of detecting early signs of cancer from X-rays with higher accuracy than human radiologists.',
    source: 'Health News',
    category: 'Healthcare',
    date: '2 days ago',
    imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?Text=Health+AI'
  },
  {
    id: '5',
    title: 'Ethical AI: The Debate Continues',
    description: 'Experts gather in Geneva to discuss the ethical implications of autonomous weapons and AI surveillance.',
    source: 'Global Politics',
    category: 'Ethics',
    date: '3 days ago',
    imageUrl: 'https://via.placeholder.com/150/000000/FFFFFF?Text=Ethical+AI'
  },
];

const CategoryBadge = ({ category }) => (
  <View style={styles.badgeContainer}>
    <Text style={styles.badgeText}>{category}</Text>
  </View>
);

const FeaturedNewsItem = ({ item }) => (
  <TouchableOpacity style={styles.featuredCard} activeOpacity={0.9}>
    <Image source={{ uri: item.imageUrl }} style={styles.featuredImage} resizeMode="cover" />
    <View style={styles.featuredOverlay}>
      <CategoryBadge category={item.category} />
      <Text style={styles.featuredTitle}>{item.title}</Text>
      <View style={styles.metaContainer}>
        <Text style={styles.featuredSource}>{item.source}</Text>
        <Text style={styles.featuredDate}>• {item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const NewsItem = ({ item }) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.8}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
    <View style={styles.textContainer}>
      <CategoryBadge category={item.category} />
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
      <View style={styles.metaContainer}>
        <Text style={styles.source}>{item.source}</Text>
        <Text style={styles.date}>• {item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function App() {
  const [news, setNews] = useState(MOCK_NEWS);

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return <FeaturedNewsItem item={item} />;
    }
    return <NewsItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Nexus</Text>
        <Text style={styles.headerSubtitle}>Latest Intelligence</Text>
      </View>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 20,
    backgroundColor: '#1a1a2e',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    fontWeight: '500',
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  // Badge Styles
  badgeContainer: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  badgeText: {
    color: '#007AFF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  // Featured Card Styles
  featuredCard: {
    height: 250,
    borderRadius: 16,
    marginBottom: 24,
    overflow: 'hidden',
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  featuredSource: {
    color: '#e0e0e0',
    fontSize: 12,
    fontWeight: '600',
  },
  featuredDate: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: 4,
  },
  // Standard Card Styles
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    height: 120,
  },
  image: {
    width: 120,
    height: '100%',
  },
  textContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 4,
    lineHeight: 22,
  },
  description: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginBottom: 6,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  source: {
    fontSize: 11,
    color: '#666',
    fontWeight: '600',
  },
  date: {
    fontSize: 11,
    color: '#999',
    marginLeft: 4,
  },
});

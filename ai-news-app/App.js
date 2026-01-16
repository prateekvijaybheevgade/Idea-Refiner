import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, Image, TouchableOpacity, Platform, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';

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

const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';

const CategoryBadge = ({ category }) => (
  <View style={styles.badgeContainer}>
    <Text style={styles.badgeText}>{category}</Text>
  </View>
);

const FeaturedNewsItem = ({ item }) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.featuredTouch}>
    <BlurView intensity={30} tint="dark" style={styles.featuredCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.featuredImage} resizeMode="cover" />
      <View style={styles.featuredOverlay}>
        <CategoryBadge category={item.category} />
        <Text style={styles.featuredTitle}>{item.title}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.featuredSource}>{item.source}</Text>
          <Text style={styles.featuredDate}>• {item.date}</Text>
        </View>
      </View>
    </BlurView>
  </TouchableOpacity>
);

const NewsItem = ({ item }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.itemTouch}>
    <BlurView intensity={20} tint="light" style={styles.card}>
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
    </BlurView>
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
    <ImageBackground source={{ uri: BACKGROUND_IMAGE }} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

        {/* Glass Header */}
        <BlurView intensity={50} tint="dark" style={styles.header}>
          <Text style={styles.headerTitle}>AI Nexus</Text>
          <Text style={styles.headerSubtitle}>Latest Intelligence</Text>
        </BlurView>

        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 20,
    // Removed solid background
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 10,
    overflow: 'hidden', // Essential for BlurView to respect border radius on some platforms
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
    fontWeight: '500',
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  // Badge Styles
  badgeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  // Featured Card Styles
  featuredTouch: {
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  featuredCard: {
    height: 250,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    position: 'absolute',
  },
  featuredOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)', // Slight tint on top of image
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
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
  itemTouch: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  card: {
    flexDirection: 'row',
    height: 120,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Glassy white
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
    color: '#333',
    lineHeight: 16,
    marginBottom: 6,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  source: {
    fontSize: 11,
    color: '#333',
    fontWeight: '600',
  },
  date: {
    fontSize: 11,
    color: '#555',
    marginLeft: 4,
  },
});

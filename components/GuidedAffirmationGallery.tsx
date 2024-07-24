import { View, Text } from 'react-native'
import React from 'react'
import { Gallerypreview } from '@/constants/models/AffirmationGallery';
import { FlatList } from 'react-native-gesture-handler';
import { Pressable, Image  } from 'react-native';
import { Link } from 'expo-router';

interface GuidedAffirmationGalleryProps{
    title:string;
    previews: Gallerypreview[]
}

const GuidedAffirmationGallery = ({title, previews}: GuidedAffirmationGalleryProps) => {
  return (
    <View className='my-5'>
        <View>
        <Text className='text-white font-bold text-xl'>{title}</Text>
        </View>
        <View className='space-y-2'>
            <FlatList data={previews} 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <Link href={`/affirmations/${item.id}`} asChild>
                        <Pressable>
                            <View className="h-36 w-32 rounded-md mr-4">
                                <Image
                                    source={item.image}
                                    resizeMode="cover"
                                    className="w-full h-full"
                                />
                                <Text>ProductGallery</Text>
                            </View>
                        </Pressable>
                    </Link>
                )}
                horizontal
            />
        </View>


      
    </View>
  )
}

export default GuidedAffirmationGallery
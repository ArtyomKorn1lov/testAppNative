import React from 'react';
import { View, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListItem } from '@rneui/themed';

const partnerList = [
    {
        name: 'Amy Farha',
        subtitle: 'Vice President',
        linearGradientColors: ['#FF9800', '#F44336'],
        subIcon: "account-details"
      },
      {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman',
        linearGradientColors: ['#3F51B5', '#2196F3'],
        subIcon: "account-group"
      },
      {
        name: 'Amanda Martin',
        subtitle: 'CEO',
        linearGradientColors: ['#FFD600', '#FF9800'],
        subIcon: "account-details"
      },
      {
        name: 'Christy Thomas',
        avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
        subtitle: 'Lead Developer',
        linearGradientColors: ['#4CAF50', '#8BC34A'],
        subIcon: "account-group"
      },
      {
        name: 'Melissa Jones',
        subtitle: 'CTO',
        linearGradientColors: ['#F44336', '#E91E63'],
        subIcon: "account-group"
      },
];

const PartnersComponent = () => {

    return (
        <>
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={{ paddingVertical: 8 }}>
                            {partnerList.map((item, key) => (
                                <ListItem
                                    key={key}
                                    linearGradientProps={{
                                        colors: item.linearGradientColors,
                                        start: [1, 0],
                                        end: [0.2, 0],
                                    }}
                                    containerStyle={{
                                        backgroundColor: "#222222",
                                        marginHorizontal: 16,
                                        marginVertical: 8,
                                        borderRadius: 8,
                                    }}
                                >
                                    <MaterialCommunityIcons name="account-circle" color={'#D9D9D9'} size={30} />
                                    <ListItem.Content>
                                        <ListItem.Title
                                            style={{ color: 'white', fontWeight: 'bold' }}
                                        >
                                            {item.name}
                                        </ListItem.Title>
                                        <ListItem.Subtitle style={[{ color: 'white' }]}>
                                            {item.subtitle}
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                                    <MaterialCommunityIcons name={item.subIcon} color={'#D9D9D9'} size={30} />
                                </ListItem>
                            ))}
                        </View>
                    </>
                }
            />
        </>
    );
};

export default PartnersComponent;
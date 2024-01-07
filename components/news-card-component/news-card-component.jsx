import { View, ScrollView, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import NewsCadsStyles from './news-card-styles';
import ConfirmDialogComponent from '../confirm-dialog-component/confirm-dialog-component';
import { useState } from 'react';

const users = [
    {
        name: 'Артём, \nLorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, pariatur!',
        avatar: 'https://i.ytimg.com/vi/95PjLyjoExc/mqdefault.jpg',
    },
    {
        name: 'Даня, \nLorem ipsum dolor sit amet.',
        avatar:
            'https://sun9-2.userapi.com/impf/TOab_4fyZkpCfjm2T9j_5lp5FIVOwTnJeONf2w/nxlol358LFw.jpg?size=320x214&quality=96&sign=86c5fce2296413018da85e13f9d5fd2e&c_uniq_tag=bLDoMON0WRG8UD6J5I4SeWoaT1CiguI3ZsB5-494R_M&type=album',
    },
    {
        name: 'Маша, \nLorem ipsum dolor sit amet consectetur adipisicing.',
        avatar: 'https://avavatar.ru/images/original/6/YJt6BvPoSryTM3Vs.jpg',
    },
    {
        name: 'Саша, \nLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet laboriosam in nam commodi odio.',
        avatar: 'https://i.pinimg.com/736x/fc/67/7b/fc677b797ef41c1cc4b5529b8114d751.jpg',
    },
    {
        name: 'Марат, \nLorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam!',
        avatar: 'https://proza.ru/pics/2013/07/22/2052.jpg',
    },
    {
        name: 'Антон, \nLorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aspernatur mollitia!',
        avatar:
            'https://pp.userapi.com/c9219/u100463503/a_0f8d2e6c.jpg',
    },
    {
        name: 'Кирилл, \nLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores maxime?',
        avatar:
            'https://i.ytimg.com/vi/OhYEbKX4gSs/hqdefault.jpg',
    },
    {
        name: 'Даниил, \nLorem, ipsum.',
        avatar:
            'https://img-fotki.yandex.ru/get/43546/39663434.a05/0_bcc08_19dba30b_XL.jpg',
    },
    {
        name: 'Витя, \nLorem ipsum dolor sit.',
        avatar:
            'https://zastavok.net/uploads/228x400/animals/1470780371.jpg',
    },
];

const NewsCardsComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubscribe, setSubscribe] = useState(false);

    const toggleDialog = () => {
        setIsVisible(!isVisible);
    };

    const subscribe = () => {
        setIsVisible(false);
        setSubscribe(true);
    };

    return (
        <>
            <ScrollView>
                <View style={NewsCadsStyles.container}>
                    <Card containerStyle={NewsCadsStyles.element}>
                        <Card.Title style={NewsCadsStyles.title}>Демонстрация вывода списка</Card.Title>
                        <Card.Divider style={NewsCadsStyles.divider}/>
                        {users.map((item, key) => {
                            return (
                                <View key={key} style={NewsCadsStyles.user}>
                                    <Image
                                        style={NewsCadsStyles.image}
                                        resizeMode="cover"
                                        source={{ uri: item.avatar }}
                                    />
                                    <Text style={NewsCadsStyles.name}>{item.name}</Text>
                                </View>
                            );
                        })}
                    </Card>
                    <Card containerStyle={[NewsCadsStyles.element, { marginTop: 15 }]}>
                        <Card.Title style={NewsCadsStyles.title}>Демонстрация шрифтов</Card.Title>
                        <Card.Divider style={NewsCadsStyles.divider}/>
                        <Text style={NewsCadsStyles.fonts} h1>
                            h1 Heading
                        </Text>
                        <Text style={NewsCadsStyles.fonts} h2>
                            h2 Heading
                        </Text>
                        <Text style={NewsCadsStyles.fonts} h3>
                            h3 Heading
                        </Text>
                        <Text style={NewsCadsStyles.fonts} h4>
                            h4 Heading
                        </Text>
                        <Text style={NewsCadsStyles.fonts}>Normal Text</Text>
                    </Card>
                    <Card containerStyle={[NewsCadsStyles.element, { marginTop: 15 }]}>
                        <Card.Title style={NewsCadsStyles.title}>Демонстрация Popup</Card.Title>
                        <Card.Divider style={NewsCadsStyles.divider}/>
                        <Card.Image
                            style={{ padding: 0 }}
                            source={{
                                uri:
                                    'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                            }}
                        />
                        <Text style={[NewsCadsStyles.name, { marginBottom: 10 }]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, enim.
                        </Text>
                    </Card>
                    <Card containerStyle={[NewsCadsStyles.element, { marginTop: 15, marginBottom: 15 }]}>
                        <Card.Title style={NewsCadsStyles.title}>Фото Буси</Card.Title>
                        <Card.Divider style={NewsCadsStyles.divider}/>
                        <Image
                            style={{width: '100%', height: 500, marginBottom: 10 }}
                            resizeMode="cover"
                            source={{ uri: "https://i.imgur.com/AbKYdqN.png" }}
                        />
                        {isSubscribe &&
                            <Text style={NewsCadsStyles.fonts} h4>
                                Поздравляю, вы подписались на рассылку Буси!
                            </Text>
                        }
                        <Button
                            onPress={() => setIsVisible(true)}
                            buttonStyle={{
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}
                            title="Подписаться на фото!"
                        />
                    </Card>
                </View>
            </ScrollView>
            <ConfirmDialogComponent
                title={'Подтвердите ваше действие'}
                text={'Подписывайтесь ли вы на новые фото Буси?'}
                isVisible={isVisible}
                toggleDialog={toggleDialog}
                onClose={() => setIsVisible(false)}
                onConfirm={() => subscribe()}
            />
        </>
    );
};

export default NewsCardsComponent;
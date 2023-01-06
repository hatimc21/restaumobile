import React, { useEffect, useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Pressable
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../const/colors';
const width = Dimensions.get('window').width / 2 - 30;
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import image from '../const/image';
import axios from 'axios';

const Home = ({ navigation }) => {
    const [restaurants, setrestaurants] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.137.1:8080/RestaurantWebWS/restaurant/all');
                setrestaurants(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        // let str = "../const/img/";
        // let str2 = restaurants[0].photos[0].url;
        // let path = `${str}${str2}`;
        // // setrestaurants([
        // //     {
        // //         "restaurant": {
        // //             "id": 0,
        // //             "nom": "Chez ALI 1",
        // //             "adresse": "42 Rue de la LibertÃ©, Marrakech",
        // //             "description": "Restaurant Traditionnel Marocain",
        // //             "latitude": 31.6354,
        // //             "longitude": -8.01204,
        // //             "heure_open": "8:00",
        // //             "heure_close": "00:00",
        // //             "weekend": false,
        // //             "categorie": {
        // //                 "id": 4,
        // //                 "type": "Traditionnel"
        // //             },
        // //             "serie": {
        // //                 "id": 6,
        // //                 "nom": "Chez ALI"
        // //             },
        // //             "zone": {
        // //                 "id": 2,
        // //                 "nom": "gueliz",
        // //                 "ville": {
        // //                     "id": 1,
        // //                     "nom": "marrakech"
        // //                 }
        // //             }
        // //         },
        // //         "photos": [
        // //             {
        // //                 "id": 1,
        // //                 "url": "R1P1.jpg",
        // //                 "restaurant": {
        // //                     "id": 1,
        // //                     "nom": "Chez ALI 1",
        // //                     "adresse": "42 Rue de la LibertÃ©, Marrakech",
        // //                     "description": "Restaurant Traditionnel Marocain",
        // //                     "latitude": 31.6354,
        // //                     "longitude": -8.01204,
        // //                     "heure_open": "8:00",
        // //                     "heure_close": "00:00",
        // //                     "weekend": false,
        // //                     "categorie": {
        // //                         "id": 4,
        // //                         "type": "Traditionnel"
        // //                     },
        // //                     "serie": {
        // //                         "id": 6,
        // //                         "nom": "Chez ALI"
        // //                     },
        // //                     "zone": {
        // //                         "id": 2,
        // //                         "nom": "gueliz",
        // //                         "ville": {
        // //                             "id": 1,
        // //                             "nom": "marrakech"
        // //                         }
        // //                     }
        // //                 }
        // //             },
        // //             {
        // //                 "id": 2,
        // //                 "url": "R1P2.jpg",
        // //                 "restaurant": {
        // //                     "id": 1,
        // //                     "nom": "Chez ALI 1",
        // //                     "adresse": "42 Rue de la LibertÃ©, Marrakech",
        // //                     "description": "Restaurant Traditionnel Marocain",
        // //                     "latitude": 31.6354,
        // //                     "longitude": -8.01204,
        // //                     "heure_open": "8:00",
        // //                     "heure_close": "00:00",
        // //                     "weekend": false,
        // //                     "categorie": {
        // //                         "id": 4,
        // //                         "type": "Traditionnel"
        // //                     },
        // //                     "serie": {
        // //                         "id": 6,
        // //                         "nom": "Chez ALI"
        // //                     },
        // //                     "zone": {
        // //                         "id": 2,
        // //                         "nom": "gueliz",
        // //                         "ville": {
        // //                             "id": 1,
        // //                             "nom": "marrakech"
        // //                         }
        // //                     }
        // //                 }
        // //             },
        // //             {
        // //                 "id": 3,
        // //                 "url": "R1P3.jpg",
        // //                 "restaurant": {
        // //                     "id": 1,
        // //                     "nom": "Chez ALI 1",
        // //                     "adresse": "42 Rue de la LibertÃ©, Marrakech",
        // //                     "description": "Restaurant Traditionnel Marocain",
        // //                     "latitude": 31.6354,
        // //                     "longitude": -8.01204,
        // //                     "heure_open": "8:00",
        // //                     "heure_close": "00:00",
        // //                     "weekend": false,
        // //                     "categorie": {
        // //                         "id": 4,
        // //                         "type": "Traditionnel"
        // //                     },
        // //                     "serie": {
        // //                         "id": 6,
        // //                         "nom": "Chez ALI"
        // //                     },
        // //                     "zone": {
        // //                         "id": 2,
        // //                         "nom": "gueliz",
        // //                         "ville": {
        // //                             "id": 1,
        // //                             "nom": "marrakech"
        // //                         }
        // //                     }
        // //                 }
        // //             }
        // //         ]
        // //     },
        // //     {
        // //         "restaurant": {
        // //             "id": 1,
        // //             "nom": "Mc Donalds gueliz",
        // //             "adresse": "Rue el Imam Malik, Marrakech",
        // //             "description": "FastFood Americain",
        // //             "latitude": 31.6337,
        // //             "longitude": -8.00932,
        // //             "heure_open": "6:00",
        // //             "heure_close": "02:00",
        // //             "weekend": false,
        // //             "categorie": {
        // //                 "id": 1,
        // //                 "type": "FastFood"
        // //             },
        // //             "serie": {
        // //                 "id": 1,
        // //                 "nom": "McDonalds"
        // //             },
        // //             "zone": {
        // //                 "id": 2,
        // //                 "nom": "gueliz",
        // //                 "ville": {
        // //                     "id": 1,
        // //                     "nom": "marrakech"
        // //                 }
        // //             }
        // //         },
        // //         "photos": [
        // //             {
        // //                 "id": 4,
        // //                 "url": "R2P1.jpg",
        // //                 "restaurant": {
        // //                     "id": 2,
        // //                     "nom": "Mc Donalds gueliz",
        // //                     "adresse": "Rue el Imam Malik, Marrakech",
        // //                     "description": "FastFood Americain",
        // //                     "latitude": 31.6337,
        // //                     "longitude": -8.00932,
        // //                     "heure_open": "6:00",
        // //                     "heure_close": "02:00",
        // //                     "weekend": false,
        // //                     "categorie": {
        // //                         "id": 1,
        // //                         "type": "FastFood"
        // //                     },
        // //                     "serie": {
        // //                         "id": 1,
        // //                         "nom": "McDonalds"
        // //                     },
        // //                     "zone": {
        // //                         "id": 2,
        // //                         "nom": "gueliz",
        // //                         "ville": {
        // //                             "id": 1,
        // //                             "nom": "marrakech"
        // //                         }
        // //                     }
        // //                 }
        // //             },
        // //             {
        // //                 "id": 5,
        // //                 "url": "R2P2.jpg",
        // //                 "restaurant": {
        // //                     "id": 2,
        // //                     "nom": "Mc Donalds gueliz",
        // //                     "adresse": "Rue el Imam Malik, Marrakech",
        // //                     "description": "FastFood Americain",
        // //                     "latitude": 31.6337,
        // //                     "longitude": -8.00932,
        // //                     "heure_open": "6:00",
        // //                     "heure_close": "02:00",
        // //                     "weekend": false,
        // //                     "categorie": {
        // //                         "id": 1,
        // //                         "type": "FastFood"
        // //                     },
        // //                     "serie": {
        // //                         "id": 1,
        // //                         "nom": "McDonalds"
        // //                     },
        // //                     "zone": {
        // //                         "id": 2,
        // //                         "nom": "gueliz",
        // //                         "ville": {
        // //                             "id": 1,
        // //                             "nom": "marrakech"
        // //                         }
        // //                     }
        // //                 }
        // //             },
        // //             {
        // //                 "id": 6,
        // //                 "url": "R2P3.jpg",
        // //                 "restaurant": {
        // //                     "id": 2,
        // //                     "nom": "Mc Donalds gueliz",
        // //                     "adresse": "Rue el Imam Malik, Marrakech",
        // //                     "description": "FastFood Americain",
        // //                     "latitude": 31.6337,
        // //                     "longitude": -8.00932,
        // //                     "heure_open": "6:00",
        // //                     "heure_close": "02:00",
        // //                     "weekend": false,
        // //                     "categorie": {
        // //                         "id": 1,
        // //                         "type": "FastFood"
        // //                     },
        // //                     "serie": {
        // //                         "id": 1,
        // //                         "nom": "McDonalds"
        // //                     },
        // //                     "zone": {
        // //                         "id": 2,
        // //                         "nom": "gueliz",
        // //                         "ville": {
        // //                             "id": 1,
        // //                             "nom": "marrakech"
        // //                         }
        // //                     }
        // //                 }
        // //             }
        // //         ]
        // //     }
        // // ])
        console.log(restaurants)
        // console.log(path)
    }, []);


    const Card = ({ restaurant }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', restaurant)}
                activeOpacity={0.8}
            >
                <View style={style.card}>
                    <View style={{ alignItems: 'flex-end' }}>
                    </View>

                    <View
                        style={{
                            height: 100,
                            alignItems: 'center',
                        }}>
                        <Image
                            // source={require(path+restaurants[restaurant.restaurant.id].photos[0].url)}
                            source={image[restaurant.restaurant.id-1].img}
                            style={{ flex: 1, resizeMode: 'contain' }}
                        />
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
                        {restaurant.restaurant.nom}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                        }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                            serie : {restaurant.restaurant.serie.nom}
                        </Text>
                        <View
                            style={{
                                height: 25,
                                width: 25,
                                backgroundColor: COLORS.blue,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>
                                +
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <SafeAreaView
            style={{ flex: 1 }}>
            <View style={style.container}>
                <View style={style.header}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>this is</Text>
                        <Text style={{ fontSize: 38, color: COLORS.blue, fontWeight: 'bold' }}>
                            FUR
                        </Text>
                    </View>
                </View>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 10,
                        paddingBottom: 50,
                    }}
                    numColumns={2}
                    data={restaurants}
                    renderItem={({ item }) => {
                        return <Card restaurant={item} />;
                    }}
                />
                <View style={style.NavContainer}>
                    <View style={style.NavBar}>
                        <Pressable onPress={() => navigation.navigate(("Home"))}
                            style={style.IconBeahve}
                            android_ripple={{ borderless: true, radius: 50 }}>
                            <AntDesign name="bars" size={24} color="black" />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate(("Nearby"))}
                            style={style.IconBeahve}
                            android_ripple={{ borderless: true, radius: 50 }}>
                            <Feather name="map-pin" size={24} color="black" />
                        </Pressable>
                        <Pressable
                            onPress={() => navigation.navigate(("FilterScreen"))}
                            style={style.IconBeahve}
                            android_ripple={{ borderless: true, radius: 50 }}>
                            <AntDesign name="filter" size={24} color="black" />
                        </Pressable>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    card: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: COLORS.dark,
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
    },
    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40,
    },
    IconBeahve: {
        padding: 14,
    },
});
export default Home;
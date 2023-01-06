import React,{useState,useEffect} from 'react';
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
import COLORS from '../const/colors';
const width = Dimensions.get('window').width / 2 - 30;
import { Picker } from '@react-native-picker/picker';



const CityFilter = ({ navigation, route }) => {
    const [selectedCity, setSelectedCity] = useState('');
    const [restaurants, setrestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants); 

    const handleCityChange = (city) => {
        setSelectedCity(city);
        setFilteredRestaurants(
            restaurants.filter((restaurant) => restaurant.restaurant.zone.ville.nom === city)
        );
    };
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get('http://192.168.137.1:8080/RestaurantWebWS/restaurant/all);
        //         setrestaurants(response.data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        // fetchData();
        setrestaurants([
            {
                "restaurant": {
                    "id": 0,
                    "nom": "Chez ALI 1",
                    "adresse": "42 Rue de la LibertÃ©, Marrakech",
                    "description": "Restaurant Traditionnel Marocain",
                    "latitude": 31.6354,
                    "longitude": -8.01204,
                    "heure_open": "8:00",
                    "heure_close": "00:00",
                    "weekend": false,
                    "categorie": {
                        "id": 4,
                        "type": "Traditionnel"
                    },
                    "serie": {
                        "id": 6,
                        "nom": "Chez ALI"
                    },
                    "zone": {
                        "id": 2,
                        "nom": "gueliz",
                        "ville": {
                            "id": 1,
                            "nom": "marrakech"
                        }
                    }
                },
                "photos": [
                    {
                        "id": 1,
                        "url": "R1P1.jpg",
                        "restaurant": {
                            "id": 1,
                            "nom": "Chez ALI 1",
                            "adresse": "42 Rue de la LibertÃ©, Marrakech",
                            "description": "Restaurant Traditionnel Marocain",
                            "latitude": 31.6354,
                            "longitude": -8.01204,
                            "heure_open": "8:00",
                            "heure_close": "00:00",
                            "weekend": false,
                            "categorie": {
                                "id": 4,
                                "type": "Traditionnel"
                            },
                            "serie": {
                                "id": 6,
                                "nom": "Chez ALI"
                            },
                            "zone": {
                                "id": 2,
                                "nom": "gueliz",
                                "ville": {
                                    "id": 1,
                                    "nom": "marrakech"
                                }
                            }
                        }
                    },
                    {
                        "id": 2,
                        "url": "R1P2.jpg",
                        "restaurant": {
                            "id": 1,
                            "nom": "Chez ALI 1",
                            "adresse": "42 Rue de la LibertÃ©, Marrakech",
                            "description": "Restaurant Traditionnel Marocain",
                            "latitude": 31.6354,
                            "longitude": -8.01204,
                            "heure_open": "8:00",
                            "heure_close": "00:00",
                            "weekend": false,
                            "categorie": {
                                "id": 4,
                                "type": "Traditionnel"
                            },
                            "serie": {
                                "id": 6,
                                "nom": "Chez ALI"
                            },
                            "zone": {
                                "id": 2,
                                "nom": "gueliz",
                                "ville": {
                                    "id": 1,
                                    "nom": "marrakech"
                                }
                            }
                        }
                    },
                    {
                        "id": 3,
                        "url": "R1P3.jpg",
                        "restaurant": {
                            "id": 1,
                            "nom": "Chez ALI 1",
                            "adresse": "42 Rue de la LibertÃ©, Marrakech",
                            "description": "Restaurant Traditionnel Marocain",
                            "latitude": 31.6354,
                            "longitude": -8.01204,
                            "heure_open": "8:00",
                            "heure_close": "00:00",
                            "weekend": false,
                            "categorie": {
                                "id": 4,
                                "type": "Traditionnel"
                            },
                            "serie": {
                                "id": 6,
                                "nom": "Chez ALI"
                            },
                            "zone": {
                                "id": 2,
                                "nom": "gueliz",
                                "ville": {
                                    "id": 1,
                                    "nom": "marrakech"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "restaurant": {
                    "id": 1,
                    "nom": "Mc Donalds gueliz",
                    "adresse": "Rue el Imam Malik, Marrakech",
                    "description": "FastFood Americain",
                    "latitude": 31.6337,
                    "longitude": -8.00932,
                    "heure_open": "6:00",
                    "heure_close": "02:00",
                    "weekend": false,
                    "categorie": {
                        "id": 1,
                        "type": "FastFood"
                    },
                    "serie": {
                        "id": 1,
                        "nom": "McDonalds"
                    },
                    "zone": {
                        "id": 2,
                        "nom": "gueliz",
                        "ville": {
                            "id": 1,
                            "nom": "marrakech"
                        }
                    }
                },
                "photos": [
                    {
                        "id": 4,
                        "url": "R2P1.jpg",
                        "restaurant": {
                            "id": 2,
                            "nom": "Mc Donalds gueliz",
                            "adresse": "Rue el Imam Malik, Marrakech",
                            "description": "FastFood Americain",
                            "latitude": 31.6337,
                            "longitude": -8.00932,
                            "heure_open": "6:00",
                            "heure_close": "02:00",
                            "weekend": false,
                            "categorie": {
                                "id": 1,
                                "type": "FastFood"
                            },
                            "serie": {
                                "id": 1,
                                "nom": "McDonalds"
                            },
                            "zone": {
                                "id": 2,
                                "nom": "gueliz",
                                "ville": {
                                    "id": 1,
                                    "nom": "marrakech"
                                }
                            }
                        }
                    },
                    {
                        "id": 5,
                        "url": "R2P2.jpg",
                        "restaurant": {
                            "id": 2,
                            "nom": "Mc Donalds gueliz",
                            "adresse": "Rue el Imam Malik, Marrakech",
                            "description": "FastFood Americain",
                            "latitude": 31.6337,
                            "longitude": -8.00932,
                            "heure_open": "6:00",
                            "heure_close": "02:00",
                            "weekend": false,
                            "categorie": {
                                "id": 1,
                                "type": "FastFood"
                            },
                            "serie": {
                                "id": 1,
                                "nom": "McDonalds"
                            },
                            "zone": {
                                "id": 2,
                                "nom": "gueliz",
                                "ville": {
                                    "id": 1,
                                    "nom": "marrakech"
                                }
                            }
                        }
                    },
                    {
                        "id": 6,
                        "url": "R2P3.jpg",
                        "restaurant": {
                            "id": 2,
                            "nom": "Mc Donalds gueliz",
                            "adresse": "Rue el Imam Malik, Marrakech",
                            "description": "FastFood Americain",
                            "latitude": 31.6337,
                            "longitude": -8.00932,
                            "heure_open": "6:00",
                            "heure_close": "02:00",
                            "weekend": false,
                            "categorie": {
                                "id": 1,
                                "type": "FastFood"
                            },
                            "serie": {
                                "id": 1,
                                "nom": "McDonalds"
                            },
                            "zone": {
                                "id": 2,
                                "nom": "gueliz",
                                "ville": {
                                    "id": 1,
                                    "nom": "marrakech"
                                }
                            }
                        }
                    }
                ]
            }
        ])
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
                        {restaurant.restaurant.photos && restaurant.restaurant.photos.length > 0 ? (
                            <Image
                                source={restaurant.photos[0].url}
                                style={{ flex: 1, resizeMode: 'contain' }}
                            />
                        ) : null}
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
        <View>
            <Picker
                selectedValue={selectedCity}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue) => handleCityChange(itemValue)}
            >
                <Picker.Item label="All Cities" value="" />
                <Picker.Item label="Marrakech" value="marrakech" />
                <Picker.Item label="Casablanca" value="casablanca" />
                <Picker.Item label="Rabat" value="rabat" />
                <Picker.Item label="Tanger" value="tanger" />
            </Picker>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={filteredRestaurants}
                renderItem={({ item }) => {
                    return <Card restaurant={item} />;
                }}
            />
        </View>
    );
};

export default CityFilter;
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
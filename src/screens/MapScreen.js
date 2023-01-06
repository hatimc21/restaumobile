import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get("screen");
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
import axios from 'axios';


const MapScreen = ({ navigation, route }) => {
    const [restaurants, setrestaurants] = useState([])
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.137.1:8080/RestaurantWebWS/restaurant/all');
                setrestaurants(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        // setrestaurants([
        //     {
        //         "restaurant": {
        //             "id": 0,
        //             "nom": "Chez ALI 1",
        //             "adresse": "42 Rue de la LibertÃ©, Marrakech",
        //             "description": "Restaurant Traditionnel Marocain",
        //             "latitude": 31.6354,
        //             "longitude": -8.01204,
        //             "heure_open": "8:00",
        //             "heure_close": "00:00",
        //             "weekend": false,
        //             "categorie": {
        //                 "id": 4,
        //                 "type": "Traditionnel"
        //             },
        //             "serie": {
        //                 "id": 6,
        //                 "nom": "Chez ALI"
        //             },
        //             "zone": {
        //                 "id": 2,
        //                 "nom": "gueliz",
        //                 "ville": {
        //                     "id": 1,
        //                     "nom": "marrakech"
        //                 }
        //             }
        //         },
        //         "photos": [
        //             {
        //                 "id": 1,
        //                 "url": "R1P1.jpg",
        //                 "restaurant": {
        //                     "id": 1,
        //                     "nom": "Chez ALI 1",
        //                     "adresse": "42 Rue de la LibertÃ©, Marrakech",
        //                     "description": "Restaurant Traditionnel Marocain",
        //                     "latitude": 31.6354,
        //                     "longitude": -8.01204,
        //                     "heure_open": "8:00",
        //                     "heure_close": "00:00",
        //                     "weekend": false,
        //                     "categorie": {
        //                         "id": 4,
        //                         "type": "Traditionnel"
        //                     },
        //                     "serie": {
        //                         "id": 6,
        //                         "nom": "Chez ALI"
        //                     },
        //                     "zone": {
        //                         "id": 2,
        //                         "nom": "gueliz",
        //                         "ville": {
        //                             "id": 1,
        //                             "nom": "marrakech"
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 "id": 2,
        //                 "url": "R1P2.jpg",
        //                 "restaurant": {
        //                     "id": 1,
        //                     "nom": "Chez ALI 1",
        //                     "adresse": "42 Rue de la LibertÃ©, Marrakech",
        //                     "description": "Restaurant Traditionnel Marocain",
        //                     "latitude": 31.6354,
        //                     "longitude": -8.01204,
        //                     "heure_open": "8:00",
        //                     "heure_close": "00:00",
        //                     "weekend": false,
        //                     "categorie": {
        //                         "id": 4,
        //                         "type": "Traditionnel"
        //                     },
        //                     "serie": {
        //                         "id": 6,
        //                         "nom": "Chez ALI"
        //                     },
        //                     "zone": {
        //                         "id": 2,
        //                         "nom": "gueliz",
        //                         "ville": {
        //                             "id": 1,
        //                             "nom": "marrakech"
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 "id": 3,
        //                 "url": "R1P3.jpg",
        //                 "restaurant": {
        //                     "id": 1,
        //                     "nom": "Chez ALI 1",
        //                     "adresse": "42 Rue de la LibertÃ©, Marrakech",
        //                     "description": "Restaurant Traditionnel Marocain",
        //                     "latitude": 31.6354,
        //                     "longitude": -8.01204,
        //                     "heure_open": "8:00",
        //                     "heure_close": "00:00",
        //                     "weekend": false,
        //                     "categorie": {
        //                         "id": 4,
        //                         "type": "Traditionnel"
        //                     },
        //                     "serie": {
        //                         "id": 6,
        //                         "nom": "Chez ALI"
        //                     },
        //                     "zone": {
        //                         "id": 2,
        //                         "nom": "gueliz",
        //                         "ville": {
        //                             "id": 1,
        //                             "nom": "marrakech"
        //                         }
        //                     }
        //                 }
        //             }
        //         ]
        //     },
        //     {
        //         "restaurant": {
        //             "id": 1,
        //             "nom": "Mc Donalds gueliz",
        //             "adresse": "Rue el Imam Malik, Marrakech",
        //             "description": "FastFood Americain",
        //             "latitude": 31.6337,
        //             "longitude": -8.00932,
        //             "heure_open": "6:00",
        //             "heure_close": "02:00",
        //             "weekend": false,
        //             "categorie": {
        //                 "id": 1,
        //                 "type": "FastFood"
        //             },
        //             "serie": {
        //                 "id": 1,
        //                 "nom": "McDonalds"
        //             },
        //             "zone": {
        //                 "id": 2,
        //                 "nom": "gueliz",
        //                 "ville": {
        //                     "id": 1,
        //                     "nom": "marrakech"
        //                 }
        //             }
        //         },
        //         "photos": [
        //             {
        //                 "id": 4,
        //                 "url": "R2P1.jpg",
        //                 "restaurant": {
        //                     "id": 2,
        //                     "nom": "Mc Donalds gueliz",
        //                     "adresse": "Rue el Imam Malik, Marrakech",
        //                     "description": "FastFood Americain",
        //                     "latitude": 31.6337,
        //                     "longitude": -8.00932,
        //                     "heure_open": "6:00",
        //                     "heure_close": "02:00",
        //                     "weekend": false,
        //                     "categorie": {
        //                         "id": 1,
        //                         "type": "FastFood"
        //                     },
        //                     "serie": {
        //                         "id": 1,
        //                         "nom": "McDonalds"
        //                     },
        //                     "zone": {
        //                         "id": 2,
        //                         "nom": "gueliz",
        //                         "ville": {
        //                             "id": 1,
        //                             "nom": "marrakech"
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 "id": 5,
        //                 "url": "R2P2.jpg",
        //                 "restaurant": {
        //                     "id": 2,
        //                     "nom": "Mc Donalds gueliz",
        //                     "adresse": "Rue el Imam Malik, Marrakech",
        //                     "description": "FastFood Americain",
        //                     "latitude": 31.6337,
        //                     "longitude": -8.00932,
        //                     "heure_open": "6:00",
        //                     "heure_close": "02:00",
        //                     "weekend": false,
        //                     "categorie": {
        //                         "id": 1,
        //                         "type": "FastFood"
        //                     },
        //                     "serie": {
        //                         "id": 1,
        //                         "nom": "McDonalds"
        //                     },
        //                     "zone": {
        //                         "id": 2,
        //                         "nom": "gueliz",
        //                         "ville": {
        //                             "id": 1,
        //                             "nom": "marrakech"
        //                         }
        //                     }
        //                 }
        //             },
        //             {
        //                 "id": 6,
        //                 "url": "R2P3.jpg",
        //                 "restaurant": {
        //                     "id": 2,
        //                     "nom": "Mc Donalds gueliz",
        //                     "adresse": "Rue el Imam Malik, Marrakech",
        //                     "description": "FastFood Americain",
        //                     "latitude": 31.6337,
        //                     "longitude": -8.00932,
        //                     "heure_open": "6:00",
        //                     "heure_close": "02:00",
        //                     "weekend": false,
        //                     "categorie": {
        //                         "id": 1,
        //                         "type": "FastFood"
        //                     },
        //                     "serie": {
        //                         "id": 1,
        //                         "nom": "McDonalds"
        //                     },
        //                     "zone": {
        //                         "id": 2,
        //                         "nom": "gueliz",
        //                         "ville": {
        //                             "id": 1,
        //                             "nom": "marrakech"
        //                         }
        //                     }
        //                 }
        //             }
        //         ]
        //     }
        // ])
    }, []);

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                    style={styles.map}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        pinColor="blue"
                        style={{ height: 5, width: 5 }}
                    />
                    {restaurants &&
                        restaurants.map((restaurant, index) => (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: restaurant.restaurant.latitude,
                                    longitude: restaurant.restaurant.longitude,
                                }}
                                title={restaurant.restaurant.nom}
                            />
                        ))}
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});


export default MapScreen;

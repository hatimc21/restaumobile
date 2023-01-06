import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get("screen");
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

const Details = ({ route }) => {
    const [location, setLocation] = useState(null);
    const { restaurant } = route.params;
    const [restaurantj, setrestaurantj] = useState(restaurant)

    useEffect(() => {
        //     (async () => {
        //         let { status } = await Location.requestForegroundPermissionsAsync();
        //         if (status !== 'granted') {
        //             setErrorMsg('Permission to access location was denied');
        //             return;
        //         }
        //         let location = await Location.getCurrentPositionAsync({});
        //         setLocation(location);
        //     })();
        //     // const fetchData = async () => {
        //     //     try {
        //     //         const response = await axios.get('http://192.168.137.1:8080/RestaurantWebWS/restaurant/all);
        //     //         setrestaurants(response.data);
        //     //     } catch (error) {
        //     //         console.error(error);
        //     //     }
        //     // };
        //     // fetchData();
        //     setrestaurant(
        //         {
        //             "restaurant": {
        //                 "id": 0,
        //                 "nom": "Chez ALI 1",
        //                 "adresse": "42 Rue de la LibertÃ©, Marrakech",
        //                 "description": "Restaurant Traditionnel Marocain",
        //                 "latitude": 31.6354,
        //                 "longitude": -8.01204,
        //                 "heure_open": "8:00",
        //                 "heure_close": "00:00",
        //                 "weekend": false,
        //                 "categorie": {
        //                     "id": 4,
        //                     "type": "Traditionnel"
        //                 },
        //                 "serie": {
        //                     "id": 6,
        //                     "nom": "Chez ALI"
        //                 },
        //                 "zone": {
        //                     "id": 2,
        //                     "nom": "gueliz",
        //                     "ville": {
        //                         "id": 1,
        //                         "nom": "marrakech"
        //                     }
        //                 }
        //             },
        //             "photos": [
        //                 {
        //                     "id": 1,
        //                     "url": "R1P1.jpg",
        //                     "restaurant": {
        //                         "id": 1,
        //                         "nom": "Chez ALI 1",
        //                         "adresse": "42 Rue de la LibertÃ©, Marrakech",
        //                         "description": "Restaurant Traditionnel Marocain",
        //                         "latitude": 31.6354,
        //                         "longitude": -8.01204,
        //                         "heure_open": "8:00",
        //                         "heure_close": "00:00",
        //                         "weekend": false,
        //                         "categorie": {
        //                             "id": 4,
        //                             "type": "Traditionnel"
        //                         },
        //                         "serie": {
        //                             "id": 6,
        //                             "nom": "Chez ALI"
        //                         },
        //                         "zone": {
        //                             "id": 2,
        //                             "nom": "gueliz",
        //                             "ville": {
        //                                 "id": 1,
        //                                 "nom": "marrakech"
        //                             }
        //                         }
        //                     }
        //                 },
        //                 {
        //                     "id": 2,
        //                     "url": "R1P2.jpg",
        //                     "restaurant": {
        //                         "id": 1,
        //                         "nom": "Chez ALI 1",
        //                         "adresse": "42 Rue de la LibertÃ©, Marrakech",
        //                         "description": "Restaurant Traditionnel Marocain",
        //                         "latitude": 31.6354,
        //                         "longitude": -8.01204,
        //                         "heure_open": "8:00",
        //                         "heure_close": "00:00",
        //                         "weekend": false,
        //                         "categorie": {
        //                             "id": 4,
        //                             "type": "Traditionnel"
        //                         },
        //                         "serie": {
        //                             "id": 6,
        //                             "nom": "Chez ALI"
        //                         },
        //                         "zone": {
        //                             "id": 2,
        //                             "nom": "gueliz",
        //                             "ville": {
        //                                 "id": 1,
        //                                 "nom": "marrakech"
        //                             }
        //                         }
        //                     }
        //                 },
        //                 {
        //                     "id": 3,
        //                     "url": "R1P3.jpg",
        //                     "restaurant": {
        //                         "id": 1,
        //                         "nom": "Chez ALI 1",
        //                         "adresse": "42 Rue de la LibertÃ©, Marrakech",
        //                         "description": "Restaurant Traditionnel Marocain",
        //                         "latitude": 31.6354,
        //                         "longitude": -8.01204,
        //                         "heure_open": "8:00",
        //                         "heure_close": "00:00",
        //                         "weekend": false,
        //                         "categorie": {
        //                             "id": 4,
        //                             "type": "Traditionnel"
        //                         },
        //                         "serie": {
        //                             "id": 6,
        //                             "nom": "Chez ALI"
        //                         },
        //                         "zone": {
        //                             "id": 2,
        //                             "nom": "gueliz",
        //                             "ville": {
        //                                 "id": 1,
        //                                 "nom": "marrakech"
        //                             }
        //                         }
        //                     }
        //                 }
        //             ]
        //         }
        //     )
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
        console.log(restaurantj)
    }, []);
    const renderItem = ({ item }) => {
        return (
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.url }} style={styles.image} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{restaurant.nom}</Text>
            <Text style={styles.description}>{restaurant.description}</Text>
            {location ? (
                <View style={styles.mapContainer}>
                    <Text style={{marginleft: 20}}>position in map</Text>
                    <MapView
                        style={styles.map}
                        provider={MapView.PROVIDER_OPENSTREETMAP}
                        initialRegion={{
                            latitude: restaurant.latitude,
                            longitude: restaurant.longitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }}
                    >
                        <Marker
                                key={restaurant.id}
                                coordinate={{
                                    latitude: restaurant.latitude,
                                    longitude: restaurant.longitude,
                                }}
                                title={restaurant.nom}
                            />
                    </MapView>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
            {/* <FlatList
                data={restaurant.photos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
            />  */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        marginVertical: 10,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    map: {
        flex: 1,
    },
    mapContainer: {
        width: '90%',
        height: 200,
        
    },
});

export default Details;

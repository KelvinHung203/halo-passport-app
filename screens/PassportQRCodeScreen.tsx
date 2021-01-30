import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { View } from '../components/Themed';
import QRCode from 'react-native-qrcode-svg';

const backgroundImage = '../assets/images/blockchain_page.png'

export default function PassportQRCodeScreen() {

    return (
        <View style={styles.container}>
            <ImageBackground source={require(backgroundImage)} style={styles.image}>
                <Text style={styles.title}>This is your Halo Passport</Text>
                <Text style={styles.title}>Present This Code when Boarding</Text>
                <QRCode
                    value="https://github.com/Halo-Passport/halo-passport-app"
                    size={70}
                    onError={(e: any) => alert(e)}
                />
            </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

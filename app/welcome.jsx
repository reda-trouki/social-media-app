import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";

const welcome = () =>{
    return (
        <ScreenWrapper bg={'#fff'}>
            <StatusBar style="dark" />
            <View style={styles.container}>
                { /* wekcome image */}
                <Image source={require('../assets/images/welcome.jpg')} style={styles.welcomeImage} />
                { /* welcome text */}
                <View style={{gap: 20}}>
                    <Text style={styles.title} >LinkUp!</Text>
                    <Text style={styles.punchLine}>Where Every Thought Finds a Home and Every Image Tells a Story</Text>
                </View>
                <View style = {styles.footer}>
                    <Button
                        title="Getting Started"
                        buttonStyle={{marginHorizontal: wp(3)}}
                        onPress={() => {}}
                    />
                    <View style={styles.bottomTextContainer} >
                        <Text style={styles.loginText} >Already have an account!</Text>
                        <Pressable>
                            <Text style={[styles.loginText, {color: theme.colors.primary, fontWeight: theme.fonts.semiBold}]}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingHorizontal: wp(4),
    },
    welcomeImage: {
        width: wp(90),
        height: wp(90),
        alignSelf: 'center',
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: theme.fonts.extraBold,
    },
    punchLine: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text,
    },
    footer: {
        gap: 30,
        width: '100%',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    loginText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
    }
})

export default welcome;
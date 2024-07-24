import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

const index = () =>{
    const router = useRouter();
    return (
        <ScreenWrapper>
            <Text>Hello World</Text>
            <Button title="go to welcome page" onPress={() => router.push('welcome') } />
        </ScreenWrapper>
    )
}

export default index;
import { View, Text } from "react-native";
import Blocks from "../../styles/styles";

const MainPage = () => {
    return(
        <View style={Blocks.page}>
            <Text style={{color: "#D9D9D9"}} >Главная страница сайта!</Text>
        </View>
    );
};

export default MainPage;
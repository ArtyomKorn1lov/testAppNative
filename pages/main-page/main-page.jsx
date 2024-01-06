import { View, Text } from "react-native";
import PageContainer from "../../styles/styles";

const MainPage = () => {
    return(
        <View style={PageContainer.container}>
            <Text style={{color: "#D9D9D9"}} >Главная страница сайта!</Text>
        </View>
    );
};

export default MainPage;
import { View, Text } from "react-native";
import PageContainer from "../../styles/styles";

const NewsPage = () => {
    return(
        <View style={PageContainer.container}>
            <Text style={{color: "#D9D9D9"}} >Страница новостей сайта!</Text>
        </View>
    );
};

export default NewsPage;
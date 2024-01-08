import { View, Text } from "react-native";
import Blocks from "../../styles/styles";
import NewsCardsComponent from "../../components/news-card-component/news-card-component";

const NewsPage = () => {
    return(
        <View style={Blocks.page}>
            <NewsCardsComponent />
        </View>
    );
};

export default NewsPage;
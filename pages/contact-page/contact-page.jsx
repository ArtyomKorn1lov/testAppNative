import { View, Text } from "react-native";
import PageContainer from "../../styles/styles";

const ContactPage = () => {
    return(
        <View style={PageContainer.container}>
            <Text style={{color: "#D9D9D9"}} >Страница контактов сайта!</Text>
        </View>
    );
};

export default ContactPage;
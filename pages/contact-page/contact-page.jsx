import { View, Text } from "react-native";
import Blocks from "../../styles/styles";

const ContactPage = () => {
    return(
        <View style={Blocks.page}>
            <Text style={{color: "#D9D9D9"}} >Страница контактов сайта!</Text>
        </View>
    );
};

export default ContactPage;
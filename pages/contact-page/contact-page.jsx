import { View, Text } from "react-native";
import Blocks from "../../styles/styles";
import ContactUsComponent from "../../components/contact-us-component/contact-us-component";

const ContactPage = () => {
    return(
        <View style={Blocks.page}>
            <ContactUsComponent />
        </View>
    );
};

export default ContactPage;
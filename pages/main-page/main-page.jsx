import { View } from "react-native";
import Blocks from "../../styles/styles";
import PricingsComponent from "../../components/pricings-components/pricings-components";
import { Text } from '@rneui/themed';
import ToggleSwitchComponent from "../../components/toggle-switch-component/toggle-switch-component";
import { Card } from "@rneui/themed";
import NewsCadsStyles from "../../components/news-card-component/news-card-styles";
import PartnersComponent from "../../components/partners-component/partners-component";
import { useState } from "react";

const MainPage = () => {
    const [isChecked, setChecked] = useState(false);

    return(
        <View style={Blocks.page}>
            <Text style={Blocks.title} h3>Добро пожаловать!</Text>
            <Card.Divider style={NewsCadsStyles.divider}/>
            <View style={Blocks.workContainer}>
                <Text style={NewsCadsStyles.fonts} h4>
                    {isChecked ? ("Предложения") : ("Партнёры") }
                </Text>
                <ToggleSwitchComponent isChecked={isChecked} setChecked={(value) => setChecked(value)} />
            </View>
            {isChecked ? (<PricingsComponent />) : (<PartnersComponent />)}
        </View>
    );
};

export default MainPage;
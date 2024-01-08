import React from 'react';
import { Switch } from '@rneui/themed';
import { View } from 'react-native';

const ToggleSwitchComponent = ({ isChecked, setChecked }) => {

    return (
        <View style={{
            margin: 10,
        }}>
            <Switch
                color='#ff0a0a'
                value={isChecked}
                onValueChange={(value) => setChecked(value)}
            />
        </View>
    );
};

export default ToggleSwitchComponent;
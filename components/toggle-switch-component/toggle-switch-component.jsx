import React, { useState } from 'react';
import { Switch } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

const ToggleSwitchComponent = ({isChecked, setChecked}) => {

    return (
        <View style={styles.view}>
            <Switch
            color='#ff0a0a'
                value={isChecked}
                onValueChange={(value) => setChecked(value)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
});

export default ToggleSwitchComponent;
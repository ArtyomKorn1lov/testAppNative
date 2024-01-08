import React from 'react';
import { ScrollView } from 'react-native';
import { PricingCard, lightColors, darkColors } from '@rneui/themed';

const PricingsComponent = () => {
return (
  <>
    <ScrollView>
      <PricingCard
        color={lightColors.primary}
        title="Старт"
        price="15 000 ₽"
        info={['10 пользователей', 'Базовая поддержка', 'Все возможности ядра']}
        button={{ title: 'Получить сейчас' }}
      />
      <PricingCard
        color={lightColors.secondary}
        title="Эффект"
        price="50 000 ₽"
        info={['50 пользователей', 'Базовая поддержка', 'Все возможности ядра']}
        button={{ title: 'Получить сейчас' }}
      />
      <PricingCard
        color={darkColors.secondary}
        title="Энтерпрайз"
        price="100 000 ₽"
        info={['100 пользователей', 'Поддержка один на один', 'Все возможности ядра']}
        button={{ title: 'Получить сейчас' }}
      />
    </ScrollView>
  </>
);
};

export default PricingsComponent;
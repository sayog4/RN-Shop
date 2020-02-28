import React from 'react';

import { Platform } from 'react-native';

import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const CustomButton = (props) => {
  return (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={ Platform.OS === 'android' ? '#fff' : '#6c5ce7' }  />
  );
}

export default CustomButton;
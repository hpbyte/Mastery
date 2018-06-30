import { Platform } from 'react-native';

export const lock = Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'
export const user = Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'
export const search = Platform.OS === 'ios' ? 'ios-search' : 'md-search'
export const info = Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'
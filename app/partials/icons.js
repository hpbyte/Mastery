import { Platform } from 'react-native';

export const lock = Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'
export const info = Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'
export const play = Platform.OS === 'ios' ? 'ios-play' : 'md-play'
export const flag = Platform.OS === 'ios' ? 'ios-flag' : 'md-flag'
export const medal = Platform.OS === 'ios' ? 'ios-medal' : 'md-medal'
export const podi = Platform.OS === 'ios' ? 'ios-podium' : 'md-podium'
export const user = Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'
export const search = Platform.OS === 'ios' ? 'ios-search' : 'md-search'
export const exit = Platform.OS === 'ios' ? 'ios-exit-outline' : 'md-exit'
export const back = Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'
export const front = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'
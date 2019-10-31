import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unreconized WebSocket connection option(s)'
]);

export default function App() {
  return (
    <Routes />
  );
}

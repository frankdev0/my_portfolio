import * as React from 'react';

interface TiltOptions {
  reverse?: boolean;
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  transition?: boolean;
  axis?: null | 'x' | 'y';
  reset?: boolean;
  easing?: string;
}

interface TiltProps {
  className?: string;
  options?: TiltOptions;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default class Tilt extends React.Component<TiltProps> {}
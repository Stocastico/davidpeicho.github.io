import {
  SVGBrain,
  SVGCubes,
  SVGGamepad,
  SVGVRHeadset
} from '@utils/icons';

/* ////////////////////////////////////////////////////////////////////////////
                                CARD COMPONENT
//////////////////////////////////////////////////////////////////////////// */

export const CARD_MIN_HEIGHT = 60;

/* ////////////////////////////////////////////////////////////////////////////
                                COLORS
//////////////////////////////////////////////////////////////////////////// */

export const Colors = {
  Text: '#303030', // Gray
  Primary: '#353e44', // Dark Blue-Grayish
  Secondary: '#ef495c', // Red
  Third: '#007acc' // Light Blue
};

export const TagToColor = {
  graphics: '#3498db',
  games: '#9bca2f',
  vr: '#f5b82a',
  ai: '#9b59b6'
};

export const TagToIcon = {
  graphics: SVGCubes,
  games: SVGGamepad,
  vr: SVGVRHeadset,
  ai: SVGBrain
};

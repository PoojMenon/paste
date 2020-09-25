import * as PropTypes from 'prop-types';
import {WidthOptions, isWidthTokenProp} from '@twilio-paste/style-props';

export type AlignmentOptions = 'left' | 'center' | 'right';
export type TableVariants = 'auto' | 'fixed';
export type VerticalAlignmentOptions = 'top' | 'middle' | 'bottom';

export interface TableProps {
  children: NonNullable<React.ReactNode>;
  variant?: TableVariants;
}

export const TablePropTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['auto', 'fixed']) as any,
};

export interface THeadProps {
  children: NonNullable<React.ReactNode>;
}

export const THeadPropTypes = {
  children: PropTypes.node.isRequired,
};

export interface TBodyProps {
  children: NonNullable<React.ReactNode>;
}

export const TBodyPropTypes = {
  children: PropTypes.node.isRequired,
};

export interface TrProps {
  children: NonNullable<React.ReactNode>;
  verticalAlignment?: VerticalAlignmentOptions;
}

export const TrPropTypes = {
  children: PropTypes.node.isRequired,
  verticalAlignment: PropTypes.oneOf(['top', 'middle', 'bottom']) as any,
};

export interface ThProps {
  alignment?: AlignmentOptions;
  children: NonNullable<React.ReactNode>;
  width?: WidthOptions;
}

export const ThPropTypes = {
  alignment: PropTypes.oneOf(['left', 'center', 'right']) as any,
  children: PropTypes.node.isRequired,
  width: isWidthTokenProp,
};

export interface TdProps {
  alignment?: AlignmentOptions;
  children: NonNullable<React.ReactNode>;
  width?: WidthOptions;
}

export const TdPropTypes = {
  alignment: PropTypes.oneOf(['left', 'center', 'right']) as any,
  children: PropTypes.node.isRequired,
  width: isWidthTokenProp,
};

export interface TFootProps {
  children: NonNullable<React.ReactNode>;
}

export const TFootPropTypes = {
  children: PropTypes.node.isRequired,
};

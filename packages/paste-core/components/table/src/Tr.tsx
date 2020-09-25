import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {TrProps, TrPropTypes} from './types';

const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(({verticalAlignment = 'middle', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="tr"
      borderStyle="solid"
      borderColor="colorBorderLighter"
      borderWidth="borderWidth0"
      borderBottomWidth="borderWidth10"
      verticalAlign={verticalAlignment}
      _even={{backgroundColor: 'colorBackgroundRowStriped'}}
    />
  );
});

Tr.displayName = 'Tr';

if (process.env.NODE_ENV === 'development') {
  Tr.propTypes = TrPropTypes;
}

export {Tr};

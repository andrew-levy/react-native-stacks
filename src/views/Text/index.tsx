import React from 'react';
import styled from 'styled-components';
import { UIColor } from '../../themes/colors';
import { Fonts } from '../../themes/fonts';
import { getPaddingFromProps } from '../../styleProps/padding';
import { getShadowFromProps } from '../../styleProps/shadow';
import {
  VerticalAlignment,
  HorizontalAlignment,
  Padding,
  Shadow,
} from '../../types/stylePropTypes';

const StyledText = styled.Text`
  ${({
    foregroundColor,
    fontSize,
    fontWeight,
    font,
    alignment,
    buttonChild,
    padding,
    cornerRadius,
    shadow,
  }) =>
    `color: ${
      foregroundColor
        ? foregroundColor || UIColor.black
        : buttonChild
        ? `${UIColor.systemBlue}`
        : UIColor.black
    }
		font-size: ${fontSize ? fontSize : '18'}px;
		font-weight: ${
      fontWeight
        ? Fonts.weights[fontWeight] || Fonts.weights.normal
        : Fonts.weights.normal
    };
		font-family: ${
      font ? Fonts.fonts[font] || Fonts.fonts.system : Fonts.fonts.system
    };
    text-align: ${alignment === 'leading' ? 'left' : 'center'};
    border-radius: ${cornerRadius || 0}px;
    ${getPaddingFromProps(padding)}
    ${getShadowFromProps(shadow)}
    `}
`;

export type TextProps = {
  fontSize?: number;
  foregroundColor?: string;
  fontWeight?: string;
  alignment?: VerticalAlignment | HorizontalAlignment;
  padding?: Padding;
  cornerRadius?: number;
  shadow?: Shadow;
  buttonChild?: boolean;
};

export const Text: React.FC<TextProps> = ({
  fontSize,
  foregroundColor,
  fontWeight,
  alignment,
  padding,
  cornerRadius,
  shadow,
  children,
  buttonChild,
  ...props
}) => {
  return (
    <StyledText
      fontSize={fontSize}
      foregroundColor={foregroundColor}
      fontWeight={fontWeight}
      alignment={alignment}
      padding={padding}
      cornerRadius={cornerRadius}
      shadow={shadow}
      buttonChild={buttonChild}
      {...props}
    >
      {children}
    </StyledText>
  );
};
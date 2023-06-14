// TextBox.tsx
import React from 'react';
import styled from '@emotion/styled';

type TextProps = {
  color?: string;
  margin?: string;
  maxWidthBase?: string;
  maxWidthSm?: string;
  maxWidthMd?: string;
  maxWidthLg?: string;
  maxWidthXl?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSizeBase: string;
  fontSizeSm?: string;
  fontSizeMd?: string;
  fontSizeLg?: string;
  fontSizeXl?: string;
};

const createStyledComponent = (Tag: 'h1' | 'h2' | 'p') => {
  return styled(Tag)<TextProps>`
    color: ${(props) => props.color || 'black'};
    margin: ${(props) => props.margin || '0px'};
    max-width: ${(props) => props.maxWidthBase || '100%'};
    font-family: ${(props) => props.fontFamily || 'sans-serif'};
    font-weight: ${(props) => props.fontWeight || 'normal'};
    font-size: ${(props) => props.fontSizeBase};

    @media (min-width: 640px) {
      font-size: ${(props) => props.fontSizeSm || props.fontSizeBase};
      max-width: ${(props) => props.maxWidthSm || props.maxWidthBase};
    }

    @media (min-width: 768px) {
      font-size: ${(props) => props.fontSizeMd || props.fontSizeBase};
      max-width: ${(props) => props.maxWidthMd || props.maxWidthBase};
    }

    @media (min-width: 1024px) {
      font-size: ${(props) => props.fontSizeLg || props.fontSizeBase};
      max-width: ${(props) => props.maxWidthLg || props.maxWidthBase};
    }

    @media (min-width: 1280px) {
      font-size: ${(props) => props.fontSizeXl || props.fontSizeBase};
      max-width: ${(props) => props.maxWidthXl || props.maxWidthBase};
    }
  `;
};

const StyledH1 = createStyledComponent('h1');
const StyledH2 = createStyledComponent('h2');
const StyledP = createStyledComponent('p');

type TextBoxProps = {
  header: string;
  subheader?: string;
  description: string;
  headerProps?: TextProps;
  subheaderProps?: TextProps;
  descriptionProps?: TextProps;
};

const TextBox: React.FC<TextBoxProps> = ({
  header,
  subheader,
  description,
  headerProps = { fontSizeBase: '1rem' },
  subheaderProps = { fontSizeBase: '0.875rem' },
  descriptionProps = { fontSizeBase: '0.75rem' },
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <StyledH1 {...headerProps}>{header}</StyledH1>
      {subheader && <StyledH2 {...subheaderProps}>{subheader}</StyledH2>}
      <StyledP {...descriptionProps}>{description}</StyledP>
    </div>
  );
};

export default TextBox;





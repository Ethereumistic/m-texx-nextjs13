// TextBlock.tsx

import React from 'react';

type TextProps = {
  text: string;
  fontSize?: number;
  textFont?: string;
  padding?: string;
  color?: string;
  width?: string;
  fontWeight?: number;
  margin?: string;
};

type ListProps = {
  items: string[];
  fontSize?: number;
  textFont?: string;
  padding?: string;
  color?: string;
  width?: string;
  fontWeight?: number;
  margin?: string;
};


export type TextBlockProps = {
  heading?: TextProps;
  subHeading?: TextProps;
  description?: TextProps;
  unorderedList?: ListProps;
  orderedList?: ListProps;
};

const TextBlock: React.FC<TextBlockProps> = ({ heading, subHeading, description, unorderedList, orderedList }) => {
  return (
    <div className="text-center">
      {heading && (
        <h1 style={{ fontSize: heading.fontSize, fontWeight: heading.fontWeight, color: heading.color, width: heading.width }} className={`font-${heading.textFont ?? 'sans'} p-${heading.padding ?? '4'}`}>
          {heading.text}
        </h1>
      )}
      {subHeading && (
        <div style={{ width: subHeading.width, margin: '0 auto' }}>
        <h2 style={{ fontSize: subHeading.fontSize, fontWeight: subHeading.fontWeight, color: subHeading.color, width: subHeading.width }} className={`font-${subHeading.textFont ?? 'serif'} p-${subHeading.padding ?? '2'}`}>
          {subHeading.text}
        </h2>
        </div>
      )}
      {description && (
        <p style={{ fontSize: description.fontSize, fontWeight: description.fontWeight, color: description.color, width: description.width }} className={`font-${description.textFont ?? 'mono'} p-${description.padding ?? '1'}`}>
          {description.text}
        </p>
      )}
      {unorderedList && (
        <ul className={`font-${unorderedList.textFont ?? 'mono'} p-${unorderedList.padding ?? '1'} text-center`}>
          {unorderedList.items.map((item, index) => (
            <li key={index} style={{ fontSize: unorderedList.fontSize, fontWeight: unorderedList.fontWeight, color: unorderedList.color, width: unorderedList.width }}>{item}</li>
          ))}
        </ul>
      )}
      {orderedList && (
        <ol className={`font-${orderedList.textFont ?? 'mono'} p-${orderedList.padding ?? '1'} text-center`}>
          {orderedList.items.map((item, index) => (
            <li key={index} style={{ fontSize: orderedList.fontSize, fontWeight: orderedList.fontWeight, color: orderedList.color, width: orderedList.width }}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
};




export default TextBlock;

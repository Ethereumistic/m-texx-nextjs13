// GridBlock.tsx

import React from 'react';
import TextBlock from '../components/TextBlock';
import { TextBlockProps } from '../components/TextBlock';

type GridBlockProps = {
  blocks: TextBlockProps[];
  grid: number;
};

const GridBlock: React.FC<GridBlockProps> = ({ grid, blocks }) => {
  return (
    <div className={`grid grid-cols-${grid} gap-4`}> {/* Update this line */}
      {blocks.map((block, index) => (
        <TextBlock key={index} {...block} />
      ))}
    </div>
  );
};



export default GridBlock;

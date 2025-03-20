import _ from 'lodash';
import { CSSProperties } from 'react';

interface TextHeroProps {
  data?: any;
  style?: CSSProperties;
}

const TextHero = ({ data, style }: TextTextHeroProps) => {
  const title = _.get(data, 'title', 'Text');

  const newStyle: CSSProperties = {
    ...style,
  };

  return (
    <div style={newStyle} className="text-[#858585]">
      {title} TextHero
    </div>
  );
};

export default TextHero;

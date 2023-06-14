import React from 'react';
import { FaLightbulb } from 'react-icons/fa';


interface BannerPicProps {
  mediaSource: string;
  mediaType: "image" | "video";
  headingText?: string;
  paragraph1Text?: string;
  paragraph2Text?: string;
  paragraphFontSize?: string;
  lightbulbSize?: number;
  lightbulbOpacity?: number;
  buttonText?: string;
  linkUrl?: string;
  height: string;
  showButton?: boolean;
  showText?: boolean;
  zoom?: number;
  navbarHeight?: string;
  headingPaddingTop?: string;
  headingPaddingBottom?: string;
  headingPaddingLeft?: string;
  headingPaddingRight?: string;
  buttonPaddingTop?: string;
  buttonPaddingBottom?: string;
  buttonPaddingLeft?: string;
  buttonPaddingRight?: string;
  headingFontSize?: string;
  buttonFontSize?: string;
}

const BannerPic: React.FC<BannerPicProps> = ({
  mediaSource,
  mediaType,
  headingText,
  paragraph1Text,
  paragraph2Text,
  lightbulbSize = 24,
  lightbulbOpacity = 0,
  buttonText,
  linkUrl,
  height,
  showButton = true,
  showText = true,
  zoom = 1,
  navbarHeight = '0px',
  headingPaddingTop = '0px',
  headingPaddingBottom = '0px',
  headingPaddingLeft = '0px',
  headingPaddingRight = '0px',
  buttonPaddingTop = '0px',
  buttonPaddingBottom = '0px',
  buttonPaddingLeft = '0px',
  buttonPaddingRight = '0px',
  paragraphFontSize = 'text-xl xl:text-x1',
  headingFontSize = '4xl sm:text-2xl xl:text-4xl',
  buttonFontSize = 'text-sm sm:text-base xl:text-sm'
}) => {
  return (
    <div className="relative" style={{height: `calc(${height} - ${navbarHeight})`, marginTop: navbarHeight}}>
    {mediaType === "video" ? (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'brightness(70%)', transform: `scale(${zoom})` }}
      >
        <source src={mediaSource} type="video/mp4" />
      </video>
    ) : (
      <img
        src={mediaSource}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'brightness(70%)', transform: `scale(${zoom})` }}
      />
    )}

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-white text-center flex flex-col justify-center items-center">
        {showText && (
          <div>
            <div className="flex items-center justify-center mb-2">
              <FaLightbulb size={lightbulbSize} style={{ opacity: lightbulbOpacity }} />
            </div>
            <h1 className={`font-bold font-oswald ${headingFontSize}`} style={{paddingTop: headingPaddingTop, paddingBottom: headingPaddingBottom, paddingLeft: headingPaddingLeft, paddingRight: headingPaddingRight}}>
              {headingText}
            </h1>
            {paragraph1Text && <p className={`font-oswald ${paragraphFontSize}`}>{paragraph1Text}</p>}
            {paragraph2Text && <p className={`font-oswald ${paragraphFontSize}`}>{paragraph2Text}</p>}
          </div>
        )}
        {showButton && (
          <a
            href={linkUrl}
            className={`mt-4 inline-block content-end px-6 py-2 bg-transparent text-white border-2 border-white border-solid font-semibold rounded-lg transition-colors duration-300 hover:bg-white hover:text-green-500 ${buttonFontSize}`}
            style={{paddingTop: buttonPaddingTop, paddingBottom: buttonPaddingBottom, paddingLeft: buttonPaddingLeft, paddingRight: buttonPaddingRight}}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  </div>
);
};

export default BannerPic;









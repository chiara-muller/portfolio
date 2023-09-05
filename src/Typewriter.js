import React, { useState, useEffect } from 'react';

const TypewriterSegment = ({ text, delay, fontSize, fontStyle }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  const segmentStyle = {
    fontSize: fontSize || 'inherit',
    fontStyle: fontStyle || 'normal',
  };

  return <span style={segmentStyle}>{currentText}</span>;
};

const Typewriter = ({ segments }) => {
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);

  useEffect(() => {
    if (currentSegmentIndex < segments.length) {
      const timeout = setTimeout(() => {
        setCurrentSegmentIndex(prevIndex => prevIndex + 1);
      }, segments[currentSegmentIndex].text.length * segments[currentSegmentIndex].delay);

      return () => clearTimeout(timeout);
    }
  }, [currentSegmentIndex, segments]);

  return (
    <div>
      {segments.slice(0, currentSegmentIndex).map((segment, index) => (
        <React.Fragment key={index}>
          <TypewriterSegment
            text={segment.text}
            delay={segment.delay}
            fontSize={segment.fontSize}
            fontStyle={segment.fontStyle}
          />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Typewriter;

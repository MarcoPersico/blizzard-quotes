import React, { useEffect, useState } from 'react';

export default function useTypewriter(
  text: string,
  className: string,
  speed: number,
  { speedWriting = speed, styles = className, startingIndex = -10 } = {},
) {
  // start negative to create a delayed effect to offset the initial transition of the slide
  const [charIndex, setCharIndex] = useState(startingIndex);

  useEffect(() => {
    const type = setTimeout(() => {
      if (charIndex < text.length) {
        setCharIndex((i) => i + 1);
      }
    }, speedWriting);

    return () => clearTimeout(type);
  });

  return (
    <p
      className={styles}
    >
      {charIndex > 0 ? text.slice(0, charIndex) : ''}
    </p>
  );
}

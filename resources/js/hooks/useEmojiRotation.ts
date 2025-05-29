import { useState, useEffect } from 'react';

const useEmojiRotation = (emojis, intervalTime) => {
  const [emoji, setEmoji] = useState(emojis[0]);
  let emojiIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      emojiIndex = (emojiIndex + 1) % emojis.length;
      setEmoji(emojis[emojiIndex]);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [emojis, intervalTime]);

  return emoji;
};

export default useEmojiRotation;

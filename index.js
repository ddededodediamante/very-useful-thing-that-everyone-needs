const joinParameters = (...args) => {
  return args.join('');
};

const laughter = function() {
  const laughterEmojis = ['😂','🤣','😆','🤭','😹','😁'];
  const randomIndex = Math.floor(Math.random() * laughterEmojis.length);
  return laughterEmojis[randomIndex];
};

const poop = '💩';

module.exports = {
  joinParameters,
  poop,
  laughter,
};
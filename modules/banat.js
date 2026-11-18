
const banatLines = [
  "Ngumiti ka naman, bagay sa'yo. ❤️",
  "Hindi man ako perfect, pero ikaw ang gusto ko. 😘",
  "Ikaw ang pahinga sa magulong mundo. 💜",
  "May tanong ako: bakit ikaw lagi nasa isip ko?",
  "Kung smile mo ang dahilan, araw-araw akong sasaya."
];

function getRandomBanat() {
  const index = Math.floor(Math.random() * banatLines.length);
  return banatLines[index];
}

module.exports = {
  banatLines,
  getRandomBanat
};

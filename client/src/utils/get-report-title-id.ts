function extractRandomCharsFromUUID(uuid: string): string {
  const randomChars: string[] = [];
  const validChars = /[0-9a-f]/i;

  while (randomChars.length < 5) {
    const randomIndex = Math.floor(Math.random() * uuid.length);
    const char = uuid[randomIndex];

    if (validChars.test(char) && !randomChars.includes(char)) {
      randomChars.push(char);
    }
  }

  return randomChars.join('');
}

export function getReportTitleId(id: string): string {
  return extractRandomCharsFromUUID(id);
}

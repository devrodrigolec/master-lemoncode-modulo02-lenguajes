console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

interface Vocals {
  á: string;
  é: string;
  í: string;
  ó: string;
  ú: string;
}

const vocals: Vocals = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
};

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const normalizeText = (text: string, vocals: Vocals): string => {
  let normalizedTitle: string = "";
  for (const char of text) {
    normalizedTitle += vocals[char as keyof Vocals] ?? char;
  }

  return normalizedTitle.trim().toLowerCase();
};

const isBookRead = (
  books: Book[] | null = [],
  titleToSearch: string | null = ""
): boolean => {
  if (!books || !titleToSearch) return false;
  return books?.some((book) =>
    normalizeText(book.title, vocals) === normalizeText(titleToSearch, vocals)
      ? book.isRead
      : false
  );
};

console.log(isBookRead(books, "harry Potter y la piedra filosofal"));
console.log(isBookRead(books, "cancion de hielo y fuego"));
console.log(isBookRead(books, "los pilares de la tierra"));
console.log(isBookRead(books, "devastación"));
console.log(isBookRead(null, null));
console.log(isBookRead(undefined, undefined));
console.log(isBookRead());

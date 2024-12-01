console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const normalizeText = (text: string = ""): string => {
  const vocals = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
  };

  let normalizedTitle: string = "";
  for (const char of text) {
    for (const vocal in vocals) {
      if (char === vocal) {
        normalizedTitle = normalizedTitle + vocals[vocal];
        return;
      }
    }
    normalizedTitle = normalizedTitle + char;
  }

  return normalizedTitle.trim().toLowerCase();
};

const isBookRead = (
  books: Book[] = [],
  titleToSearch: string = ""
): boolean => {
  return books?.some((book) =>
    normalizeText(book.title) === normalizeText(titleToSearch)
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

export interface Firefly {
  id: number;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

export const fireflies: Firefly[] = [
  { id: 1, size: 3, left: "8%", top: "12%", duration: 28, delay: 0 },
  { id: 2, size: 4, left: "18%", top: "72%", duration: 32, delay: 3 },
  { id: 3, size: 2.5, left: "26%", top: "35%", duration: 24, delay: 6 },
  { id: 4, size: 5, left: "34%", top: "84%", duration: 30, delay: 1 },
  { id: 5, size: 3.5, left: "42%", top: "18%", duration: 36, delay: 4 },
  { id: 6, size: 4, left: "48%", top: "58%", duration: 26, delay: 8 },
  { id: 7, size: 2.8, left: "57%", top: "10%", duration: 34, delay: 2 },
  { id: 8, size: 3.2, left: "64%", top: "76%", duration: 27, delay: 5 },
  { id: 9, size: 5, left: "71%", top: "28%", duration: 31, delay: 9 },
  { id: 10, size: 3.5, left: "78%", top: "62%", duration: 29, delay: 7 },
  { id: 11, size: 4.5, left: "84%", top: "15%", duration: 35, delay: 2 },
  { id: 12, size: 3, left: "92%", top: "80%", duration: 33, delay: 6 },
  { id: 13, size: 2.5, left: "12%", top: "48%", duration: 24, delay: 10 },
  { id: 14, size: 4, left: "24%", top: "92%", duration: 38, delay: 1 },
  { id: 15, size: 5, left: "54%", top: "42%", duration: 28, delay: 4 },
  { id: 16, size: 3.2, left: "66%", top: "6%", duration: 30, delay: 7 },
  { id: 17, size: 4.2, left: "88%", top: "44%", duration: 37, delay: 5 },
  { id: 18, size: 3.5, left: "96%", top: "24%", duration: 32, delay: 8 },
];
import { writable } from "svelte/store";

let images = [];

images.push(
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzg4MzlvOWVvaDI2bnNodnN1am9oaGZhc2oxcnpyYTZqMGJ3dXM2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVzH2XY3Y0Ar6/giphy.gif"
);
images.push(
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JjdW5rd2VpcXN1NjVtMHoweHVwc3B4ZmpyMjQyNTg3bXh2bjNyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13JmpYwu9EsKdy/giphy.gif"
);
images.push(
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2dmc3lob3JmejZkcDF5MmJldzQ4ajRwazI4ejc5Mmk0ZmV4bm1keCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dUQL2bKltOU7cO9Maw/giphy.gif"
);
images.push(
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm1ycWgxbjJqMDhsbXp6a2prdWFjczFnYTJvb29kcDdmdnN4MmNvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SpoV1pB4g7gXvWo3Up/giphy.gif"
);
images.push(
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXZmeXgyaDAxeGsyaGdwY2Z0NTNpZTdzY3N2d2pzYm13emhub2xvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MgXYDOOVCLqii7RVYo/giphy.gif"
);

export const portfolioGifs = writable(images);

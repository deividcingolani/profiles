const data = [
  {
    firstName: "Verónica Álvarez",
    lastName: "Duque",
  },
  {
    firstName: "Martina Victoria ",
    lastName: "Tricarico",
  },
  {
    firstName: "Daniela Luque",
    lastName: "Díaz",
  },
  {
    firstName: "Jorge",
    lastName: "Inda",
  },
  
];

export async function fetchData(options) {
  // Simulate some network latency
  await new Promise((r) => setTimeout(r, 500));

  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
  };
}

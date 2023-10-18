function parseBookOptions(content) {
    const rows = content.split("\n").slice(4, 6);
    const books = rows.map((row) => {
      const columns = row.split("|").slice(1, -1);
      const image = "http" + columns[4].trim().split("http")[1];
      console.log(image);
  
      return {
        name: columns[0].trim(),
        description: columns[1].trim(),
        language: columns[3].trim(),
        imageLink: image,
      };
    });
    return books;
  }
  
  export default parseBookOptions;
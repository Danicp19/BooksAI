function parseBookOptions(content) {
    const rows = content.split("\n").slice(4, 6);
    const books = rows.map((row) => {
      const columns = row.split("|").slice(1, -1);
     console.log(columns)
      return {
        name: columns[0].trim(),
        description: columns[1].trim(),
        language: columns[3].trim(),
      };
    });
    return books;
  }
  
  export default parseBookOptions;
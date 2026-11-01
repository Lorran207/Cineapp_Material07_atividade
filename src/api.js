const FILMES_MOCK = [
  { id: '1', titulo: 'Matrix', ano: 1999, sinopse: 'Um programador descobre a verdade sobre a realidade.' },
  { id: '2', titulo: 'Interestelar', ano: 2014, sinopse: 'Exploradores viajam por um buraco de minhoca no espaço.' },
  { id: '3', titulo: 'O Poderoso Chefão', ano: 1972, sinopse: 'O patriarca de uma dinastia do crime organizado.' },
];

export const buscarFilmes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FILMES_MOCK);
    }, 1000); 
  });
};

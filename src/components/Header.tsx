import { GenreResponseProps } from '../App'

  interface HeaderProps {
    selectedMovieGenre: GenreResponseProps;
  }

export function Header({selectedMovieGenre} : HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedMovieGenre.title}</span></span>
    </header>
  );
}
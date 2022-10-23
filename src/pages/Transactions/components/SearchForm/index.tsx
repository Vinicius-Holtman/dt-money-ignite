import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transaction" />

      <button>
        <MagnifyingGlass size={20} />
        search
      </button>
    </SearchFormContainer>
  )
}
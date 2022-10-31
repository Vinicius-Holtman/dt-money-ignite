import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitted } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })



  function handleSearchTransactions(data: SearchFormInputs) {
    
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
      type="text" 
      placeholder="Busque por transaction"
      {...register('query')}
      />

      <button type="submit" disabled={isSubmitted}>
        <MagnifyingGlass size={20} />
        search
      </button>
    </SearchFormContainer>
  )
}
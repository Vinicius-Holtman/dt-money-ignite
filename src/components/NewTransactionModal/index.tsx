import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay/>

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>New Transaction</Dialog.Title>

          <form action="">
            <input type="text" placeholder='Description' required />
            <input type="text" placeholder='Price' required />
            <input type="text" placeholder='Category' required />

            <TransactionType>
              <TransactionTypeButton variant='income'>
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionTypeButton>

              <TransactionTypeButton variant='outcome'>
                <ArrowCircleDown size={24} />
                Saida
              </TransactionTypeButton>
            </TransactionType>

            <button type='submit'>
              Save
            </button>
          </form>
      </Content>
    </Dialog.Portal>
  )
}
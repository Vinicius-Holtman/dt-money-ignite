import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay } from './styles';

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

            <button>
              Save
            </button>
          </form>
      </Content>
    </Dialog.Portal>
  )
}
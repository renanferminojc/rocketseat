import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal"/>
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
        />

        <input
          type="number"
          placeholder="valor"
        />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="income image"/>
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="outcome image"/>
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
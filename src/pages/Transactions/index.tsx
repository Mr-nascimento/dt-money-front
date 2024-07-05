import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
      <div>
        <Header />
        <Summary />
        <TransactionsContainer>
          <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>
                    <PriceHighLight variant="income">
                        R$ 10.000,00
                    </PriceHighLight>
                </td>
                <td>Venda</td>
                <td>20/02/2022</td>
              </tr>
              <tr>
                <td width="50%">Lanche</td>
                <td>
                    <PriceHighLight variant="outcome">
                        - R$ 10.000,00
                    </PriceHighLight>
                </td>
                <td>Aliemntação</td>
                <td>20/02/2022</td>
              </tr>
            </tbody>
          </TransactionsTable>
        </TransactionsContainer>
      </div>
    );
}
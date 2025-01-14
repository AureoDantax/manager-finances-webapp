import React, { useState, useEffect } from 'react';
import { getBalance } from '../services/api';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const DashboardHeader = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #a09b9b;
`;

const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const BalanceCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  min-width: 220px;

`;

const BalanceTitle = styled.h2`
  font-size: 1.2em;
  color: #444343;
`;

const BalanceValue = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: #1f1e1e;
`;

const RecentTransactions = styled.div`
    margin-top: 20px;
`;

const RecentTransactionsTitle = styled.h2`
    font-size: 1.5em;
    color: #a09b9b;
    margin-bottom: 10px;
`;

const Dashboard: React.FC = () => {
  const [balance, setBalances] = useState<{revenues:number,expenses:number,amount:number} | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await getBalance();
        setBalances(data);
      } catch (error) {
        console.error('Erro ao buscar balanço:', error);
      }
    };
    fetchBalance();
  }, []);

   const formatValue = (value: number | undefined) => {
    if (value === undefined) {
      return '0,00';
    }
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <DashboardContainer>
      <DashboardHeader>Dashboard</DashboardHeader>

      {balance ? (
        <BalanceContainer>
          <BalanceCard>
            <BalanceTitle>Receitas</BalanceTitle>
            <BalanceValue>{formatValue(balance.revenues)} </BalanceValue>
          </BalanceCard>
          <BalanceCard>
            <BalanceTitle>Despesas</BalanceTitle>
            <BalanceValue>{formatValue(balance.expenses)}</BalanceValue>
          </BalanceCard>
          <BalanceCard>
            <BalanceTitle>Saldo</BalanceTitle>
            <BalanceValue>
              {formatValue(balance.amount)}
            </BalanceValue>
          </BalanceCard>
        </BalanceContainer>
      ) : (
        <p>Carregando o Balanço...</p>
      )}

      <RecentTransactions>
        <RecentTransactionsTitle>Transações Recentes</RecentTransactionsTitle>
        <p>Em breve</p>
      </RecentTransactions>
    </DashboardContainer>
  );
};

export default Dashboard;
// src/pages/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import { getBalance } from '../services/api';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const DashboardHeader = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
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
`;

const BalanceTitle = styled.h2`
  font-size: 1.2em;
  color: #555;
`;

const BalanceValue = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
`;

const RecentTransactions = styled.div`
    margin-top: 20px;
`;

const RecentTransactionsTitle = styled.h2`
    font-size: 1.5em;
    color: #555;
    margin-bottom: 10px;
`;

const Dashboard: React.FC = () => {
  const [balance, setBalance] = useState<{ receita: number, despesa: number, total: number } | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await getBalance();
        setBalance(data);
        console.log('Balanço:', balance);
      } catch (error) {
        console.error('Erro ao buscar balanço:', error);
      }
    };
    fetchBalance();
  }, []);

  const formatValue = (value: number | undefined) => {
      if(value === undefined ){
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
            <BalanceTitle>Receita</BalanceTitle>
            <BalanceValue>R$ {formatValue(balance.receita)}</BalanceValue>
          </BalanceCard>
          <BalanceCard>
            <BalanceTitle>Despesa</BalanceTitle>
            <BalanceValue>R$ {formatValue(balance.despesa)}</BalanceValue>
          </BalanceCard>
          <BalanceCard>
            <BalanceTitle>Saldo</BalanceTitle>
            <BalanceValue>
              R$ {formatValue(balance)}
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
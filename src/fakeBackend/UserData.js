// backendFake.js

const userData = [
    {
        id: 1,
        name: "Completar relatório",
        age: 20,
        dataHora: "2023-12-15T08:00:00",
        prioridade: "alta",
        ativo: true,
        status: "pendente",
        work: [
            {
                occupation: "Revisar estatísticas",
                wage: 2400
            }
        ],
        finance: {
            wage: 2400,
            safe: 400,
            free_money: 300,
            monthly_expenses: 500,
            investment_cash: [
                {
                    name: "pc gamer",
                    amount: 300,
                    total: 127
                },
            ],
        },
        checklist: [
            { item: "Revisar estatísticas", feito: true },
            { item: "Adicionar gráficos", feito: false },
            { item: "Finalizar conclusões", feito: false }
        ],
    },
];

export default userData;

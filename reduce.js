const amount = people.reduce((total, person) => total+=person.budget, 0);
        console.log(amount)
        const orders = [
            {
              userId:1,
              budget:1393
            },
            {
                userId:3,
                budget:8393
            },
            {
                userId:3,
                budget:39303
            }
         ]
         amount = orders.filter(orders => orders.userId === 3).map(orders => orders.budget).reduce((a, b)=>a+b);
         console.log(amount)
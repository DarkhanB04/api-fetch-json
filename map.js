map
         const newPeople = people.map(person =>  person.name)
         console.log(newPeople)
        const adults = people.filter(person => person.age>=18)
        console.log(adults)
        let count = 0;
        for(let i=0; i<people.length; i++){
            count+=people[i].budget;
        }
        
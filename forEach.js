forEach
        for(let i=0; i<people.length; i++){
            console.log(people[i])
        }
        выводит элементы
        for(let person of people){
            console.log(person)
        }
        выводит индекс
        for(i in people){
            console.log(i)
        }
        people.forEach(function(person, index, pArr){
            console.log(person)
        });
        people.forEach(person => console.log(person))
        
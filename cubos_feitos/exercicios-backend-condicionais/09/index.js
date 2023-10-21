const nota = 8.5;

if(nota >= 9 && nota <= 10){
    console.log(`O estudante obteve o conceito "A"`);
}else if(nota >= 8 && nota <=8.9){
    console.log(`O estudante obteve o conceito "B"`);
}else if(nota >= 6 && nota <= 7.9){
    console.log(`O estudante obteve o conceito "C"`);
}else if(nota >=4 && nota <= 5.9){
    console.log(`O estudante obteve o conceito "$D"`);
}else if(nota < 4){
    console.log(`O estudante obteve o conceito "E"`);
}


/*
| Nota        | Conceito |
| ----------- | -------- |
| 9 a 10      | A        |
| 8 a 8,9     | B        |
| 6 a 7,9     | C        |
| 4 a 5,9     | D        |
| menos que 4 | E        |
*/
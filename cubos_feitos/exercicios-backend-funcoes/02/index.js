
const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function (){ //===========FUNÇÃO LIGAR==========        
        if(this.ligado){
            console.log('Este carro já está ligado');
        }else{
            this.ligado = true;
            console.log(`Carro ligado. Velocidade: `, this.velocidade);
        }
    },
    desligar: function (desligando){ //===========FUNÇÃO DESLIGAR==========;        
        if(!this.ligado){
            console.log('Carro já está desligado');
        }else{
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro desligado. Velocidade: `, this.velocidade);
        }
    },
    acelerar: function (acelerando){ //===========FUNÇÃO ACELERAR==========
        
        if(!this.ligado){
            console.log('Não é possível acelerar um carro desligado');
        }else{
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: `, this.velocidade);
        }
    },
    desacelerar: function (desacelerando){ //===========FUNÇÃO ACELERAR==========
        
        if(!this.ligado){
            console.log('Não é possível desacelerar um carro desligado');
        }else{
            this.valocidade -= 10;
            console.log(`Carro ligado. Velocidade: `, this.velocidade);
        }
    }
}



function statusCar(carro){
    

    carro.desligar(); // 1. Este carro já está desligado.
    carro.ligar(); // 2. Carro ligado. Velocidade: 0.
    carro.ligar(); // 3. Este carro já está ligado.
    carro.acelerar(); // 4. Carro ligado. Velocidade: 10.
    carro.acelerar(); // 5. Carro ligado. Velocidade: 20.
    carro.desacelerar(); // 6. Carro ligado. Velocidade: 10.
    carro.desligar(); // 7. Carro desligado. Velocidade: 0.
    carro.acelerar(); // 8. Não é possível acelerar um carro desligado.
    carro.desacelerar(); // 9. Não é possível desacelerar um carro desligado.
    
}

statusCar(carro);


/*
Nesta sequência de exercícios criaremos um objeto carro que possuirá 6 membros, sendo 2 propriedades e _pelo menos_ 4 métodos.
As propriedades deverão ser um boolean chamado **ligado** e um number chamado **velocidade**.
Além dos indicadores de ligado/desligado e de velocidade, este carro deverá possuir métodos para **ligar**, **desligar**, **acelerar** e **desacelerar**.

#### Vamos então aos passos para completar o exercício!!!

**a)** Criar o objeto carro com apenas as duas propriedades (neste primeiro passo não é necessário criar os métodos):

-   **ligado** (boolean) : que de deverá ser inicializada com valor **false** (desligado).
-   **velocidade** (number) : que deverá ser inicializada com valor **0** (zero).

**b)** Acrescentar neste objeto carro um membro chamado **ligar** que possuirá como valor uma função que implementará a seguinte lógica:

-   Verificar se o carro está ligado ou não. - Se o carro **já estiver ligado**, deverá imprimir uma mensagem no console dizendo:
    `Este carro já está ligado.` - _Se não_ (se o carro não estiver ligado), deverá alterar a propriedade **ligado** para **true**.

**c)** Acrescentar neste objeto carro um membro chamado **desligar** que possuirá como valor uma função que implementará a seguinte lógica:

-   Verificar se o carro está ligado ou não. - Se o carro **já estiver desligado**, deverá imprimir uma mensagem no console dizendo:
    `Este carro já está desligado.` - _Se não_ (se o carro estiver ligado), deverá: - alterar a propriedade **ligado** para **false**. - atribuir 
    valor **0** (zero) à propriedade **velocidade**.

**d)** Acrescentar neste objeto carro um membro chamado **acelerar** que possuirá como valor uma função que implementará a seguinte lógica:

-   Verificar se o carro está ligado ou não. - Se o carro **não** estiver ligado, deverá imprimir uma mensagem no console dizendo:
    `Não é possível acelerar um carro desligado.` - _Se não_ (se o carro estiver ligado), deverá: - **aumentar** em 10 o valor da propriedade **velocidade**

**d)** Acrescentar neste objeto carro um membro chamado **desacelerar** que possuirá como valor uma função que implementará a seguinte lógica:

-   Verificar se o carro está ligado ou não. - Se o carro **não** estiver ligado, deverá imprimir uma mensagem no console dizendo:
    `Não é possível desacelerar um carro desligado.` - _Se não_ (se o carro estiver ligado), deverá: - **diminuir** 10 do valor da propriedade **velocidade**

**e)** Em cada um dos 4 métodos (ligar, desligar, acelerar, desacelerar), quando e **apenas** quando alguma propriedade for alterada, imprimir 
no console uma mensagem mostrando o status atual do carro. Esta mensagem deverá seguir os seguinte formato: 

"Carro [ligado/desligado]. 
Velocidade: [velocidade].". 

Com isto, todos os métodos quando alterarem alguma das propriedades, imprimirá o status atual do carro.
Exemplos de mensagens

```
Carro desligado. Velocidade: 0.
Carro ligado. Velocidade: 0.
Carro ligado. Velocidade: 30.
```

**f)** Após construir todo o objeto com suas propriedades e métodos, deveremos executar os métodos na seguinte ordem:

1. Desligar o carro
2. Ligar o carro
3. Ligar o carro
4. Acelerar o carro
5. Acelerar o carro
6. Desacelerar o carro
7. Desligar o carro
8. Acelerar o carro
9. Desacelerar o carro

As mensagens que deverão ser exibidas no console são:

```
Este carro já está desligado.
Carro ligado. Velocidade: 0.
Este carro já está ligado.
Carro ligado. Velocidade: 10.
Carro ligado. Velocidade: 20.
Carro ligado. Velocidade: 10.
Carro desligado. Velocidade: 0.
Não é possível acelerar um carro desligado.
Não é possível desacelerar um carro desligado.
```
*/
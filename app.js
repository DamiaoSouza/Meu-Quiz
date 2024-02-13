 // Questão 1
 let pontos = [];
 document.getElementById("correta1").addEventListener('click',()=>{
         pontos.push(1)
         document.getElementById("questao1").style.backgroundColor ="LightBlue";
 });
 document.getElementById("incorreta1").addEventListener('click',()=>{
        // res.push('Errada');
        document.getElementById("questao1").style.backgroundColor = "rgba(228, 73, 73, 0.562)"
});

// Questão 2
 document.getElementById("correta2").addEventListener('click',()=>{
        
        document.getElementById("questao2").style.backgroundColor = "rgba(228, 73, 73, 0.562)";
});
document.getElementById("incorreta2").addEventListener('click',()=>{
        pontos.push(1)
        document.getElementById("questao2").style.backgroundColor ="LightBlue"  
});

// Questão 3
document.getElementById("correta3").addEventListener('click',()=>{
          pontos.push(1)
        document.getElementById("questao3").style.backgroundColor ="LightBlue";
      
});
document.getElementById("incorreta3").addEventListener('click',()=>{
        // res.push('Errada')
        document.getElementById("questao3").style.backgroundColor = "rgba(228, 73, 73, 0.562)";
  });

// Questão 4
document.getElementById("correta4").addEventListener('click',()=>{
          pontos.push(1)
        document.getElementById("questao4").style.backgroundColor ="LightBlue";
        
});
document.getElementById("incorreta4").addEventListener('click',()=>{
        // res.push('Errada')
        document.getElementById("questao4").style.backgroundColor = "rgba(228, 73, 73, 0.562)";
});

// Questão 5
document.getElementById("correta5").addEventListener('click',()=>{
      
        document.getElementById("questao5").style.backgroundColor = "rgba(228, 73, 73, 0.562)";
});
document.getElementById("incorreta5").addEventListener('click',()=>{
          pontos.push(1)
        document.getElementById("questao5").style.backgroundColor ="LightBlue";
       
});

document.getElementById('resultado').addEventListener('click',()=>{
         let pnt = 0;
        for(let p of pontos){
              pnt += p;  
        }  
        document.getElementById('pontuacao').innerHTML = `<p id="pt"> Pontução: ${pnt}</p>`;
});
/*console.log(res);
// Adicionando o evento no botão reultado
document.getElementById('resultado').addEventListener('click',()=>{
  let pontos = 0;
  // percorrendo o array com "FOR OF"
  for(let result of res){
    // A cada respotas certa soma 1
     if(result === 'certo'){
        pontos += 1;
     }
     //mostrando as respotas
    let dados = document.getElementById('dados');
              dados.innerHTML += `<p>${result}</p>`;
    }

    document.getElementById('pontuacao').innerHTML = ` <span class="span">pontuação ${pontos}</span>`
    // console.log(pontos);   
  });*/
   
    


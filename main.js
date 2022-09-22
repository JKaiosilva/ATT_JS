//Automatic Rádio

setInterval(comparacao, 1000);
setInterval(showTime, 1000);


nome_primeiro_site = [];
nome_segundo_site = [];

link_primeiro_site = [];
link_segundo_site = [];

horario_01 = []
horario_02 = []
horario_03 = []     
horario_04 = []     
horario_05 = []          
horario_06 = []          
horario_07 = []          
horario_08 = []  


function enviar(){
  nome_primeiro_site = document.getElementById('entrada_nome1').value;
  nome_segundo_site = document.getElementById('entrada_nome2').value;

  link_primeiro_site = document.getElementById('entrada_valor1').value;
  link_segundo_site = document.getElementById('entrada_valor2').value;
  
  horario_01 = document.getElementById('entrada_abrir1_site1').value;
  horario_02 = document.getElementById('entrada_fechar1_site1').value;
  horario_03 = document.getElementById('entrada_abrir2_site1').value;
  horario_04 = document.getElementById('entrada_fechar2_site1').value;
  horario_05 = document.getElementById('entrada_abrir1_site2').value;
  horario_06 = document.getElementById('entrada_fechar1_site2').value;
  horario_07 = document.getElementById('entrada_abrir2_site2').value;
  horario_08 = document.getElementById('entrada_fechar2_site2').value;

  document.getElementById('nome_site1').innerHTML = nome_primeiro_site;
  document.getElementById('primeiro_painel_acoes').innerHTML = 'Abrir';
  document.getElementById('primeiro_painel_horario').innerHTML = horario_01;
  document.getElementById('nome_site2').innerHTML = nome_primeiro_site;
  document.getElementById('segundo_painel_acoes').innerHTML = 'Fechar';
  document.getElementById('segundo_painel_horario').innerHTML = horario_02
  document.getElementById('resultado_atual').innerHTML = horario_vago;

}

var horario_vago = 'Nenhum site ativo no momento';

        

function showTime(){
  const d = new Date();
  let data = [d.getHours(), d.getMinutes(), d.getSeconds()]
  document.getElementById('relogio').innerHTML = data;}


function comparacao(){
  const d = new Date();
  let data = [d.getHours(), d.getMinutes(), d.getSeconds()]
    if(String(data) == String(horario_01)){
        janela = window.open(link_primeiro_site, 'newwindow', 'height=200, width=200')
        document.getElementById('resultado_atual').innerHTML = nome_primeiro_site;       //Apresentar o site atual no painel principal
        document.getElementById('nome_site1').innerHTML = nome_primeiro_site;            //Apresentar o nome do site no primeiro painel de sites
        document.getElementById('nome_site2').innerHTML = nome_segundo_site;             //Apresentar o nome do site no segundo painel de sites
        document.getElementById('primeiro_painel_acoes').innerHTML = 'Fechar';      //Apresentar a ação no primeiro painel de ações
        document.getElementById('segundo_painel_acoes').innerHTML = 'Abrir';        //Apresentar a ação no segundo painel de ações
        document.getElementById('primeiro_painel_horario').innerHTML = horario_02;  //Apresentar o horário no primeiro painel de horário
        document.getElementById('segundo_painel_horario').innerHTML = horario_05;   //Apresentar o horário no segundo painel de horário
    } else if (String(data) == String(horario_02)){
        janela = janela.close()
        document.getElementById('resultado_atual').innerHTML = horario_vago;       //Apresentar o site atual no painel principal
        document.getElementById('nome_site1').innerHTML = nome_segundo_site;            //Apresentar o nome do site no primeiro painel de sites
        document.getElementById('nome_site2').innerHTML = nome_segundo_site;             //Apresentar o nome do site no segundo painel de sites
        document.getElementById('primeiro_painel_acoes').innerHTML = 'Abrir';      //Apresentar a ação no primeiro painel de ações
        document.getElementById('segundo_painel_acoes').innerHTML = 'Fechar';        //Apresentar a ação no segundo painel de ações
        document.getElementById('primeiro_painel_horario').innerHTML = horario_05;  //Apresentar o horário no primeiro painel de horário
        document.getElementById('segundo_painel_horario').innerHTML = horario_06;   //Apresentar o horário no segundo painel de horário
    } else if(String(data) == String(horario_03)){
        janela = window.open(link_primeiro_site, 'newwindow', 'height=200, width=200')
        document.getElementById('resultado_atual').innerHTML = nome_primeiro_site;       //Apresentar o site atual no painel principal
        document.getElementById('nome_site1').innerHTML = nome_primeiro_site;            //Apresentar o nome do site no primeiro painel de sites
        document.getElementById('nome_site2').innerHTML = nome_segundo_site;             //Apresentar o nome do site no segundo painel de sites
        document.getElementById('primeiro_painel_acoes').innerHTML = 'Fechar';      //Apresentar a ação no primeiro painel de ações
        document.getElementById('segundo_painel_acoes').innerHTML = 'Abrir';        //Apresentar a ação no segundo painel de ações
        document.getElementById('primeiro_painel_horario').innerHTML = horario_04;  //Apresentar o horário no primeiro painel de horário
        document.getElementById('segundo_painel_horario').innerHTML = horario_07;   //Apresentar o horário no segundo painel de horário
    } else if(String(data) == String(horario_04)){
        janela = janela.close()
        document.getElementById('resultado_atual').innerHTML = horario_vago;       //Apresentar o site atual no painel principal
        document.getElementById('nome_site1').innerHTML = nome_segundo_site;            //Apresentar o nome do site no primeiro painel de sites
        document.getElementById('nome_site2').innerHTML = nome_segundo_site;             //Apresentar o nome do site no segundo painel de sites
        document.getElementById('primeiro_painel_acoes').innerHTML = 'Abrir';      //Apresentar a ação no primeiro painel de ações
        document.getElementById('segundo_painel_acoes').innerHTML = 'Fechar';        //Apresentar a ação no segundo painel de ações
        document.getElementById('primeiro_painel_horario').innerHTML = horario_07;  //Apresentar o horário no primeiro painel de horário
        document.getElementById('segundo_painel_horario').innerHTML = horario_08;   //Apresentar o horário no segundo painel de horário
    } else if(String(data) == String(horario_05)){
        janela = window.open(link_segundo_site, 'newwindow', 'height=200, width=200')
        document.getElementById('resultado_atual').innerHTML = nome_segundo_site;       //Apresentar o site atual no painel principal
        document.getElementById('nome_site1').innerHTML = nome_segundo_site;            //Apresentar o nome do site no primeiro painel de sites
        document.getElementById('nome_site2').innerHTML = nome_primeiro_site;             //Apresentar o nome do site no segundo painel de sites
        document.getElementById('primeiro_painel_acoes').innerHTML = 'Fechar';      //Apresentar a ação no primeiro painel de ações
        document.getElementById('segundo_painel_acoes').innerHTML = 'Abrir';        //Apresentar a ação no segundo painel de ações
        document.getElementById('primeiro_painel_horario').innerHTML = horario_06;  //Apresentar o horário no primeiro painel de horário
        document.getElementById('segundo_painel_horario').innerHTML = horario_03;   //Apresentar o horário no segundo painel de horário
    } else if(String(data) == String(horario_06)){
        janela = janela.close()
        document.getElementById('resultado_atual').innerHTML = horario_vago;       //Apresentar o site atual no painel principal
        document.getElementById('nome_site1').innerHTML = nome_primeiro_site;            //Apresentar o nome do site no primeiro painel de sites
        document.getElementById('nome_site2').innerHTML = nome_primeiro_site;             //Apresentar o nome do site no segundo painel de sites
        document.getElementById('primeiro_painel_acoes').innerHTML = 'Abrir';      //Apresentar a ação no primeiro painel de ações
        document.getElementById('segundo_painel_acoes').innerHTML = 'Fechar';        //Apresentar a ação no segundo painel de ações
        document.getElementById('primeiro_painel_horario').innerHTML = horario_03;  //Apresentar o horário no primeiro painel de horário
        document.getElementById('segundo_painel_horario').innerHTML = horario_04;   //Apresentar o horário no segundo painel de horário
    } else if(String(data) == String(horario_07)){
        janela = window.open(link_segundo_site, 'newwindow', 'height=200, width=200')
        document.getElementById('resultado_atual').innerHTML = nome_segundo_site;       //Apresentar o site atual no painel principal
        document.getElementById('nome_site1').innerHTML = nome_segundo_site;            //Apresentar o nome do site no primeiro painel de sites
        document.getElementById('nome_site2').innerHTML = nome_primeiro_site;             //Apresentar o nome do site no segundo painel de sites
        document.getElementById('primeiro_painel_acoes').innerHTML = 'Fechar';      //Apresentar a ação no primeiro painel de ações
        document.getElementById('segundo_painel_acoes').innerHTML = 'Abrir';        //Apresentar a ação no segundo painel de ações
        document.getElementById('primeiro_painel_horario').innerHTML = horario_08;  //Apresentar o horário no primeiro painel de horário
        document.getElementById('segundo_painel_horario').innerHTML = horario_01;   //Apresentar o horário no segundo painel de horário
    } else if(String(data) == String(horario_08)){
        janela = janela.close()
        document.getElementById('resultado_atual').innerHTML = horario_vago;       //Apresentar o site atual no painel principal
        document.getElementById('nome_site1').innerHTML = nome_primeiro_site;            //Apresentar o nome do site no primeiro painel de sites
        document.getElementById('nome_site2').innerHTML = nome_primeiro_site;             //Apresentar o nome do site no segundo painel de sites
        document.getElementById('primeiro_painel_acoes').innerHTML = 'Abrir';      //Apresentar a ação no primeiro painel de ações
        document.getElementById('segundo_painel_acoes').innerHTML = 'Fechar';        //Apresentar a ação no segundo painel de ações
        document.getElementById('primeiro_painel_horario').innerHTML = horario_01;  //Apresentar o horário no primeiro painel de horário
        document.getElementById('segundo_painel_horario').innerHTML = horario_02;   //Apresentar o horário no segundo painel de horário
    }
    
  
  
  }


/*function mostrar_live(){
    const d = new Date();
    let data = [d.getHours(), d.getMinutes(), d.getSeconds()]
      if(String(data) == String(data)){
}}

*/



var x = 1
function loop (){
while (x < Infinity){
comparacao()}}

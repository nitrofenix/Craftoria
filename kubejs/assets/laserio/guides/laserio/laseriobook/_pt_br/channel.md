---
navigation:
  title: "Canal"
  icon: "laserio:textures/gui/buttons/blankbutton.png"
  position: 4
  parent: laserio:mechanics.md
---

# Canal

Os cartões somente interagem com outros cartões que estiverem no mesmo canal. Isso permite ao jogador possuir multiplas rotas lógicas na mesma rede.

Por exemplo, os Cartões de Extração no canal 'Laranja' somente tentarão inserir nos Cartões de Inserção que estiverem no canal 'Laranja', e ignorará todos os outros cartões.

Por exemplo, configure um Cartão de Extração no canal 'Laranja' com um filtro para pedras, e outro Cartão de Extração no canal 'Preto' com um filtro para carvão. Então coloque-os no mesmo Nó a Laser. 

Um canal de inserção Laranja pode ficar em cima de uma fornalha, com um cartão de inserção em baixo no canal Preto. Isso garantirá que somente pedras serão inseridas no topo da fornalha, enquanto o carvão será inserido por baixo.


// Definir opções para cada peça de roupa
const blusas = {
    blusa_branca: 'blusa_branca',
    blusa_preta: 'blusa_preta',
    blusa_rosa: 'blusa_rosa'
  };
  const saias = {
    saia_rodada: 'saia_rodada',
    saia_lapis: 'saia_lapis',
    saia_jeans: 'saia_jeans'
  };
  const calcas = {
    calca_jeans: 'calca_jeans',
    calca_social: 'calca_social',
    calca_legging: 'calca_legging'
  };
  const shorts = {
    short_jeans: 'short_jeans',
    short_estampado: 'short_estampado',
    short_couro: 'short_couro'
  };
  const vestidos = {
    vestido_longo: 'vestido_longo',
    vestido_curto: 'vestido_curto',
    vestido_estampado: 'vestido_estampado'
  };
  
  // Selecionar elementos do DOM
  const boneca = document.querySelector('#boneca');
  const blusaSelect = document.querySelector('#blusa');
  const saiaSelect = document.querySelector('#saia');
  const calcaSelect = document.querySelector('#calca');
  const shortsSelect = document.querySelector('#short');
  const vestidoSelect = document.querySelector('#vestido');
  
  // Atualizar a boneca quando o usuário selecionar uma nova opção de roupa ou acessório
  function atualizarBoneca() {
    const blusaSelecionada = blusas[blusaSelect.value];
    const saiaSelecionada = saias[saiaSelect.value];
    const calcaSelecionada = calcas[calcaSelect.value];
    const shortsSelecionado = shorts[shortsSelect.value];
    const vestidoSelecionado = vestidos[vestidoSelect.value];
    
    // Atualizar a boneca com as seleções do usuário
    boneca.innerHTML = `
      <img class="blusa_${blusaSelecionada}" src="img/${blusaSelecionada}.png">
      <img class="saia_${saiaSelecionada}" src="img/${saiaSelecionada}.png">
      <img class="calca_${calcaSelecionada}" src="img/${calcaSelecionada}.png">
      <img class="short_${shortsSelecionado}" src="img/${shortsSelecionado}.png">
      <img class="vestido_${vestidoSelecionado}" src="img/${vestidoSelecionado}.png">
    `;
  }
  
  // Adicionar eventos de alteração para cada seleção de roupa ou acessório
  blusaSelect.addEventListener('change', atualizarBoneca);
  saiaSelect.addEventListener('change', atualizarBoneca);
  calcaSelect.addEventListener('change', atualizarBoneca);
  shortsSelect.addEventListener('change', atualizarBoneca);
  vestidoSelect.addEventListener('change', atualizarBoneca);
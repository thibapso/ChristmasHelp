function getNextChristmasDate() {
  const now = new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate()
    )
  );
  let year = now.getUTCFullYear();
  // Se a data atual for 26 de dezembro ou posterior, ajusta para o próximo ano
  if (now.getUTCMonth() === 11 && now.getUTCDate() >= 26) {
    year += 1;
  }
  // Retorna a data do próximo Natal em UTC
  return new Date(Date.UTC(year, 11, 25)); // 25 de Dezembro
}
// Função para atualizar o timer
function updateCountdown() {
  const christmasDate = getNextChristmasDate(); // Obtém a data do próximo Natal
  const now = new Date(); // Hora local do usuário
  const timeDifference = christmasDate - now; // Diferença entre Natal e agora em ms
  // Calcula dias, horas, minutos e segundos
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  // Atualiza o conteúdo do timer
  const timerElement = document.getElementById("countdown");
  timerElement.textContent = `${days}d - ${hours}h - ${minutes}m - ${seconds}s`;
  // Se o Natal já passou, mostra uma mensagem
  if (timeDifference < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "Feliz Natal!";
  }
}
// Atualiza o timer a cada segundo
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Chama a função imediatamente para evitar atraso
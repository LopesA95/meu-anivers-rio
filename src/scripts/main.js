AOS.init();

const dataDoEvento = new Date("Nov 28, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;
  const segundoEmMs = 1000;

  const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
  const horasAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor(
    (distanciaDoEvento % horaEmMs) / minutoEmMs
  );
  const segundosAteOEvento = Math.floor(
    (distanciaDoEvento % minutoEmMs) / segundoEmMs
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaDoEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("evento-iniciado").innerHTML =
      "Desculpe, o evento ja iniciou.";
    document.getElementById("modify").innerHTML = "Indisponivél";
  }
}, 1000);
feather.replace({ class: "foo bar", "stroke-width": 1 });

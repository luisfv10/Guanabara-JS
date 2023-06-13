var idade = 88
if (idade < 16) {
  console.log("Você é menor de idade e nao vota")
} else if (idade >= 16 && idade < 18) {
  console.log("Você tem o voto opcional")
} else if (18 <= idade && idade < 67) {
  console.log("Você é uma pessoa adulta e tem que votar")
} else {
  console.log("Você é um idoso e tem voto opcional")
}

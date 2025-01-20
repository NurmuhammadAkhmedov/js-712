let gap = ("Sizda hozir random sonlar chiqishni boshledi")
let randomSon = Math.floor(Math.random()  * 100);
alert(gap)
let multiplied = randomSon * 2;
let divided = randomSon / 2;
let boluvchi = divided / 3;
alert("Random orqali chiqqan son: " + randomSon);
alert("2 ga ko‘paytirilgan:" + multiplied);
alert("2 ga bo‘lingan:" + divided);
alert("2 ga bo‘lingan:" + boluvchi);
alert(
    `
     Random  orqali chiqqan son: ${randomSon} edi
     Biz uni 2 ga ko'paytirib ${multiplied} sonini chiqardik,
     va shu sonni 2 ga bo'lib:${divided} sonini chiqardik,
     va shu sonni 3 ga bolganda qoldiq: ${boluvchi} sonini chiqardik.
    `
)
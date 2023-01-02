// ***********************************
// fce Vypocti cenu START
// ***********************************
function VypoctiCenu() {
  const CelkovaCenaVozu = document.querySelector("#CelkovaCenaVozu");
  const StavNabídky = document.querySelector("#StavNabídky");

  let CenaAuta = Number(document.form1.VyberZnacky.value);
  let ZakaznikovaCenaAuta = Number(document.form1.NabizenaCena.value);
  let CelkovaCenaAuta;
  let CenaVybavy = 0;

  console.log(CenaAuta);
  let CenaBarvy;
  if (document.form1.Barva[0].checked == true) {
    CenaBarvy = 0;
  } else if (document.form1.Barva[1].checked == true) {
    CenaBarvy = VypoctiCenuBarvy(5, CenaAuta);
  } else if (document.form1.Barva[2].checked == true) {
    CenaBarvy = VypoctiCenuBarvy(7, CenaAuta);
  }
  console.log(CenaBarvy);
  CelkovaCenaAuta = CenaAuta + CenaBarvy;
  console.log(CelkovaCenaAuta);

  const chVybava = document.querySelectorAll(".Vybava");

  for (let i = 0; i < chVybava.length; i++) {
    if (chVybava[i].checked == true) {
      if (i == 3) {
        CenaVybavy =
          CenaVybavy + VypoctiCenuVybavy(chVybava[i].value, CenaAuta);
      } else {
        CenaVybavy = CenaVybavy + Number(chVybava[i].value);
      }
    }
  }
  console.log(CenaVybavy);

  CelkovaCenaAuta = Number(CelkovaCenaAuta + CenaVybavy);

  // zaverecny vystup ceny
  CelkovaCenaVozu.textContent = CelkovaCenaAuta + " Kč";

  console.log(CelkovaCenaAuta);
  console.log(`-----------------`);
  console.log(ZakaznikovaCenaAuta);

  if (ZakaznikovaCenaAuta >= CelkovaCenaAuta) {
    StavNabídky.textContent = "Vaše nabídka je pro nás akceptovatelná.";
  } else if (ZakaznikovaCenaAuta == 0) {
    StavNabídky.textContent = "Nezadal jste Vaši nabídku.";
  } else {
    StavNabídky.textContent = "To je boužel málo.";
  }
}
// ***********************************
// fce Vypocti cenu KONEC
// fce VypoctiCenuBarvy START
// ***********************************
function VypoctiCenuBarvy(procentniCast, CenaAuta) {
  let cena = 15;
  cena = (Number(procentniCast) / 100) * Number(CenaAuta);
  return Math.round(cena);
}
// ***********************************
// fce VypoctiCenuBarvy KONEC
// fce VypoctiCenuVybavy START
// ***********************************
function VypoctiCenuVybavy(procentniCast, CenaAuta) {
  let cenaVybavy = 0;
  cenaVybavy = (Number(procentniCast) / 100) * Number(CenaAuta);
  return Math.round(cenaVybavy);
}
// ***********************************
// fce VypoctiCenuVybavy KONEC
// ***********************************

function kontrola(adresa) {
  if (adresa.indexOf("@") < 1) {
    alert("neplatny email");
    pokracuj = false;
  } else {
    alert("email byl odeslan");
  }
}

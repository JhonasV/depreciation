import { Breakdown } from "../models/Breakdown";

const Calculate = (quantity: number): Breakdown => {
  var monedas = Array(
    500,
    200,
    100,
    50,
    20,
    10,
    5,
    2,
    1,
  );

  let values: String[] = [];

  monedas.forEach((value: number) => {
    let result = "";
    let billCount = Math.floor(quantity / value);
    if (billCount > 0) {
      if (value > 10) {
        result = `${billCount} ${
          billCount == 1 ? "Billete" : "Billetes"
        } de $${value}`;
      } else {
        result = `${billCount} ${
          billCount == 1 ? "Moneda" : "Monedas"
        } de $${value}`;
      }
      values.push(result);
    }

    quantity = quantity % value;
    console.log(result);
  });

  let total: Breakdown = {
    values: values,
  };

  return total;

  // var cambio = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  // for (var i = 0; i < monedas.length; i++) {
  //   // Si el importe actual, es superior a la moneda
  //   if (quantity > monedas[i]) {
  //     // obtenemos cantidad de monedas
  //     cambio[i] = Number(quantity / monedas[i]);

  //     // actualizamos el valor del importe que nos queda por didivir
  //     quantity = Number((quantity - (cambio[i] * monedas[i])).toFixed(2));
  //   }
  // }

  // let total: Breakdown = {
  //   coins: monedas,
  //   change: cambio,
  // };

  // return total;
  // let reserve: number;

  // let mil: number;

  // mil = quantity / 1000;
  // reserve = Math.floor(quantity % 1000);

  // let quinientos: number;
  // quinientos = reserve / 500;
  // reserve = Math.floor(reserve % 500);

  // let doscientos: number;
  // doscientos = reserve / 200;
  // reserve = Math.floor(reserve % 200);

  // let cien: number;
  // cien = reserve / 100;
  // reserve = Math.floor(reserve % 100);

  // let cincuenta: number;
  // cincuenta = reserve / 50;
  // reserve = Math.floor(reserve % 50);

  // let veinte: number;
  // veinte = reserve / 20;
  // reserve = Math.floor(reserve % 20);

  // let diez: number;
  // diez = reserve / 10;
  // reserve = Math.floor(reserve % 10);

  // let cinco: number;
  // cinco = reserve / 5;
  // reserve = Math.floor(reserve % 5);

  // let dos: number;
  // dos = reserve / 2;
  // reserve = Math.floor(reserve / 2);

  // let uno: number;
  // uno = Math.floor(reserve / 1);

  // let total: Breakdown = {
  //   mil,
  //   quinientos,
  //   doscientos,
  //   cien,
  //   cincuenta,
  //   veinte,
  //   diez,
  //   cinco,
  //   dos,
  //   uno,
  // };

  // return total;
};

const round = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export default {
  Calculate,
};

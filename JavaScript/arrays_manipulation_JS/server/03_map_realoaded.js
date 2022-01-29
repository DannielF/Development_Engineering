const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  console.log("original", orders);
  const rta = orders.map((item) => item.total);
  console.log("rta", rta);
  
  /**
   * ES6
   * Spread Operator
   * Operador de propagación
   */
  
  const rta3 = orders.map((item) => {
    return {
      ...item,
      tax: 0.19,
    };
  });
  console.log("rta3", rta3);
  console.log("original", orders);
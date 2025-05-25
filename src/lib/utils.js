export function cn(...cns) {
  return cns.join(" ");
}

export function variant(base, variants) {
  console.log(base, variants);

  // mengambil kelas yang kita construct
  return function builder(props) {
    // meng-ekstrak key dari objek yang kita passing
    console.log(props); // { color: 'primary', size: 'large' }
    console.log(Object.entries(props)); // [ [ 'color', 'primary' ], [ 'size', 'large' ] ]

    //lalu kita looping
    const classes = []; // variable untuk menggabungkan class-class yang diambil dari variant
    Object.entries(props).forEach(([key, value]) => {
      console.log(key, value); // color primary
      // console.log(variants[key][value]); // bg-blue-500 atau pengaksesan sama saja seperti variants.color.danger

      if (!(key in variants)) {
        // throw new Error(`${key} is not a valid variant`);
        return console.warn("not found", key);
      }
      classes.push(variants[key][value]);
    });

    console.log(classes); // [ 'bg-blue-500', 'py-3', 'px-6' ]
    console.log(...classes); // bg-blue-500 py-3 px-6
    // karena classes berbentuk array, kita spread
    return cn(base, ...classes); // shadow-xl hover:shadow-none font-semibold rounded bg-blue-500 py-3 px-6
  };
}

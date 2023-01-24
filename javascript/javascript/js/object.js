const objek = {
    nama : "smk revit",
    telp : 12333,

    buah : ["apel","jeruk","mangga"],

    coba : function () {
         return "coba function dalam objek";
    },

    boleh: true,
    "tulis saja": 1234,
};

console.log(objek.buah[1]);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis saja"]);
const handleCreation = (req, res, db) => {
  const { ref, hab, sor, ene, ouro, joias, provisoes, pocoes, items, userId } =
    req.body;
  db.insert({
    userId: userId,
    ref: ref,
    hab: hab,
    ene: ene,
    sor: sor,
    ouro: ouro,
    joias: joias,
    pocoes: pocoes,
    provisoes: provisoes,
    items: items,
  }).into("userstatus");
};
module.exports = { handleCreation };

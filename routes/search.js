module.exports = (router)=>{
  router.get('/:place', async function(req, res, next) {
     return await res.render("menu", {search: req.params.search});
  })

  return router;
}

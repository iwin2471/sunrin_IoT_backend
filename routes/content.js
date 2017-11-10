module.exports = (router)=>{
  router.get('/', async function(req, res, next) {
     return await res.render("content");
  })

  return router;
}

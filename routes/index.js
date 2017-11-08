module.exports = (router)=>{
  router.get('/', function(req, res, next) {
    await res.render({home});
  })

  return router;
}

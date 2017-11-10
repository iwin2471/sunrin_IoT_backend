module.exports = (router, Boards)=>{
  router.get('/', async (req,res)=>{
    return await res.render("complain");
  });
  return router;
}

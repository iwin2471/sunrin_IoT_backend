module.exports = (router, Boards)=>{
  router.get('/' async (req,res)=>{
    var boards = await Boards.find({});
    return await res.render("complain", {boards: boards});
  });
  return router;
}

module.exports = (router, Boards)=>{
  router.get('/', async (req,res)=>{
    var boards = await Boards.find({});
    return await res.render("board", {boards: boards});
  });
  router.post('/', async function(req, res, next) {
    const data = req.body;
    const new_Board = new Boards(data);
    var result = await new_Board.save();
    return res.redirect("/board");
  });

  return router;
}

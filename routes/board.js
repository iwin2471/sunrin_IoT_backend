module.exports = (router)=>{
  router.get('/', async (req,res)=>{
    return await res.render("board");
  });
  router.post('/', async function(req, res, next) {
    const data = req.body;
    const new_Board = new Boards(data);
      try{
        var result = await new_Board.save();
      }catch(e){
        if(e instanceof user_duplicate) return res.status(409).json({message:"already exist"});
        if(e instanceof ValidationError) return res.status(400).json({message: e.message});
        if(e instanceof paramsError) return res.status(400).json({message: e.message});
      }
    return res.redirect("/complain");
  });

  return router;
}

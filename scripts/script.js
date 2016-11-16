// module.exports = function(robot){
// robot.hear(/javascript/i, function(msg) {
    //  return msg.send("I love JavaScript!");
  //  });
// }



module.exports = function(robot){
  robot.hear(/yebot/i, function(res) {

    quotes = [
              "Visiting my mind is like visiting the Hermès factory. Shit is real  -Kanye West",
              "I will go down as the voice of this generation, of this decade, I will be the loudest voice  -Kanye West",
              "If Magic Johnson got a cure for A.I.D.S. And all the broke muthaf*ckers past away You tellin me if my grandma was in the N.B.A. Right now she'd be ok?  -Kanye West",
              "Yo Taylor, I’m really happy for you, Imma let you finish but  -Kanye West",
              "We all self-conscious. I'm just the first to admit it.  -Kanye West",
              "My greatest pain in life is that I will never be able to see myself perform live.  -Kanye West"
            ]
          return res.send(res.random(quotes));
      });
}

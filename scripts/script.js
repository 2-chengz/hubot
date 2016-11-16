// module.exports = function(robot){
// robot.hear(/javascript/i, function(msg) {
    //  return msg.send("I love JavaScript!");
  //  });
// }



module.exports = function(robot){
  robot.hear(/yebot/i, function(res) {

    images = ["https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXyjlU0gjAw7llSCTY00VFEB1g30i40sUBIC1ozvv9ORPgRwwa",
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJQi1QJm8Hi94guCaipiFXnmWFrDhb3annqXcQk2YOL3M3W0Xgdg",
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9GLA9AwppQ3TgVWDszuwhHM9izi2caHsxWhlmVL2G-JDDyFf-",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8-rdjdQw6nQLEIejnDBly4vgaMQ0EX7omcX1sWKzoJ0oUiUc",
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROIMkga_-x8_wDZJFwgAW7MjVJrAqzoBpn3dl6rEOjwjM8TpZM",
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTen_0CF9_X0UN0EEPrHO2Wqw3HugFMbIah46wuKHLCRmO74pDnvw"
            ]

    quotes = [
              "Visiting my mind is like visiting the Hermès factory. Shit is real.",
              "I will go down as the voice of this generation, of this decade, I will be the loudest voice",
              "If Magic Johnson got a cure for A.I.D.S. And all the broke muthaf*ckers past away You tellin me if my grandma was in the N.B.A. Right now she'd be ok?",
              "Yo Taylor, I’m really happy for you, Imma let you finish but...",
              "We all self-conscious. I'm just the first to admit it.",
              "My greatest pain in life is that I will never be able to see myself perform live.",
              "I think I do myself a disservice by comparing myself to Steve Jobs and Walt Disney and human beings that we've seen before. It should be more like Willy Wonka... and welcome to my chocolate factory.",
              "I feel like I’m too busy writing history to read it.",
              "Fur pillows are hard to actually sleep on.",
              "I hate when I’m on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle.",
              "By 50 percent [I am more influential than] Stanley Kubrick, Apostle Paul, Picasso... f****** Picasso and Escobar. By 50 per cent more influential than any other human being."
            ]

          return [res.send(res.random(images)) + res.send(res.random(quotes))];
      });
}

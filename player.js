class Player{
constructor(){}
getgameState(){
    var playergameState = database.ref('playerCount');
    playergameState.on("value",(data)=>{
      playerState = data.val();
    })
}
updategameState(gameState){
    database.ref('/').update({
      playerState: gameState
    });
  }


}
window.addEventListener('load', function(){
    var gameBoard = document.querySelector('.board');
    gameBoard.innerHTML = '';
    for(var i = 0; i < 9; i++){
        var piece = new Piece(i);
        pieces.push(piece);
    }
 });
 
 
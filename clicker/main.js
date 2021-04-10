var bricks = 0;
var brickClickerLevel = 0;
var pointPrinters = 0;

function prettify(input){
    var output = Math.round(input * 1000)/1000;
	return output;
}

function getBricks(number){
    bricks = bricks + number;
    document.getElementById("bricks").innerHTML = prettify(bricks);
};

function upgradeBrickClicker(){
    var upgradeBrickClickerCost = Math.floor(10 * Math.pow(1.1,brickClickerLevel));     //works out the cost of this cursor
    if(bricks >= upgradeBrickClickerCost){                                   //checks that the player can afford the cursor
        brickClickerLevel = brickClickerLevel + 1;                                   //increases number of brickClickerLevel
    	bricks = bricks - upgradeBrickClickerCost;                          //removes the bricks spent
        document.getElementById('brickClickerLevel').innerHTML = brickClickerLevel;  //updates the number of brickClickerLevel for the user
        document.getElementById('bricks').innerHTML = prettify(bricks);  //updates the number of bricks for the user
    };
    var nextUpgradeBrickClickerCost = Math.floor(10 * Math.pow(1.1,brickClickerLevel));       //works out the cost of the next cursor
    document.getElementById('UBCC').innerHTML = nextUpgradeBrickClickerCost;  //updates the cursor cost for the user
};

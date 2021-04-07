var points = 0;
var buttonLevel = 0;

function getPoints(number){
    points = points + number;
    document.getElementById("points").innerHTML = points;
};

function upgradePointClick(){
    var upgradePointClickCost = Math.floor(10 * Math.pow(1.1,buttonLevel));     //works out the cost of this cursor
    if(points >= upgradePointClickCost){                                   //checks that the player can afford the cursor
        buttonLevel = buttonLevel + 1;                                   //increases number of buttonLevel
    	points = points - upgradePointClickCost;                          //removes the points spent
        document.getElementById('buttonLevel').innerHTML = buttonLevel;  //updates the number of buttonLevel for the user
        document.getElementById('points').innerHTML = points;  //updates the number of points for the user
    };
    var nextUpgradePointClickCost = Math.floor(10 * Math.pow(1.1,buttonLevel));       //works out the cost of the next cursor
    document.getElementById('UPCC').innerHTML = nextUpgradePointClickCost;  //updates the cursor cost for the user
};
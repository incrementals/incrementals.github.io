var points = 0;
var upgradeTier = 0;

function getPoints(number){
 points = points + number;
    document.getElementById("points").innerHTML = points;
};

function upgradePointClick(){
    var upgradePointClickCost = Math.floor(10 * Math.pow(1.1,upgradeTier));     //works out the cost of this cursor
    if(points >= upgradePointClickCost){                                   //checks that the player can afford the cursor
        upgradeTier = upgradeTier + 1;                                   //increases number of upgradeTier
    	points = points - upgradePointClickCost;                          //removes the points spent
        document.getElementById('upgradeTier').innerHTML = upgradeTier;  //updates the number of upgradeTier for the user
        document.getElementById('points').innerHTML = points;  //updates the number of points for the user
    };
    var nextUpgradePointClickCost = Math.floor(10 * Math.pow(1.1,upgradeTier));       //works out the cost of the next cursor
    document.getElementById('upgradePointClickCost').innerHTML = nextUpgradePointClickCost;  //updates the cursor cost for the user
};
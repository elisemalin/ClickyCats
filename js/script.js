let enemies = [{
    name: "Goblin",
    health: 50,
    attack: 5,
    defense: 2,
    img: "goblin.png"
  },
  {
    name: "Froog",
    health: 75,
    attack: 10,
    defense: 5,
    img: "froog.PNG"
  },
  {
    name: "Demon",
    health: 100,
    attack: 15,
    defense: 8,
    img: "demon.png"
  }
];

var playerHealth = 100;
var playerAttack = 10;
var playerDefense = 5;
var enemyHealth = 50;
var enemyAttack = 6;
var enemyDefense = 5;
var score = 0;
var autoCombatId;
var currentEnemy = 0;
var loading = 0;

function autoCombat() {
  autoCombatId = setInterval(function() {
    var damageDealt = playerAttack - enemyDefense;
    var damageReceived = enemyAttack - playerDefense;
    enemyHealth -= damageDealt;
    playerHealth -= damageReceived;
    document.getElementById("player-health").innerHTML = playerHealth;
    document.getElementById("enemy-health").innerHTML = enemyHealth;
    document.getElementById("kitty-img").classList.add("attack-animation");
  setTimeout(function() {
    document.getElementById("kitty-img").classList.remove("attack-animation");
  }, 500);
  document.getElementById("enemy-img").classList.add("enemy-attack-animation");
    setTimeout(function() {
        document.getElementById("enemy-img").classList.remove("enemy-attack-animation");
    }, 500);
    if (enemyHealth <= 0) {
      alert("You have defeated the enemy!");
      document.getElementById("enemy-img").classList.add("death-animation");
        setTimeout(function() {
            document.getElementById("enemy-img").classList.remove("death-animation");
        }, 500);
      score += 10;
      document.getElementById("score").innerHTML = score;
      enemyHealth = 50;
    }
    if (playerHealth <= 0) {
        document.getElementById("kitty-img").classList.add("death-animation");
        setTimeout(function() {
            document.getElementById("kitty-img").classList.remove("death-animation");
        }, 500);
      alert("You have been defeated!");
      playerHealth = 100;
      score = 0;
    }
  }, 1000);
}


function combat() {
    var damageDealt = playerAttack - enemyDefense;
    var damageReceived = enemyAttack - playerDefense;
    enemyHealth -= damageDealt;
    playerHealth -= damageReceived;
    document.getElementById("player-health").innerHTML = playerHealth;
    document.getElementById("enemy-health").innerHTML = enemyHealth;
    document.getElementById("kitty-img").classList.add("attack-animation");
  setTimeout(function() {
    document.getElementById("kitty-img").classList.remove("attack-animation");
  }, 500);
  document.getElementById("enemy-img").classList.add("enemy-attack-animation");
    setTimeout(function() {
        document.getElementById("enemy-img").classList.remove("enemy-attack-animation");
    }, 500);
    if (enemyHealth <= 0) {
      alert("You have defeated the enemy!");
      document.getElementById("enemy-img").classList.add("death-animation");
        setTimeout(function() {
            document.getElementById("enemy-img").classList.remove("death-animation");
        }, 500);
      score += 10;
      document.getElementById("score").innerHTML = score;
      enemyHealth = 50;
    }
    if (playerHealth <= 0) {
        document.getElementById("kitty-img").classList.add("death-animation");
        setTimeout(function() {
            document.getElementById("kitty-img").classList.remove("death-animation");
        }, 500);
      alert("You have been defeated!");
      playerHealth = 100;
      score = 0;
    }
  }

  function upgradeAttack() {
    if (score >= 20) {
      playerAttack += 5;
      score -= 20;
      document.getElementById("player-attack").innerHTML = playerAttack;
      document.getElementById("score").innerHTML = score;
    } else {
      alert("Not enough points to upgrade!");
    }
  }
  
  function upgradeDefense() {
    if (score >= 20) {
      playerDefense += 5;
      score -= 20;
      document.getElementById("player-defense").innerHTML = playerDefense;
      document.getElementById("score").innerHTML = score;
    } else {
      alert("Not enough points to upgrade!");
    }
  }
  
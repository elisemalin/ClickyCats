var playerHealth = 100;
var playerAttack = 10;
var playerDefense = 5;
var enemyHealth = 50;
var enemyAttack = 6;
var enemyDefense = 5;
var score = 0;
var autoCombatId;

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
    if (enemyHealth <= 0) {
      alert("You have defeated the enemy!");
      score += 10;
      enemyHealth = 50;
    }
    if (playerHealth <= 0) {
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
    if (enemyHealth <= 0) {
      alert("You have defeated the enemy!");
      score += 10;
      document.getElementById("score").innerHTML = score;
      enemyHealth = 50;
    }
    if (playerHealth <= 0) {
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
  
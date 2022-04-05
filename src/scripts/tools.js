export function addListener(type, id, callback, param){
    document.getElementById(id).addEventListener(type, function (){
      callback(param);
    });
  }

export function calculateMultiplier(count) {
  if (count === 0) {
    return 0;
  } else if (count === 1){
    return 1;
  } else if (count === 2) {
    return 1.5;
  } else if (count >= 3 && count <= 6) {
    return 2;
  } else if (count >= 7 && count <= 10) {
    return 2.5;
  } else if (count >= 11 && count <= 14) {
    return 3;
  } else if (count >= 15) {
    return 4;
  }
}

export function calculateXpValues(playerLevels){
  let xpThresholds = [
    0,
    0,
    0,
    0
  ]

  for (let i = 0; i < playerLevels.length; i++) {
    switch (playerLevels[i].value) {
      case "1":
        xpThresholds[0] += 25;
        xpThresholds[1] += 50;
        xpThresholds[2] += 75;
        xpThresholds[3] += 100;
        break;
      case "2":
        xpThresholds[0] += 50;
        xpThresholds[1] += 100;
        xpThresholds[2] += 150;
        xpThresholds[3] += 200;
        break;
      case "3":
        xpThresholds[0] += 75;
        xpThresholds[1] += 150;
        xpThresholds[2] += 225;
        xpThresholds[3] += 400;
        break;
      case "4":
        xpThresholds[0] += 125;
        xpThresholds[1] += 250;
        xpThresholds[2] += 375;
        xpThresholds[3] += 500;
        break;
      case "5":
        xpThresholds[0] += 250;
        xpThresholds[1] += 500;
        xpThresholds[2] += 750;
        xpThresholds[3] += 1000;
        break;
      case "6":
        xpThresholds[0] += 300;
        xpThresholds[1] += 600;
        xpThresholds[2] += 900;
        xpThresholds[3] += 1400;
        break;
      case "7":
        xpThresholds[0] += 350;
        xpThresholds[1] += 750;
        xpThresholds[2] += 1100;
        xpThresholds[3] += 1700;
        break;
      case "8":
        xpThresholds[0] += 450;
        xpThresholds[1] += 900;
        xpThresholds[2] += 1400;
        xpThresholds[3] += 2100;
        break;
      case "9":
        xpThresholds[0] += 550;
        xpThresholds[1] += 1100;
        xpThresholds[2] += 1600;
        xpThresholds[3] += 2400;
        break;
      case "10":
        xpThresholds[0] += 600;
        xpThresholds[1] += 1200;
        xpThresholds[2] += 1900;
        xpThresholds[3] += 2800;
        break;
      case "11":
        xpThresholds[0] += 800;
        xpThresholds[1] += 1600;
        xpThresholds[2] += 2400;
        xpThresholds[3] += 3600;
        break;
      case "12":
        xpThresholds[0] += 1000;
        xpThresholds[1] += 2000;
        xpThresholds[2] += 3000;
        xpThresholds[3] += 4000;
        break;
      case "13":
        xpThresholds[0] += 1100;
        xpThresholds[1] += 2200;
        xpThresholds[2] += 3400;
        xpThresholds[3] += 5100;
        break;
      case "14":
        xpThresholds[0] += 1250;
        xpThresholds[1] += 2500;
        xpThresholds[2] += 3800;
        xpThresholds[3] += 5700;
        break;
      case "15":
        xpThresholds[0] += 1400;
        xpThresholds[1] += 2800;
        xpThresholds[2] += 4300;
        xpThresholds[3] += 6400;
        break;
      case "16":
        xpThresholds[0] += 1600;
        xpThresholds[1] += 3200;
        xpThresholds[2] += 4800;
        xpThresholds[3] += 7200;
        break;
      case "17":
        xpThresholds[0] += 2000;
        xpThresholds[1] += 3900;
        xpThresholds[2] += 5900;
        xpThresholds[3] += 8800;
        break;
      case "18":
        xpThresholds[0] += 2100;
        xpThresholds[1] += 4200;
        xpThresholds[2] += 6300;
        xpThresholds[3] += 9500;
        break;
      case "19":
        xpThresholds[0] += 2400;
        xpThresholds[1] += 4900;
        xpThresholds[2] += 7300;
        xpThresholds[3] += 10900;
        break;
      case "20":
        xpThresholds[0] += 2800;
        xpThresholds[1] += 5700;
        xpThresholds[2] += 8500;
        xpThresholds[3] += 12700;
        break;
    }
  }
  return xpThresholds;
}

export function setDifficultyMessage(finalTotal) {
  const easyXp = getXpValueFromPlayerSummary("easy-xp");
  const mediumXp = getXpValueFromPlayerSummary("medium-xp");
  const hardXp = getXpValueFromPlayerSummary("hard-xp");
  const deadlyXp = getXpValueFromPlayerSummary("deadly-xp");

  const diffMeter = document.getElementById("difficulty-meter");

  const difficultyThresholds = [
    easyXp,
    mediumXp,
    hardXp,
    deadlyXp
  ];

  difficultyThresholds.sort((a, b) => {
    return Math.abs(finalTotal - a) - Math.abs(finalTotal - b);
})

console.log(difficultyThresholds[0]);

  if (difficultyThresholds[0] === easyXp) {
    diffMeter.innerHTML = `
      <h2>This encounter will be <span style="color: green">EASY</span> for your players!</h2>
    `
  } else if (difficultyThresholds[0] === mediumXp) {
    diffMeter.innerHTML = `
      <h2>This encounter will be of <span style="color: yellow">MEDIUM</span> difficulty for your players!</h2>
    `
  } else if (difficultyThresholds[0] === hardXp) {
    diffMeter.innerHTML = `
      <h2>This encounter will be <span style="color: orange">HARD</span> for your players!</h2>
    `
  } else if (difficultyThresholds[0] === deadlyXp) {
    diffMeter.innerHTML = `
      <h2>This encounter will be <span style="color: red">DEADLY</span> for your players!</h2>
    `
  }
}

export function getXpValueFromPlayerSummary(id) {
  let xpValue = document.getElementById(id).innerHTML;
  xpValue = xpValue.replace(/\D/g,'');
  xpValue = parseInt(xpValue);
  return xpValue;
}

export function convertCrToXp(cr){
    switch (cr){
      case "0":
        return 10;
      case "1/8":
        return 25;
      case "1/4":
        return 50;
      case "1/2":
        return 100;
      case "1":
        return 200;
      case "2":
        return 450;
      case "3":
        return 700;
      case "4":
        return 1100;
      case "5":
        return 1800;
      case "6":
        return 2300;
      case "7":
        return 2900;
      case "8":
        return 3900;
      case "9":
        return 5000;
      case "10":
        return 5900;
      case "11":
        return 7200;
      case "12":
        return 8400;
      case "13":
        return 10000;
      case "14":
        return 11500;
      case "15":
        return 13000;
      case "16":
        return 15000;
      case "17":
        return 18000;
      case "18":
        return 20000;
      case "19":
        return 22000;
      case "20":
        return 25000;
      case "21":
        return 33000;
      case "22":
        return 41000;
      case "23":
        return 50000;
      case "24":
        return 62000;
      case "25":
        return 75000;
      case "26":
        return 90000;
      case "27":
        return 105000;
      case "28":
        return 120000;
      case "29":
        return 135000;
      case "30":
        return 155000;
      default:
        return 0;
    }
  }
  
export function convertNumPlayersToString(numPlayersInt) {
  switch (numPlayersInt) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    default:
      return 0;
  }
}

export function formatCrAsIdString(rating) {
  switch (rating) {
    case "1/8":
      return "eighth";
    case "1/4":
      return "quarter";
    case "1/2":
      return "half";
    default:
      return rating;
  }
}
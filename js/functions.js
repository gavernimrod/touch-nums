function shuffle(nums) {
    var randIdx, temp;
    for (var i = nums.length - 1; i > 0; i--) {
      randIdx = getRandomInt(0, nums.length - 1);
      temp = nums[i];
      nums[i] = nums[randIdx];
      nums[randIdx] = temp;
    }
    return nums;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  
  function hideNumber(elNum) {
  var fadeNumber = setInterval(function() {
    if (!elNum.style.opacity) {
      elNum.style.opacity = 1;
    }
    if (elNum.style.opacity > 0) {
      elNum.style.opacity -= 0.1;
    } else {
      clearInterval(fadeNumber);
    }
  }, 50);
}

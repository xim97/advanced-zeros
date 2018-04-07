module.exports = function getZerosCount(number, base) {
 	var ans = 1000000000000,
  		powers = [],
  		copy = base,
  		p, sum, k;  		
  	for (var i = 2; i <= base; i++){
  		p = 0;
  		while (base % i === 0 && base !== 0){
  			p++;
  			base /= i;	
  		}
  		if (p !== 0){
  			powers[i] = p;
  		}
  		if (base === 0){
  			break;
  		}
  	}  	
  	for (var j = 2; j <= copy; j++){
  		if (powers[j] !== undefined){
  			sum = 0;
            k = number;
            while (k / j > 0){
                   sum += Math.trunc(k / j);
                   k /= j;
            }
            ans = Math.min(ans, Math.trunc(sum / powers[j]));
  		}
  	}  	
  	return ans;
}
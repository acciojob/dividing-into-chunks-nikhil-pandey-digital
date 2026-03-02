const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	let ans=[]; let subArr=[],subArrSum=0;
	for(let i=0;i<arr.length;i++){
		if(subArrSum+arr[i]<=n){ 
			subArr.push(arr[i]);
			subArrSum+=arr[i];
		}else{
			if(subArr.length!==0)ans.push(subArr);
			subArr=[arr[i]];
			subArrSum=arr[i];
		}
	}
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

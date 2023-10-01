<script>

	// JavaScript program for the above approach
	
	// Function to sort the array using
	// the Slow sort
	function slow_sort(A, i, j)
	{

		// Recursion break condition
		if (i >= j)
			return;

		// Store the middle value
		let m = parseInt((i + j) / 2, 10);

		// Recursively call with the
		// left half
		slow_sort(A, i, m);

		// Recursively call with the
		// right half
		slow_sort(A, m + 1, j);

		// Swap if the first element is
		// lower than second
		if (A[j] < A[m])
		{
			let temp = A[j];
			A[j] = A[m];
			A[m] = temp;
		}

		// Recursively call with the
		// array excluding the maximum
		// element
		slow_sort(A, i, j - 1);
	}

	// Function to print the array
	function printArray(arr, size)
	{
		let i;
		for(i = 0; i < size; i++)
			document.write(arr[i] + " ");

		document.write("</br>");
	}
	
	let arr = [ 6, 8, 9, 4, 12, 1 ];
	let n = arr.length;

	// Function Call
	slow_sort(arr, 0, n - 1);

	// Print the sorted array
	printArray(arr, n);
	
</script>

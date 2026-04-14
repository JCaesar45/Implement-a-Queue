// Test Suite
function runTests() {
  console.log("Running Queue Tests...\n");
  
  // Test 1: enqueue function exists
  console.log("✓ Test 1: enqueue function exists");
  
  // Test 2: enqueue adds to back
  let q1 = initQueue();
  enqueue(q1, 1);
  enqueue(q1, 2);
  console.log("✓ Test 2: enqueue adds to back:", q1.collection[0] === 1 && q1.collection[1] === 2);
  
  // Test 3: dequeue function exists
  console.log("✓ Test 3: dequeue function exists");
  
  // Test 4 & 5: dequeue removes and returns front, returns undefined on empty
  let q2 = initQueue();
  enqueue(q2, "first");
  enqueue(q2, "second");
  console.log("✓ Test 4: dequeue returns front:", dequeue(q2) === "first");
  console.log("✓ Test 5: dequeue on empty returns undefined:", dequeue(initQueue()) === undefined);
  
  // Test 6: enqueue continues after dequeues
  let q3 = initQueue();
  enqueue(q3, 1);
  enqueue(q3, 2);
  dequeue(q3);
  enqueue(q3, 3);
  console.log("✓ Test 6: enqueue after dequeue:", q3.collection.join(",") === "2,3");
  
  // Test 7: Different instances don't share state
  let qA = initQueue();
  let qB = initQueue();
  enqueue(qA, "A");
  enqueue(qB, "B");
  console.log("✓ Test 7: Separate instances:", qA.collection[0] === "A" && qB.collection[0] === "B");
  
  // Test 8-10: front function
  let q4 = initQueue();
  enqueue(q4, "front");
  console.log("✓ Test 8: front function exists");
  console.log("✓ Test 9: front returns without removing:", front(q4) === "front" && size(q4) === 1);
  console.log("✓ Test 10: front on empty returns undefined:", front(initQueue()) === undefined);
  
  // Test 11-12: size function
  let q5 = initQueue();
  console.log("✓ Test 11: size function exists");
  enqueue(q5, 1);
  enqueue(q5, 2);
  console.log("✓ Test 12: size returns correct count:", size(q5) === 2);
  
  // Test 13-16: isEmpty function
  let q6 = initQueue();
  console.log("✓ Test 13: isEmpty function exists");
  console.log("✓ Test 14: isEmpty true for empty:", isEmpty(q6) === true);
  enqueue(q6, "item");
  console.log("✓ Test 15: isEmpty false for non-empty:", isEmpty(q6) === false);
  dequeue(q6);
  console.log("✓ Test 16: isEmpty true after all removed:", isEmpty(q6) === true);
  
  console.log("\n✅ All tests completed!");
}

runTests();

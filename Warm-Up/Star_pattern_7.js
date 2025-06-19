let n = 4;
for (let i = 0; i <= n; i++) {
  let row = "";
  let toggle=1;
  for (let j = 0; j < i; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1; // Toggle between 0 and 1
  }
  console.log(row);
}
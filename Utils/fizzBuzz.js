module.exports = fizzBuzz = number => {
  const output = [];
  for (i = 0; i < number; )
    output.push((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
  return output;
};

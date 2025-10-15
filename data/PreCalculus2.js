const PreCalculus2Questions = [
  {
    "topic": "Limits & Continuity",
    "difficulty": "Easy",
    "question": "Evaluate the limit: lim(x→2) (3x + 1).",
    "options": {
      "a": "6",
      "b": "7",
      "c": "5",
      "d": "8"
    },
    "correct": "b"
  },
  {
    "topic": "Limits & Continuity",
    "difficulty": "Medium",
    "question": "Determine lim(x→0) (sin(x)/x).",
    "options": {
      "a": "sin(0)",
      "b": "Undefined",
      "c": "0",
      "d": "1"
    },
    "correct": "d"
  },
  {
    "topic": "Limits & Continuity",
    "difficulty": "Hard",
    "question": "If f(x) = (x² - 4)/(x - 2), find lim(x→2) f(x).",
    "options": {
      "a": "0",
      "b": "Undefined",
      "c": "4",
      "d": "2"
    },
    "correct": "c"
  },
  {
    "topic": "Derivatives",
    "difficulty": "Easy",
    "question": "Find the derivative of f(x) = 5x².",
    "options": {
      "a": "25x",
      "b": "10x",
      "c": "x²",
      "d": "5x"
    },
    "correct": "b"
  },
  {
    "topic": "Derivatives",
    "difficulty": "Medium",
    "question": "A function is f(x) = 3x³ - 2x. Find f'(x).",
    "options": {
      "a": "9x³ - 2",
      "b": "3x² - 2",
      "c": "9x² - 2",
      "d": "6x² - 2"
    },
    "correct": "c"
  },
  {
    "topic": "Derivatives",
    "difficulty": "Hard",
    "question": "A particle moves along a line with position s(t) = t³ - 6t² + 9t. Find when the velocity is zero.",
    "options": {
      "a": "t = 0 or t = 2",
      "b": "t = 1 or t = 3",
      "c": "t = -1 or t = 3",
      "d": "t = 3 only"
    },
    "correct": "b"
  },
  {
    "topic": "Integrals",
    "difficulty": "Easy",
    "question": "Compute ∫ 3 dx.",
    "options": {
      "a": "3 + C",
      "b": "0",
      "c": "3x + C",
      "d": "x³ + C"
    },
    "correct": "c"
  },
  {
    "topic": "Integrals",
    "difficulty": "Medium",
    "question": "Compute ∫ (2x + 1) dx.",
    "options": {
      "a": "x + 1 + C",
      "b": "x² + x + C",
      "c": "2x² + 1 + C",
      "d": "x² + C"
    },
    "correct": "b"
  },
  {
    "topic": "Integrals",
    "difficulty": "Hard",
    "question": "Find the area under f(x) = x² from x = 0 to x = 2.",
    "options": {
      "a": "4",
      "b": "2",
      "c": "3",
      "d": "8/3"
    },
    "correct": "d"
  },
  {
    "topic": "Fundamental Theorem of Calculus",
    "difficulty": "Easy",
    "question": "If F(x) = ∫0^x 2t dt, find F'(x).",
    "options": {
      "a": "2",
      "b": "0",
      "c": "x²",
      "d": "2x"
    },
    "correct": "d"
  },
  {
    "topic": "Fundamental Theorem of Calculus",
    "difficulty": "Medium",
    "question": "Evaluate d/dx ∫1^x (3t²) dt.",
    "options": {
      "a": "6x",
      "b": "3x²",
      "c": "x²",
      "d": "3"
    },
    "correct": "b"
  },
  {
    "topic": "Fundamental Theorem of Calculus",
    "difficulty": "Hard",
    "question": "If G(x) = ∫0^(x²) sin(t) dt, find G'(x).",
    "options": {
      "a": "sin(x)",
      "b": "2x sin(x²)",
      "c": "x sin(x²)",
      "d": "cos(x²)"
    },
    "correct": "b"
  },
  {
    "topic": "Basic Differential Equations",
    "difficulty": "Easy",
    "question": "Solve dy/dx = 3. Find y.",
    "options": {
      "a": "y = 3 + x",
      "b": "y = x³",
      "c": "y = 3x + C",
      "d": "y = 3"
    },
    "correct": "c"
  },
  {
    "topic": "Basic Differential Equations",
    "difficulty": "Medium",
    "question": "Solve dy/dx = 2y, y(0) = 1.",
    "options": {
      "a": "y = 1 + 2x",
      "b": "y = e^(2x)",
      "c": "y = e^x",
      "d": "y = 2x"
    },
    "correct": "b"
  },
  {
    "topic": "Basic Differential Equations",
    "difficulty": "Hard",
    "question": "Solve dy/dx + y = 0.",
    "options": {
      "a": "y = x + C",
      "b": "y = Ce^x",
      "c": "y = 0",
      "d": "y = Ce^(-x)"
    },
    "correct": "d"
  },
  {
    "topic": "Data Analysis: Mean, Median, Mode, Standard Deviation",
    "difficulty": "Easy",
    "question": "Find the mean of the numbers 2, 4, 6, 8.",
    "options": {
      "a": "10",
      "b": "6",
      "c": "5",
      "d": "4"
    },
    "correct": "c"
  },
  {
    "topic": "Data Analysis: Mean, Median, Mode, Standard Deviation",
    "difficulty": "Medium",
    "question": "Find the median of 1, 3, 3, 6, 7, 8.",
    "options": {
      "a": "3",
      "b": "5",
      "c": "6",
      "d": "4.5"
    },
    "correct": "d"
  },
  {
    "topic": "Data Analysis: Mean, Median, Mode, Standard Deviation",
    "difficulty": "Hard",
    "question": "Compute the standard deviation of 2, 4, 4, 4, 5, 5, 7.",
    "options": {
      "a": "3",
      "b": "1.41",
      "c": "1",
      "d": "2"
    },
    "correct": "b"
  },
  {
    "topic": "Probability: Independent & Dependent Events",
    "difficulty": "Easy",
    "question": "If a coin is tossed, what is the probability of getting heads?",
    "options": {
      "a": "1/3",
      "b": "0",
      "c": "1",
      "d": "1/2"
    },
    "correct": "d"
  },
  {
    "topic": "Probability: Independent & Dependent Events",
    "difficulty": "Medium",
    "question": "If two dice are rolled, what is the probability both show a 3?",
    "options": {
      "a": "1/12",
      "b": "1/36",
      "c": "1/18",
      "d": "1/6"
    },
    "correct": "b"
  },
  {
    "topic": "Probability: Independent & Dependent Events",
    "difficulty": "Hard",
    "question": "A bag has 3 red and 2 blue balls. Two balls are drawn without replacement. Probability both are red?",
    "options": {
      "a": "1/4",
      "b": "3/5",
      "c": "6/25",
      "d": "3/10"
    },
    "correct": "c"
  },
  {
    "topic": "Binomial Distribution",
    "difficulty": "Easy",
    "question": "A coin is flipped 3 times. What is the probability of getting exactly 2 heads?",
    "options": {
      "a": "1/4",
      "b": "3/8",
      "c": "1",
      "d": "1/2"
    },
    "correct": "b"
  },
  {
    "topic": "Binomial Distribution",
    "difficulty": "Medium",
    "question": "In a binomial experiment with 5 trials and probability 0.6 of success, what is the probability of exactly 3 successes?",
    "options": {
      "a": "0.5",
      "b": "0.216",
      "c": "0.3456",
      "d": "0.432"
    },
    "correct": "c"
  },
  {
    "topic": "Binomial Distribution",
    "difficulty": "Hard",
    "question": "A die is rolled 6 times. Probability of rolling exactly four 6's?",
    "options": {
      "a": "0.02",
      "b": "0.25",
      "c": "0.01543",
      "d": "0.1"
    },
    "correct": "c"
  },
  {
    "topic": "Normal Distribution & Z-scores",
    "difficulty": "Easy",
    "question": "A test has a mean of 100 and standard deviation of 10. What is the z-score of a score 110?",
    "options": {
      "a": "-1",
      "b": "10",
      "c": "0.5",
      "d": "1"
    },
    "correct": "d"
  },
  {
    "topic": "Normal Distribution & Z-scores",
    "difficulty": "Medium",
    "question": "If a score of 85 has a z-score of -1.5, what is the standard deviation if the mean is 100?",
    "options": {
      "a": "5",
      "b": "12",
      "c": "10",
      "d": "20"
    },
    "correct": "c"
  },
  {
    "topic": "Normal Distribution & Z-scores",
    "difficulty": "Hard",
    "question": "A normally distributed variable has mean 50 and SD 5. What score corresponds to z = 2.3?",
    "options": {
      "a": "55",
      "b": "61.5",
      "c": "52.3",
      "d": "62"
    },
    "correct": "b"
  },
  {
    "topic": "Matrices & Linear Transformations",
    "difficulty": "Easy",
    "question": "Multiply the matrices: [[1,2],[3,4]] × [[1,0],[0,1]].",
    "options": {
      "a": "[[0,0],[0,0]]",
      "b": "[[1,1],[1,1]]",
      "c": "[[2,2],[7,4]]",
      "d": "[[1,2],[3,4]]"
    },
    "correct": "d"
  },
  {
    "topic": "Matrices & Linear Transformations",
    "difficulty": "Medium",
    "question": "Find the determinant of [[2,3],[1,4]].",
    "options": {
      "a": "11",
      "b": "2",
      "c": "5",
      "d": "0"
    },
    "correct": "c"
  },
  {
    "topic": "Matrices & Linear Transformations",
    "difficulty": "Hard",
    "question": "If A = [[1,2],[3,4]], find A⁻¹ (inverse matrix).",
    "options": {
      "a": "[[0,0],[0,0]]",
      "b": "[[-2,1],[1.5,-0.5]]",
      "c": "[[2,-1],[-1.5,0.5]]",
      "d": "[[4,-2],[-3,1]]"
    },
    "correct": "b"
  },
  {
    "topic": "Conic Sections",
    "difficulty": "Easy",
    "question": "Identify the conic: x² + y² = 16.",
    "options": {
      "a": "Hyperbola",
      "b": "Circle",
      "c": "Parabola",
      "d": "Ellipse"
    },
    "correct": "b"
  },
  {
    "topic": "Conic Sections",
    "difficulty": "Medium",
    "question": "Find the equation of a parabola with vertex at (0,0) and focus at (0,2).",
    "options": {
      "a": "y² = 8x",
      "b": "x² = 4y",
      "c": "x² = 8y",
      "d": "y² = 4x"
    },
    "correct": "c"
  },
  {
    "topic": "Conic Sections",
    "difficulty": "Hard",
    "question": "Equation 9x² + 16y² = 144 represents which conic and its axes lengths?",
    "options": {
      "a": "Parabola, focus=12",
      "b": "Circle, r=12",
      "c": "Ellipse, a=4, b=3",
      "d": "Hyperbola, a=3, b=4"
    },
    "correct": "c"
  },
  {
    "topic": "Advanced Coordinate Geometry",
    "difficulty": "Easy",
    "question": "Find the slope of the line passing through points (2,3) and (4,7).",
    "options": {
      "a": "-2",
      "b": "0.5",
      "c": "1",
      "d": "2"
    },
    "correct": "d"
  },
  {
    "topic": "Advanced Coordinate Geometry",
    "difficulty": "Medium",
    "question": "Find the midpoint between (1,5) and (7,9).",
    "options": {
      "a": "(1,7)",
      "b": "(3,6)",
      "c": "(4,7)",
      "d": "(5,7)"
    },
    "correct": "c"
  },
  {
    "topic": "Advanced Coordinate Geometry",
    "difficulty": "Hard",
    "question": "Find the distance between points (-3,2) and (4,6).",
    "options": {
      "a": "√25",
      "b": "√65",
      "c": "7",
      "d": "√36"
    },
    "correct": "b"
  },
  {
    "topic": "Series: Arithmetic, Geometric, Infinite",
    "difficulty": "Easy",
    "question": "Find the sum of first 5 terms of arithmetic series 2,4,6,8,...",
    "options": {
      "a": "25",
      "b": "20",
      "c": "35",
      "d": "30"
    },
    "correct": "d"
  },
  {
    "topic": "Series: Arithmetic, Geometric, Infinite",
    "difficulty": "Medium",
    "question": "Find the 6th term of geometric series 3,6,12,24,...",
    "options": {
      "a": "72",
      "b": "48",
      "c": "192",
      "d": "96"
    },
    "correct": "c"
  },
  {
    "topic": "Series: Arithmetic, Geometric, Infinite",
    "difficulty": "Hard",
    "question": "Find the sum of infinite geometric series 8 + 4 + 2 + ...",
    "options": {
      "a": "12",
      "b": "32",
      "c": "16",
      "d": "8"
    },
    "correct": "c"
  }
]
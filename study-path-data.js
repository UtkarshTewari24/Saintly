// Saintly Study Path curriculum. Chapters are freely navigable; no lesson is gated.
export const STUDY_PATH = [
  { title: 'Exponents and Logarithms', icon: 'x²', color: 'blue', lessons: ['Integer Exponents', 'Fractional Exponents', 'Simplifying Radical Expressions', 'Rationalizing Denominators', 'Logarithms'] },
  { title: 'Complex Numbers', icon: 'i', color: 'orange', lessons: ['The Square Root of -1', 'Complex Arithmetic', 'Conjugates, Re, and Im'] },
  { title: 'Linear Equations', icon: '↗', color: 'blue', lessons: ['What Linear Means', 'Two Equations, Two Variables', 'Word Problems I: Translation', 'Word Problems II: Motion', 'Word Problems III: Work'] },
  { title: 'Proportions', icon: 'a:b', color: 'orange', lessons: ['Direct Proportion and Ratios', 'Inverse and Joint Proportion', 'Manipulating Proportions', 'Conversion Factors', 'Percent: Language and Change', 'Percent: Interest and Mixtures'] },
  { title: 'Using the Integers', icon: 'ℤ', color: 'blue', lessons: ['Divisibility and Number Bases', 'The Last Digit and Modular Arithmetic', 'Divisibility Tricks', 'Primes and Prime Factorization', 'GCF and LCM'] },
  { title: 'Quadratic Equations', icon: 'x²', color: 'orange', lessons: ['The Zero-Product Idea', 'Hard Factoring and Special Forms', 'The Quadratic Formula', 'Rearrangements and Substitutions', 'Denesting Radicals'] },
  { title: 'Special Factorizations and Clever Manipulations', icon: '✦', color: 'blue', lessons: ['The Factorization Library', 'Clever Manipulations', 'Problem Lab'] },
  { title: 'What Numbers Really Are', icon: 'ℝ', color: 'orange', lessons: ['Rationals: Decimals and Fractions', 'Irrationals and the Tower Completed'] },
  { title: 'An Introduction to Circles', icon: '○', color: 'blue', lessons: ['An Introduction to Circles'] },
  { title: 'Angles', icon: '∠', color: 'orange', lessons: ['Segments, Rays, and Measuring Angles', 'Parallel Lines and the Triangle’s 180°', 'Arcs, Sectors, and Circle Angles', 'The Burden of Proof'] },
  { title: 'Triangles, a.k.a. Geometry', icon: '△', color: 'blue', lessons: ['Classifying Triangles', 'Parts of a Triangle', 'The Triangle Inequality', 'The Pythagorean Theorem', 'Congruent Triangles', 'Similar Triangles', 'Introduction to Trigonometry', 'Area of a Triangle', 'A Handful of Helpful Hints'] },
  { title: 'Quadrilaterals', icon: '◇', color: 'orange', lessons: ['The Fundamentals', 'Trapezoids', 'Parallelograms', 'Rhombuses', 'Rectangles and Squares', 'Hints and Problems'] },
  { title: 'Polygons', icon: '⬡', color: 'blue', lessons: ['Types of Polygons', 'Angles in a Polygon', 'Regular Polygons', 'Regular Hexagons'] },
  { title: 'Angle Chasing', icon: '⌁', color: 'orange', lessons: ['Angle Chasing'] },
  { title: 'Areas', icon: '▧', color: 'blue', lessons: ['Similar Figures', 'Same Base / Same Altitude', 'Complicated Figures'] },
  { title: 'The Power of Coordinates', icon: '(x,y)', color: 'orange', lessons: ['Labelling the Plane', "What's it Good For?", 'Straight and Narrow', 'Plotting a Line', 'The Distance Formula and Circles', 'Went Down to the Crossroads', 'Fell Down on My Knees'] },
  { title: 'Power of a Point', icon: '⊙', color: 'blue', lessons: ['Introduction', 'Power of a Point Proofs'] },
  { title: 'Three Dimensional Geometry', icon: '◇', color: 'orange', lessons: ['Planes, Surface Area, and Volume', 'Spheres', 'Cubes and Boxes', 'Prisms and Cylinders', 'Pyramids and Cones', 'Polyhedra', 'How to Solve 3D Problems'] },
  { title: 'Shifts, Turns, Flips, Stretches, and Squeezes', icon: '↻', color: 'blue', lessons: ['Translation', 'Rotation', 'Reflection', 'Distortion', 'Dilation', 'The More Things Change', 'Transformation Proofs'] },
  { title: 'A Potpourri of Geometry', icon: '✣', color: 'orange', lessons: ['Mixed Geometry'] },
  { title: 'Functions', icon: 'ƒ', color: 'blue', lessons: ['Welcome to the Machine', 'Graphing Functions', 'Inputs and Outputs', 'Even and Odd', 'Some Special Functions', 'Absolute Values', 'Floored', 'Split Up', 'Transforming a Function'] },
  { title: 'Inequalities', icon: '≤', color: 'orange', lessons: ['What They Do', 'Linear Inequalities', 'Quadratic Inequalities', 'Absolute Value Inequalities', 'A Trivial Inequality'] },
  { title: 'Operations and Relations', icon: '∘', color: 'blue', lessons: ['What is an Operation?', 'Properties of Operations', 'Relations'] },
  { title: 'Sequences and Series', icon: 'Σ', color: 'orange', lessons: ['Arithmetic Series', 'Geometric Series', 'Infinite Series', 'Sigma Notation', 'Sequences', 'Sequences and Means'] },
  { title: 'Learning to Count', icon: '#', color: 'blue', lessons: ["What's to Learn?", 'Multiplication', 'The Number of Divisors', 'Restrictions on Multiplication', 'Permutations and Arrangements', 'Mixing it Up', 'Counting the Wrong Thing, Part I', 'Counting the Wrong Thing, Part II', 'Doing it Another Way', 'The Binomial Theorem'] },
  { title: 'Statistics and Probability', icon: '%', color: 'orange', lessons: ['Statistics', 'Probability and Common Sense', 'Multiplying Probabilities', 'Casework', 'Odds', 'Expected Value'] },
  { title: 'Sets', icon: '∪', color: 'blue', lessons: ['Some Definitions', 'Operating on Sets', 'Venn Diagrams', 'Subsets'] },
  { title: 'Prove It', icon: '∴', color: 'orange', lessons: ['Words, Words, Words', 'Contradiction', "Converses Aren't Necessarily True", 'Mathematical Induction', 'The Pigeonhole Principle', 'Convincing But Wrong'] }
];

const exactRoutes = {
  'Integer Exponents': 'exponents.html', 'Fractional Exponents': 'exponents.html', 'Simplifying Radical Expressions': 'exponents.html', 'Rationalizing Denominators': 'exponents.html', 'Logarithms': 'exponents.html',
  'Two Equations, Two Variables': 'systems-of-equations.html', 'Word Problems': 'word-problems.html', 'Modular Arithmetic': 'modular-arithmetic.html', 'Primes': 'prime-factorization.html',
  'Factoring Quadratics': 'factoring.html', 'Factorizations': 'factoring.html', 'Manipulations': 'algebraic-manipulation.html', 'The Pythagorean Theorem': 'pythagorean-theorem.html', 'Similar Triangles': 'similar-triangles.html',
  'Translation': 'transformations.html', 'Rotation': 'transformations.html', 'Reflection': 'transformations.html', 'Dilation': 'transformations.html', 'Transforming a Function': 'functions-and-graphing.html',
  'Graphing Functions': 'functions-and-graphing.html', 'Absolute Values': 'absolute-value.html', 'Linear Inequalities': 'inequalities.html', 'Quadratic Inequalities': 'inequalities.html', 'Absolute Value Inequalities': 'inequalities.html',
  'Arithmetic Series': 'series.html', 'Geometric Series': 'series.html', 'Infinite Series': 'series.html', 'Sequences': 'series.html', 'Sequences and Means': 'series.html', 'Casework': 'casework.html',
  'Mathematical Induction': 'induction.html', 'The Pigeonhole Principle': 'counting.html'
};

/* Chapters rebuilt as Brilliant-style interactive lessons route to the new engine.
   Map: topic index -> { chapter number in lessons/, lesson count }. */
const INTERACTIVE_CHAPTERS = { 0: { chapter: 1, count: 5 }, 1: { chapter: 2, count: 3 }, 2: { chapter: 3, count: 5 }, 3: { chapter: 4, count: 6 }, 4: { chapter: 5, count: 5 }, 5: { chapter: 6, count: 5 }, 6: { chapter: 7, count: 3 }, 7: { chapter: 8, count: 2 }, 8: { chapter: 9, count: 1 }, 9: { chapter: 10, count: 4 } };
export function interactiveLessonRoute(chapterIndex, lessonIndex) {
  const entry = INTERACTIVE_CHAPTERS[chapterIndex];
  if (entry && lessonIndex >= 0 && lessonIndex < entry.count) {
    return `interactive-lesson.html?chapter=${entry.chapter}&lesson=${lessonIndex + 1}`;
  }
  return null;
}

export function lessonRoute(chapter, lesson) {
  if (exactRoutes[lesson]) return exactRoutes[lesson];
  const title = chapter.title.toLowerCase();
  if (/circle|angle|triangle|quadrilateral|polygon|area|geometry|coordinate|point/.test(title)) return 'amc-10-geometry.html';
  if (/integer|number/.test(title)) return 'amc-10-number-theory.html';
  if (/count|probability|set|prove/.test(title)) return 'amc-10-combinatorics.html';
  if (/function/.test(title)) return 'functions-and-graphing.html';
  if (/inequal/.test(title)) return 'inequalities.html';
  if (/sequence/.test(title)) return 'series.html';
  return 'amc-10-algebra.html';
}

# the exponential function　`def.exp-function`
English entry · root `../`
[in graph](../#n=def.exp-function)　·　[Chinese page (authoritative)](./def.exp-function.md)

## Notes · **draft**
⭐ **The series comes first, $e^{x}$ later**: this definition does not depend on any geometric intuition, works just as well for complex numbers, and all properties (the functional equation, derivative equal to itself) can be computed from the series.

⭐ The functional equation is proved by convolution: $\exp(z+w) = \sum_n \frac{(z+w)^{n}}{n!}$; expand $(z+w)^{n}$ by the binomial theorem and rearrange (absolute convergence makes the rearrangement legal).

⚠ $\exp$ never takes the value zero: $\exp z \cdot \exp(-z) = \exp 0 = 1$.

Hence it maps $\mathbb{C}$ into $\mathbb{C} \setminus \{0\}$.

> continued in nodes/def.exp-function.en.3.md

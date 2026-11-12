# approximation by simple functions　`thm.simple-approximation`
English entry · root `../`
[in graph](../#n=thm.simple-approximation)　·　[Chinese page (authoritative)](./thm.simple-approximation.md)

The construction in (a) is “cutting the cake”: slice the range over [0, n) into pieces of size $2^{-n}$ and flatten everything above $n$ to $n$ —

$$\varphi_n = \sum_{k=0}^{2^n\cdot n-1} k\cdot2^{-n}\cdot\chi_{E_n^k} + n\cdot\chi_{F_n}, $$

$$E_n^k = f^{-1}((k\cdot2^{-n}, (k+1)\cdot2^{-n}]), \quad  F_n = f^{-1}((n, +\infty])$$

Each layer is the preimage of a measurable set, so $\varphi _{n}$ is simple; as $n$ grows the grid becomes finer and the ceiling higher, so the functions climb monotonically to $f$.

> continued in nodes/thm.simple-approximation.en.7.md

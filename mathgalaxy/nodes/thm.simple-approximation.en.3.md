# approximation by simple functions　`thm.simple-approximation`
English entry · root `../`
[in graph](../#n=thm.simple-approximation)　·　[Chinese page (authoritative)](./thm.simple-approximation.md)

$$\varphi_n = \sum_{k=0}^{2^n\cdot n-1} k\cdot2^{-n}\cdot\chi_{E_n^k} + n\cdot\chi_{F_n}, $$

$$E_n^k = f^{-1}((k\cdot2^{-n}, (k+1)\cdot2^{-n}]), \quad  F_n = f^{-1}((n, +\infty])$$

Each layer is the preimage of a measurable set, so $\varphi _{n}$ is a simple function; as $n$ grows the grid refines and the ceiling rises, so the sequence climbs monotonically to $f$.

For (b), split $f = g + ih$ into $g = g^+ - g^-$ and $h = h^+ - h^-$, and apply (a) to the four nonnegative parts:

$$\varphi_n = \psi_n^+ - \psi_n^- + i(\zeta _n^+ - \zeta _n^-)$$

> continued in nodes/thm.simple-approximation.en.4.md

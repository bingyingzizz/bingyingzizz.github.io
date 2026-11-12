# approximation by simple functions　`thm.simple-approximation`
English entry · root `../`
[in graph](../#n=thm.simple-approximation)　·　[Chinese page (authoritative)](./thm.simple-approximation.md)

## Notes · **draft**
**Proof.**
**(a)** For $n \ge 1$ and $k = 0, 1, \ldots, 2^{n}n - 1$, set
$$E_{n,k} := f^{-1}\bigl((k2^{-n}, (k+1)2^{-n}]\bigr), \qquad F_{n} := f^{-1}\bigl((n, +\infty]\bigr),$$
$$\varphi_{n} := \sum_{k} k\,2^{-n}\,\chi_{E_{n,k}} \;+\; n\,\chi_{F_{n}} \;+\; 0\cdot\chi_{f^{-1}(\{0\})}.$$
- **Simplicity**: each $E_{n,k}$ and $F_{n}$ is measurable ($f$ measurable plus intervals are Borel sets), and only finitely many values occur ✓;
- **$0 \le \varphi_{n} \le f$**: on $E_{n,k}$ we have $k2^{-n} < f \le (k+1)2^{-n}$ ✓; on $F_{n}$ we 

> continued in nodes/thm.simple-approximation.en.4.md

# Taylor Expansion of a Holomorphic Function　`thm.taylor-complex`
English entry · root `../`
[in graph](../#n=thm.taylor-complex)　·　[Chinese page (authoritative)](./thm.taylor-complex.md)

and the right-hand side **converges uniformly** on every compact subset of $B(a, R)$. Hence $f$ is **analytic** on $B(a, R)$ (equal to the sum of some power series).

## Notes · **draft**
⭐ The proof has only two steps: the Cauchy integral formula + a geometric series.

Take $\rho \in (|z - a|, R)$, and write

$$\frac{1}{\zeta - z} = \frac{1}{(\zeta - a) - (z - a)} = \sum_{n=0}^{\infty} \frac{(z - a)^n}{(\zeta - a)^{n+1}},$$

the ratio $|z - a|/\rho < 1$, the series converges uniformly in $\zeta \in \partial B(a, \rho)$, so term-by-term integration is allowed;

> continued in nodes/thm.taylor-complex.en.3.md

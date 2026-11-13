# radius of convergence　`thm.convergence-radius`
English entry · root `../`
[in graph](../#n=thm.convergence-radius)　·　[Chinese page (authoritative)](./thm.convergence-radius.md)

## Notes · **draft**
⭐ $R$ is called the **radius of convergence**, $(x_0 - R, x_0 + R)$ the interval of convergence.

The proof is just the **root test** applied to the coefficients: $\limsup \sqrt[n]{|a_n (x - x_0)^{n}|} = |x - x_0| \cdot \limsup \sqrt[n]{|a_n|}$.

⚠ One must use $\limsup$ here, not $\lim$: $\sqrt[n]{|a_n|}$ need not converge.

⚠ At $|x - x_0| = R$ all three behaviours can occur ($\sum x^{n}$ diverges at both ends, $\sum x^{n}/n$ converges at one end and diverges at the other, $\sum x^{n}/n^{2}$ converges at both ends).

> continued in nodes/thm.convergence-radius.en.3.md

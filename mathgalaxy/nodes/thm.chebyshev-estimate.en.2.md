# Chebyshev estimate　`thm.chebyshev-estimate`
English entry · root `../`
[in graph](../#n=thm.chebyshev-estimate)　·　[Chinese page (authoritative)](./thm.chebyshev-estimate.md)

## Notes · **draft**
**Proof**: The proof uses only elementary binomial coefficient estimates. Write $\theta(x) := \sum_{p \le x} \log p$ (the sum runs only over primes $p \le x$). First prove, for integers $x$, the estimate $0.3\,x/\log x < \pi(x) < 6\,x/\log x$. For real arguments the lower bound is weakened to $0.28\,x/\log x$, while the upper bound stays the same.

**Lower bound.** For an integer $n \ge 1$, set $N := \binom{2n}{n}$. Since $\sum_{k=0}^{2n}\binom{2n}{k} = 4^{n}$ and $\binom{2n}{n}$ is the largest term, we obtain

$$\frac{4^{n}}{2n+1} \le N \le 4^{n}.$$

> continued in nodes/thm.chebyshev-estimate.en.3.md

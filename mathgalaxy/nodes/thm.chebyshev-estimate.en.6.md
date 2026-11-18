# Chebyshev estimate　`thm.chebyshev-estimate`
English entry · root `../`
[in graph](../#n=thm.chebyshev-estimate)　·　[Chinese page (authoritative)](./thm.chebyshev-estimate.md)

Together these give $\theta(n) \le n\log 4$ (induct on $n$, checking the base case $n = 1, 2$ directly). Now count the primes: $\pi(\sqrt{x}) \le \sqrt{x}$. Each $\sqrt{x} < p \le x$ satisfies $\log p \ge \tfrac12\log x$, and the number of such $p$ is at most $(\theta(x) - \theta(\sqrt{x}))/\tfrac12\log x$. Thus for integers $x \ge 2$,

$$\pi(x) \le \sqrt{x} + \frac{2\theta(x)}{\log x} \le \sqrt{x} + \frac{4x\log 2}{\log x}.$$

> continued in nodes/thm.chebyshev-estimate.en.7.md

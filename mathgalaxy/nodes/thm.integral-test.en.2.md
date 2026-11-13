# integral test　`thm.integral-test`
English entry · root `../`
[in graph](../#n=thm.integral-test)　·　[Chinese page (authoritative)](./thm.integral-test.md)

## Notes · **draft**
⭐ In one sentence: **the series and the integral are squeezed by the same ruler**.

The upper bound $f(n) \le \int_{n-1}^{n} f$ and the lower bound $\int_{n}^{n+1} f \le f(n)$ each come from monotonicity; adding them over the intervals gives the squeezing inequality.

⭐ The classic application: $\sum 1/n^{s}$ converges for $s > 1$ and diverges for $s \le 1$ — because the same threshold for $\int_1^{\infty} x^{-s}\,dx$ lies at $s = 1$.

⚠ The function must be **non-negative and decreasing**: if $f$ is defined only at the integers, or oscillates, neither inequality holds.

> continued in nodes/thm.integral-test.en.3.md

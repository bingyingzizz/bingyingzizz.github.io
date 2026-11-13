# integral test　`thm.integral-test`
English entry · root `../`
[in graph](../#n=thm.integral-test)　·　[Chinese page (authoritative)](./thm.integral-test.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 20 · theorem · cluster Convergence Tests for Series (`analysis.series`) · Mathematical Analysis

## Statement · **draft**
Let $f : [1, +\infty) \to [0, +\infty)$ be **non-negative and decreasing**. Then the series $\sum f(n)$ and the improper integral $\int_1^{+\infty} f$ converge or diverge together, that is,

$$\sum_{n=1}^{\infty} f(n) < +\infty \iff \int_1^{+\infty} f(x)\,dx < +\infty$$

More precisely, for every $N$ one has the inequality

$$\int_1^{N+1} f \le \sum_{n=1}^{N} f(n) \le f(1) + \int_1^{N} f$$

> continued in nodes/thm.integral-test.en.2.md

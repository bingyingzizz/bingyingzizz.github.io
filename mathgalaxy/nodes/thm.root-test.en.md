# root test　`thm.root-test`
English entry · root `../`
[in graph](../#n=thm.root-test)　·　[Chinese page (authoritative)](./thm.root-test.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 20 · theorem · cluster Convergence Tests for Series (`analysis.series`) · Mathematical Analysis

## Statement · **draft**
Let $a_n \ge 0$, and set

$$\alpha := \limsup_{n \to \infty} \sqrt[n]{a_n}$$

Then: if $\alpha < 1$, $\sum a_n$ converges; if $\alpha > 1$, $\sum a_n$ diverges; if $\alpha = 1$, there is **no conclusion**.

## Notes · **draft**
⭐ The mechanism is "comparison with a geometric series": when $\alpha < q < 1$, eventually $\sqrt[n]{a_n} \le q$, i.e. $a_n \le q^{n}$, and the geometric series converges.

> continued in nodes/thm.root-test.en.2.md

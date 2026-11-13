# Kummer's test　`thm.kummer`
English entry · root `../`
[in graph](../#n=thm.kummer)　·　[Chinese page (authoritative)](./thm.kummer.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 20 · theorem · cluster Convergence Tests for Series (`analysis.series`) · Mathematical Analysis

## Statement · **draft**
Let $\sum a_n$ be a series of **positive terms** ($a_n > 0$), and $\{c_n\}$ a sequence of positive numbers. Put

$$K_n := c_n \cdot \frac{a_n}{a_{n+1}} - c_{n+1}$$

Then:

- **Convergence**: if $\liminf_{n \to \infty} K_n > 0$, then $\sum a_n$ converges;
- **Divergence**: if $\sum \frac{1}{c_n}$ diverges and $K_n \le 0$ for all sufficiently large $n$, then $\sum a_n$ diverges.

> continued in nodes/thm.kummer.en.2.md

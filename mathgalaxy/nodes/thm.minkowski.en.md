# Minkowski　`thm.minkowski`
English entry · root `../`
[in graph](../#n=thm.minkowski)　·　[Chinese page (authoritative)](./thm.minkowski.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 22 · theorem · cluster L^p Spaces (`analysis.lp`) · Functions of a Real Variable / Mathematical Analysis

## Statement · **draft**
Let $1 \le p < \infty$. Then for $f, g \in L^p$:

$$\|f + g\|_p \le \|f\|_p + \|g\|_p$$

## Notes · **draft**
$p = 1$ is just the triangle inequality for integrals, and is obvious.

For general $p$:

$$\int |f+g|^p = \int |f+g| \cdot |f+g|^{p-1} \le \int (|f| + |g|) |f+g|^{p-1} \le \left( \|f\|_p + \|g\|_p \right) \left\| |f+g|^{p-1} \right\|_q$$

> continued in nodes/thm.minkowski.en.2.md

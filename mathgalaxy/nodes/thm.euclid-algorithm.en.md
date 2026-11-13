# Euclidean algorithm　`thm.euclid-algorithm`
English entry · root `../`
[in graph](../#n=thm.euclid-algorithm)　·　[Chinese page (authoritative)](./thm.euclid-algorithm.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 13 · theorem · cluster Divisibility and Congruences (`number.basic`) · Number Theory

## Statement · **draft**
Let $a, b \in \mathbb{Z}$ be not both zero. First take absolute values ($a, b$ may be negative); if $b = 0$, return $|a|$ directly; otherwise put $r_{-1} = |a|$ and $r_{0} = |b|$, and perform the division with remainder repeatedly

$$r_{i-1} = q_{i}\, r_{i} + r_{i+1}, \qquad 0 \le r_{i+1} < r_{i} .$$

> continued in nodes/thm.euclid-algorithm.en.2.md

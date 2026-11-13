# division with remainder for integers　`thm.int-division`
English entry · root `../`
[in graph](../#n=thm.int-division)　·　[Chinese page (authoritative)](./thm.int-division.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 12 · theorem · cluster Divisibility and Congruences (`number.basic`) · Number Theory

## Statement · **draft**
Let $a, b \in \mathbb{Z}$ with $b \ne 0$. Then there exist **unique** $q, r \in \mathbb{Z}$ such that

$$a = qb + r, \qquad 0 \le r < |b| .$$

$q$ is called the **quotient** and $r$ the **remainder**.

## Notes · **draft**
Uniqueness: if $a = qb + r = q'b + r'$, then $(q - q')b = r' - r$, hence $|b| \mid |r' - r|$; but $|r' - r| < |b|$, so necessarily $r' = r$, and then $q' = q$.

> continued in nodes/thm.int-division.en.2.md

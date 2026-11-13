# Rouché's theorem　`thm.rouche`
English entry · root `../`
[in graph](../#n=thm.rouche)　·　[Chinese page (authoritative)](./thm.rouche.md)

$$|g(z)| < |f(z)|.$$

Then $f$ and $f + g$ have the same number of zeros inside $\gamma$ (both counted with multiplicity).

## Notes · **draft**
⭐ Use: count zeros without solving equations — just compare sizes on the boundary.

Example: $f(z) = -5z^3$, $g(z) = z^7 + z - 2$; on $|z| = 1$ we have $|g| \le 1 + 1 + 2 = 4 < 5 = |f|$, so $z^7 - 5z^3 + z - 2$ has exactly $3$ zeros in $|z| < 1$ (the same as $-5z^3$).

⭐ Another proof of the fundamental theorem of algebra: $f(z) = a_n z^n$, $g(z) = a_{n-1}z^{n-1} + \cdots + a_0$; on $|z| = R$ with $R$ large enough one has $|g| < |f|$, so $p$ and $a_n z^n$ have the same number of zeros in $|z| < R$, namely $n$.

> continued in nodes/thm.rouche.en.3.md

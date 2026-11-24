# Euler totient function　`def.euler-phi`
English entry · root `../`
[in graph](../#n=def.euler-phi)　·　[Chinese page (authoritative)](./def.euler-phi.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 11 · definition · cluster Divisibility and Congruences (`number.basic`) · Number Theory

## Statement · **draft**
For $n \ge 1$, $\varphi(n)$ is the number of integers among $1, 2, \cdots, n$ coprime to $n$:

$$\varphi(n) = \#\{\, 1 \le a \le n : \gcd(a, n) = 1 \,\} .$$

If $n = p_{1}^{e_{1}} \cdots p_{r}^{e_{r}}$ (the $p_{i}$ **pairwise distinct**; $n = 1$ when the product is empty), then

$$\varphi(n) = n \prod_{i=1}^{r} \left( 1 - \frac{1}{p_{i}} \right).$$

> continued in nodes/def.euler-phi.en.2.md

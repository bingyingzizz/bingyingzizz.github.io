# Euler theorem　`thm.euler-theorem`
English entry · root `../`
[in graph](../#n=thm.euler-theorem)　·　[Chinese page (authoritative)](./thm.euler-theorem.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 10 · theorem · cluster Divisibility and Congruences (`number.basic`) · Number Theory

## Statement · **draft**
Let $a, n \ge 1$ with $\gcd(a, n) = 1$. Then

$$a^{\varphi(n)} \equiv 1 \pmod n .$$

## Notes · **draft**
The proof is one line, but it is group-theoretic: $[a]$ lies in the unit group $G = (\mathbb{Z}/n\mathbb{Z})^{\times}$, with $|G| = \varphi(n)$, so Lagrange's theorem gives $[a]^{|G|} = 1$.

So the real content of the theorem is "the unit group is a finite group" — the congruence is merely its coordinate form.

> continued in nodes/thm.euler-theorem.en.2.md

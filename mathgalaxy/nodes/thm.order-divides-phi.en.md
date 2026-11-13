# the order divides the totient　`thm.order-divides-phi`
English entry · root `../`
[in graph](../#n=thm.order-divides-phi)　·　[Chinese page (authoritative)](./thm.order-divides-phi.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 10 · theorem · cluster Quadratic Residues and Primitive Roots (`number.quadratic`) · Number Theory

## Statement · **draft**
Let $\gcd(a, n) = 1$. Then $\operatorname{ord}_{n}(a) \mid \varphi(n)$; in particular $a^{\varphi(n)} \equiv 1 \pmod n$ (Euler's theorem).

## Notes · **draft**
**Proof**: let $k = \operatorname{ord}_{n}(a)$ and $H = \{[1], [a], \cdots, [a]^{k-1}\}$ be the cyclic subgroup of the unit group, with $|H| = k$. By Lagrange's theorem, $k \mid |G| = \varphi(n)$.

> continued in nodes/thm.order-divides-phi.en.2.md

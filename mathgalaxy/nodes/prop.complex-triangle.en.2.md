# Triangle Inequality for Moduli　`prop.complex-triangle`
English entry · root `../`
[in graph](../#n=prop.complex-triangle)　·　[Chinese page (authoritative)](./prop.complex-triangle.md)

Equality holds iff: the nonzero $z_k$ all have the **same argument**.

## Notes · **draft**
⭐ The trick of the proof is **not to estimate the sum, but first to rotate it onto the real axis**: let $\theta$ be an argument of $\sum_k z_k$ (the conclusion is trivial when the sum is zero); then

$$\left| \sum_k z_k \right| = e^{-i\theta}\sum_k z_k = \operatorname{Re}\left( e^{-i\theta}\sum_k z_k \right) = \sum_k \operatorname{Re}\left( e^{-i\theta} z_k \right) \le \sum_k \left| e^{-i\theta} z_k \right| = \sum_k |z_k|.$$

> continued in nodes/prop.complex-triangle.en.3.md

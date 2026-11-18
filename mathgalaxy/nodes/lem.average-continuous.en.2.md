# the averaging operator is jointly continuous　`lem.average-continuous`
English entry · root `../`
[in graph](../#n=lem.average-continuous)　·　[Chinese page (authoritative)](./lem.average-continuous.md)

## Notes · **draft**
**Proof.** Let $m$ denote Lebesgue measure and set $\omega_n := m(B(0,1))$. Then $m(B(x,r)) = \omega_n r^n$. To prove joint continuity, it suffices to show that for every sequence satisfying $r_k > 0$ and $(x_k, r_k) \to (x_0, r_0)$, we have $A_{r_k} f(x_k) \to A_{r_0} f(x_0)$.

**Step 1. Split the difference.** Write the difference as

$$A_r f(x) - A_{r_0} f(x_0) = \frac{1}{m(B(x,r))}\int_{\mathbb{R}^n} \bigl(\chi_{B(x,r)} - \chi_{B(x_0,r_0)}\bigr) f + \Bigl(\frac{1}{m(B(x,r))} - \frac{1}{m(B(x_0,r_0))}\Bigr)\int_{B(x_0,r_0)} f .$$

> continued in nodes/lem.average-continuous.en.3.md

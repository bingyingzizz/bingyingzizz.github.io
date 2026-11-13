# Maximum Modulus Principle　`thm.max-modulus`
English entry · root `../`
[in graph](../#n=thm.max-modulus)　·　[Chinese page (authoritative)](./thm.max-modulus.md)

## Notes · **draft**
⭐ The proof uses the **mean value formula**: the Cauchy integral formula at the centre $\zeta = z + re^{i\theta}$ gives

$$f(z) = \frac{1}{2\pi}\int_0^{2\pi} f(z + re^{i\theta})\,\mathrm{d}\theta$$

(as long as $\overline{B(z, r)} \subset \Omega$).

If $|f|$ attains its maximum $M$ at an **interior** point $z_0$, then $M = |f(z_0)| \le \frac{1}{2\pi}\int_0^{2\pi} |f(z_0 + re^{i\theta})|\,\mathrm{d}\theta \le M$; equality at both ends forces $|f| \equiv M$ on the circle.

> continued in nodes/thm.max-modulus.en.3.md

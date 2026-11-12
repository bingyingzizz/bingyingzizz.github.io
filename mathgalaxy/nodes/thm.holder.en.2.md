# Hölder　`thm.holder`
English entry · root `../`
[in graph](../#n=thm.holder)　·　[Chinese page (authoritative)](./thm.holder.md)

Proof: first assume $\|f\|_p = \|g\|_q = 1$. By Young's inequality, substituting $\lambda = 1/p$, $a = |f|^p$, $b = |g|^q$ gives

$$|fg| \le \frac{|f|^p}{p} + \frac{|g|^q}{q}$$

Integrating both sides gives $\|fg\|_1 \le \frac{1}{p} + \frac{1}{q} = 1$. In the general case, normalize $f, g$ each.

⚠ When $p = q = 2$ this is the **Cauchy–Schwarz inequality**.

When $p = 1$ the conjugate exponent is $q = \infty$, and then $\|fg\|_1 \le \|f\|_1 \|g\|_\infty$ (see the section on $L^\infty$).

> Proofs of the edges are still Chinese only: `proofs/`; the Chinese page remains authoritative.

## Elsewhere
Wikipedia: https://en.wikipedia.org/wiki/H%C3%B6lder%27s_inequality


Cite: `thm.holder` (content v0.9.3) · CC BY 4.0: [LICENSE.txt](../LICENSE.txt)


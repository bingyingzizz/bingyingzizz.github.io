# Weierstrass convergence theorem　`thm.weierstrass-convergence`
English entry · root `../`
[in graph](../#n=thm.weierstrass-convergence)　·　[Chinese page (authoritative)](./thm.weierstrass-convergence.md)

**Proof of (2)**: let $K \subset \Omega$ be compact and choose $r > 0$ so that the $r$-neighbourhood of $K$ still lies in $\Omega$. For $z \in K$, integrate the Cauchy formula for higher derivatives over the circle of radius $r$:

$$\left|f_{k}^{(m)}(z) - f^{(m)}(z)\right| \le \frac{m!}{r^{m}}\,\sup_{|\zeta - z| \le r}\left|f_{k}(\zeta) - f(\zeta)\right|.$$

The right-hand side is independent of $z$ and tends to $0$ as $k \to \infty$, hence the convergence is uniform on $K$. ∎

> continued in nodes/thm.weierstrass-convergence.en.4.md

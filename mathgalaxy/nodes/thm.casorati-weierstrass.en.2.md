# Casorati–Weierstrass　`thm.casorati-weierstrass`
English entry · root `../`
[in graph](../#n=thm.casorati-weierstrass)　·　[Chinese page (authoritative)](./thm.casorati-weierstrass.md)

$$\forall\, w \in \mathbb{C},\ \forall\, \varepsilon > 0,\ \exists\, z \in U:\ |f(z) - w| < \varepsilon.$$

## Notes · **draft**
**Proof (by contradiction)**: suppose there are $w_{0}$ and $\rho > 0$ with $f(U) \cap B(w_{0}, \rho) = \emptyset$. Let

$$F(z) := \frac{1}{f(z) - w_{0}}, \qquad 0 < |z - z_{0}| < r.$$

Then $|F(z)| < 1/\rho$ is bounded on $U$, so $z_{0}$ is a **removable singularity** of $F$ (`thm.riemann-removable`), and $F$ extends holomorphically at $z_{0}$.

> continued in nodes/thm.casorati-weierstrass.en.3.md

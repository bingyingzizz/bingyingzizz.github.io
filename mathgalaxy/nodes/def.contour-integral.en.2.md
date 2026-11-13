# Contour Integral　`def.contour-integral`
English entry · root `../`
[in graph](../#n=def.contour-integral)　·　[Chinese page (authoritative)](./def.contour-integral.md)

$$\int_\gamma f(z)\,\mathrm{d}z := \lim_{\lVert\Delta\rVert \to 0} \sum_{k=1}^{n} f(\gamma(\tau_k))\,(\gamma(t_k) - \gamma(t_{k-1})),$$

where $[a, b]$ is any refinement of a partition and $\tau_k \in [t_{k-1}, t_k]$ is arbitrary; the limit exists and is independent of the choices. It equals

$$\int_\gamma f(z)\,\mathrm{d}z = \int_a^b f(\gamma(t))\,\gamma'(t)\,\mathrm{d}t,$$

whose right-hand side is a complex-valued Riemann integral over the real parameter $t$. Splitting into real and imaginary parts ($f = u + iv$, $z = x + iy$) gives two real line integrals:

> continued in nodes/def.contour-integral.en.3.md

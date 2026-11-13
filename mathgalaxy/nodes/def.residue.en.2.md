# Residue　`def.residue`
English entry · root `../`
[in graph](../#n=def.residue)　·　[Chinese page (authoritative)](./def.residue.md)

$$\operatorname{Res}(f, a) := \frac{1}{2\pi i}\oint_{|\zeta - a| = r} f(\zeta)\,\mathrm{d}\zeta, \qquad 0 < r < \varepsilon,$$

this value is independent of $r$ and equals the coefficient $c_{-1}$ of the Laurent expansion of $f$ at $a$.

For the **point at infinity** ($f$ holomorphic on $|z| > R$): $\operatorname{Res}(f, \infty) := -\dfrac{1}{2\pi i}\oint_{|\zeta| = \rho} f(\zeta)\,\mathrm{d}\zeta = -c_{-1}$.

## Notes · **draft**
⭐ Why "residue": $f$ has a primitive on a punctured neighbourhood iff $c_{-1} = 0$ (because $\int \mathrm{d}z/(z - a) = \log(z - a)$ is multivalued).

> continued in nodes/def.residue.en.3.md

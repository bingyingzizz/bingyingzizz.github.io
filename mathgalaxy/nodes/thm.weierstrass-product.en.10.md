# Weierstrass product theorem　`thm.weierstrass-product`
English entry · root `../`
[in graph](../#n=thm.weierstrass-product)　·　[Chinese page (authoritative)](./thm.weierstrass-product.md)

**Step 3. Remove the zero-free factor.** Since $F$ is nowhere zero, $F'/F$ is entire. Set $g_{0}(z) := \int_{0}^{1}\frac{F'(tz)}{F(tz)}\,z\,\mathrm{d}t .$. The integrand is continuous, $g_{0}$ is entire, and $g_{0}'(z) = F'(z)/F(z)$ (differentiate under the integral sign, or use $g_{0}(z) = \int_{0}^{z}F'(\zeta)/F(\zeta)\,\mathrm{d}\zeta$ along a line segment, with path independence ensured by Cauchy's theorem). Thus $(F e^{-g_{0}})' = 0$, so $F = C e^{g_{0}}$ and $C\ne 0$. Writing $C = e^{c}$ and $g := g_{0} + c$ gives $F = e^{g}$. Combining these gives the desired $f_{0}(z) = z^{m}e^{g(z)}\prod_{

> continued in nodes/thm.weierstrass-product.en.11.md

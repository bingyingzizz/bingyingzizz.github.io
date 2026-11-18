# Runge approximation theorem　`thm.runge`
English entry · root `../`
[in graph](../#n=thm.runge)　·　[Chinese page (authoritative)](./thm.runge.md)

**Step 1: Discretizing the integral.** $\Gamma$ is compact and $\Gamma\cap K = \emptyset$, so $g(\zeta,z) := f(\zeta)/(\zeta - z)$ is continuous on $\Gamma\times K$ and hence uniformly continuous. Divide each edge of $\Gamma$ into equal segments of length $<\delta$. Take midpoints $\zeta_{j}$ and increments $\Delta\zeta_{j}$, and form the Riemann sum $R(z) := \frac{1}{2\pi i}\sum_{j}\frac{f(\zeta_{j})}{\zeta_{j} - z}\,\Delta\zeta_{j}.$. By uniform continuity, taking $\delta$ sufficiently small ensures that $\sup_{z\in K}\Bigl|\frac{1}{2\pi i}\int_{\Gamma} g(\zeta,z)\,\mathrm{d}\zeta - R(z)\Bigr| < \frac{\varepsilon}{2}.$. Here $R$ is a rationa

> continued in nodes/thm.runge.en.7.md

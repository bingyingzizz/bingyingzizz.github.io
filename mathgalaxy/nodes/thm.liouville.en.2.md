# Liouville's Theorem　`thm.liouville`
English entry · root `../`
[in graph](../#n=thm.liouville)　·　[Chinese page (authoritative)](./thm.liouville.md)

## Notes · **draft**
⭐ Proof (via the Cauchy estimates): for any $z$ and any $R > 0$, $f$ is holomorphic on $B(z, R)$, hence $|f'(z)| \le M/R$.

Let $R \to \infty$ to get $f'(z) = 0$;

since $z$ is arbitrary, $f' \equiv 0$;

the domain is connected, so $f$ is constant.

⭐ The book also gives a second proof using **only the Cauchy integral formula**: take $R > |z|$,

$$f(z) - f(0) = \frac{1}{2\pi i}\oint_{|\zeta| = R}\left( \frac{1}{\zeta - z} - \frac{1}{\zeta} \right) f(\zeta)\,\mathrm{d}\zeta,$$

estimate $|f(z) - f(0)| \le \dfrac{M|z|}{R - |z|} \to 0$ ($R \to \infty$), hence $f(z) = f(0)$.

> continued in nodes/thm.liouville.en.3.md

# Laurent Expansion Theorem　`thm.laurent`
English entry · root `../`
[in graph](../#n=thm.laurent)　·　[Chinese page (authoritative)](./thm.laurent.md)

$$f(z) = \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho_2} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta - \frac{1}{2\pi i}\oint_{|\zeta - a| = \rho_1} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta.$$

Expand the first term using $\dfrac{1}{\zeta - z} = \sum_n \dfrac{(z - a)^n}{(\zeta - a)^{n+1}}$ (since $|z - a| < \rho_2$);

expand the second term using $\dfrac{1}{z - \zeta} = \sum_n \dfrac{(\zeta - a)^n}{(z - a)^{n+1}}$ (since $|z - a| > \rho_1$), which produces the negative powers.

> continued in nodes/thm.laurent.en.4.md

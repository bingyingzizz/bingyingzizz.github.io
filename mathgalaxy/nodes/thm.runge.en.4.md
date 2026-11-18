# Runge approximation theorem　`thm.runge`
English entry · root `../`
[in graph](../#n=thm.runge)　·　[Chinese page (authoritative)](./thm.runge.md)

 $h\sqrt{2} < d$, so $S\subset V$. Orient each square boundary counterclockwise and add them. The integrals along shared edges cancel, giving $\Gamma = \partial S$. For $z\in K\subset\operatorname{int} S$, the function $h(\zeta) := (f(\zeta)-f(z))/(\zeta - z)$ (extended at $\zeta = z$ by the value $f'(z)$) is holomorphic on a neighborhood of $S$. Applying Cauchy–Goursat (`thm.cauchy-goursat`) on each square gives $\int_{\partial Q} h = 0$, and summing gives $\int_{\Gamma} h = 0$. Hence $\int_{\Gamma}\frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta = f(z)\int_{\Gamma}\frac{\mathrm{d}\zeta}{\zeta - z} = 2\pi i\, f(z)\,\operatorname{Ind}_{\Gamma}(z) = 2\pi i\

> continued in nodes/thm.runge.en.5.md

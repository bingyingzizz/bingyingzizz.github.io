# Stone-Weierstrass theorem　`thm.stone-weierstrass`
English entry · root `../`
[in graph](../#n=thm.stone-weierstrass)　·　[Chinese page (authoritative)](./thm.stone-weierstrass.md)

- **Cover over $x$ and take a finite $\max$**: put $U_{x} := \{t \in K : h_{x}(t) > f(t) - \varepsilon\}$, which is open and contains $x$. Finitely many $U_{x_1}, \ldots, U_{x_m}$ cover $K$; put $k := \max_{i} h_{x_i} \in \overline{A}$. Lower bound: every point lies in some $U_{x_j}$, so $k \ge h_{x_j} > f - \varepsilon$. Upper bound: each $h_{x_j}$ satisfies $h_{x_j} < f + \varepsilon$ everywhere, and a finite $\max$ still gives $k < f + \varepsilon$. Together $f - \varepsilon < k < f + \varepsilon$, that is, $\|k - f\|_\infty < \varepsilon$.

> continued in nodes/thm.stone-weierstrass.en.5.md

# equicontinuous implies uniformly equicontinuous on compacta　`thm.equicontinuous-uniform`
English entry · root `../`
[in graph](../#n=thm.equicontinuous-uniform)　·　[Chinese page (authoritative)](./thm.equicontinuous-uniform.md)

## Notes · **draft**
Proof: let $\varepsilon > 0$. For each point $x$ choose $\eta_x > 0$ such that $\delta(y, x) < \eta_x \implies d(f(y), f(x)) < \varepsilon/2$ (for every $f$).

Compactness gives a finite cover $K = \bigcup_i B(x_i, \eta_{x_i}/2)$, and we set $\eta := \min_i \eta_{x_i}/2$.

If $\delta(x, y) < \eta$, choose $i$ with $x \in B(x_i, \eta_{x_i}/2)$ (hence $y \in B(x_i, \eta_{x_i})$), so $d(f(x), f(y)) \le d(f(x), f(x_i)) + d(f(x_i), f(y)) < \varepsilon$.

> continued in nodes/thm.equicontinuous-uniform.en.3.md

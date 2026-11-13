# winding number　`def.winding-number`
English entry · root `../`
[in graph](../#n=def.winding-number)　·　[Chinese page (authoritative)](./def.winding-number.md)

$$n(\gamma, a_0) := \frac{1}{2\pi i}\oint_{\gamma} \frac{\mathrm{d}\zeta}{\zeta - a_0}.$$

It equals the continuous change of $\arg(\gamma(t) - a_0)$ along one full traversal of $\gamma$, divided by $2\pi$:

$$n(\gamma, a_0) = \frac{1}{2\pi}\,\Delta_{\gamma}\,\arg(\zeta - a_0).$$

Three basic properties: (1) $n(\gamma, \cdot)$ is constant on each connected component of $\mathbb{C} \setminus \gamma$ and takes integer values; (2) it equals $0$ on the unbounded component; (3) if $\gamma$ is a positively oriented simple closed curve, then $n = 1$ inside and $n = 0$ outside.

> continued in nodes/def.winding-number.en.3.md

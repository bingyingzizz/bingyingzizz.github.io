# continuity between metric spaces　`def.metric-continuity`
English entry · root `../`
[in graph](../#n=def.metric-continuity)　·　[Chinese page (authoritative)](./def.metric-continuity.md)

We say $f$ is continuous if it is continuous at every point. Equivalently: for every open set $V \subseteq Y$, the preimage $f^{-1}(V)$ is open in $X$.

## Notes · **draft**
**Proof of the equivalence** (global version):

($\varepsilon$–$\delta$ $\implies$ open preimages are open) Let $V \subseteq Y$ be open and $x_0 \in f^{-1}(V)$. Choose $\varepsilon > 0$ with $B_Y(f(x_0), \varepsilon) \subseteq V$; $\varepsilon$–$\delta$ gives $\delta > 0$ such that the image of $B_X(x_0, \delta)$ lies in $B_Y(f(x_0), \varepsilon)$, hence $B_X(x_0, \delta) \subseteq f^{-1}(V)$, i.e. $f^{-1}(V)$ is open.

> continued in nodes/def.metric-continuity.en.3.md

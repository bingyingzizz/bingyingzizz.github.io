# Metric Space　`def.metric-space`
English entry · root `../`
[in graph](../#n=def.metric-space)　·　[Chinese page (authoritative)](./def.metric-space.md)

## Statement · **reviewed**
A **metric space** is a pair (X, d): $X$ is a set and $d : X \times X \to [0, +\infty )$ is a **metric** on $X$, satisfying

- **non-degeneracy**: $d(x, y) = 0 \iff x = y$
- **symmetry**: $d(x, y) = d(y, x)$
- **triangle inequality**: $d(x, z) \le d(x, y) + d(y, z)$

From $d$ one defines the **open balls** $B(x, r) = \{ y \in X : d(x, y) < r \}$, and declares $U \subseteq X$ to be open $\iff U$ is a union of open balls. This puts a topology on $X$.

Given $\varepsilon > 0$, a set $D \subseteq X$ is called an **$\varepsilon$-net** if $\forall x \in X, \exists y \in D : d(x, y) < \varepsilon$.

> 续见 nodes/def.metric-space.en.4.md

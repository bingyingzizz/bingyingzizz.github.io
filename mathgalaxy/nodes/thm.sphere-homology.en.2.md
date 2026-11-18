# homology of spheres　`thm.sphere-homology`
English entry · root `../`
[in graph](../#n=thm.sphere-homology)　·　[Chinese page (authoritative)](./thm.sphere-homology.md)

## Notes · **draft**
**Proof.** Induct on $n$ using reduced homology (`def.reduced-homology`) and the reduced Mayer–Vietoris sequence (`thm.mv-homology`). Set $S^{n} \subset \mathbb{R}^{n+1}$, with north pole $N := (0, \ldots, 0, 1)$ and south pole $S := -N$.

**Base case $n = 0$.** The space $S^{0} = \{\pm 1\}$ consists of two points. By `prop.h0-components`, $H_{0}(S^{0}) = \mathbb{Z}^{2}$, hence $\tilde{H}_{0}(S^{0}) = \mathbb{Z}$. When $p > 0$, we have $\tilde{H}_{p}(S^{0}) = 0$.

**Inductive step.** Suppose $n \ge 1$ and set $U := S^{n} \setminus \{S\}$ and $V := S^{n} \setminus \{N\}$. Both are open.

> continued in nodes/thm.sphere-homology.en.3.md

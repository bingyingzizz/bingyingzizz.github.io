# 球面的同调　`thm.sphere-homology`　·　说明
根 `../`

分母不为零：$(1-s)x + sN = 0$ 迫使 $\lVert x \rVert = s/(1-s) = 1$，即 $x = S$（端点 $s = 1$ 时分子为 $N \ne 0$），而 $S \notin U$。故 $H_{0} = \mathrm{id}_{U}$、$H_{1} \equiv N$，$U$ 可缩；同理 $V$ 可缩。由同伦不变性（`thm.homotopy-invariance`），可缩空间的约化同调全为零，故 $\tilde{H}_{p}(U) = \tilde{H}_{p}(V) = 0$ 对一切 $p$。

**交集形变收缩到赤道。** $U \cap V = S^{n} \setminus \{N, S\}$。把点写成 $(x, t)$，其中 $x \in \mathbb{R}^{n}$、$t \in (-1, 1)$、$\lVert x \rVert^{2} + t^{2} = 1$；因 $t \ne \pm 1$，故 $x \ne 0$。令

$$H_{s}(x, t) := \frac{(x,\, s t)}{\sqrt{\lVert x \rVert^{2} + s^{2} t^{2}}}\qquad (s \in [0,1]).$$

它连续、取值仍在 $S^{n}$ 上：$H_{0}(x, t) = (x/\lVert x \rVert, 0)$ 落在赤道 $S^{n-1}$ 上，$H_{1} = \mathrm{id}$，且 $H_{s}$ 把赤道映到赤道。故 $S^{n-1}$ 是 $U \cap V$ 的形变收缩核，从而 $\tilde{H}_{p}(U \cap V) \cong \tilde{H}_{p}(S^{n-1})$（同伦不变性）。

> 续见 notes/thm.sphere-homology.3.md

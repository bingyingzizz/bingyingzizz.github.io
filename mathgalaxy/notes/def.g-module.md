# 群模　`def.g-module`　·　说明
根 `../`

**等价性怎么来的**：群环的泛性质给出

$$\operatorname{Hom}_{\mathbf{Ring}}\bigl(R[G],\ \operatorname{End}_{R}(M)\bigr) \;\cong\; \operatorname{Hom}_{\mathbf{Grp}}\bigl(G,\ \operatorname{Aut}_{R}(M)\bigr),$$

左边正是「$M$ 是 $R[G]$-模」，右边正是「$G$ 作用在 $M$ 上」。

**三个要记住的例子**：
- **平凡模**：$g \cdot m = m$。记 $R$ 带平凡作用就是这一条 —— 它是群上同调定义里那个「底模」，$H^{n}(G, M)$ 里的第二个变量往往取它。
- **左正则模** $R[G]$ 自己：$g \cdot x := g x$（群环里相乘）。
- **符号模**：当 $G$ 有一个到 $\{\pm 1\}$ 的同态时，取 $g \cdot n := \operatorname{sgn}(g)\, n$（$M = \mathbb{Z}$）。

⚠️ **左右之别**：$R[G]^{\mathrm{op}} \cong R[G]$（取逆），所以左 $G$-模与右 $G$-模是同一件事的两面；本图一律用左模。

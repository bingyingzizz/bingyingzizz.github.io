# imp.quintic-unsolvable
`imp.quintic-unsolvable` · 推出 · strong 边 · 根 `../`

`thm.radical-solvable` 根式可解 与 伽罗瓦群可解 + `prop.sn-solvable` 对称群的可解性 + `def.galois-group` 伽罗瓦群 + `def.irreducible-poly` 不可约多项式 → `thm.quintic-unsolvable` 五次方程没有根式解

**第一步：$f$ 在 $\mathbb{Q}$ 上不可约**。反设 $f = gh$，其中 $g, h \in \mathbb{Z}[x]$ 本原、$1 \le \deg g \le 4$（Gauss 引理把 $\mathbb{Q}[x]$ 的分解搬到 $\mathbb{Z}[x]$）。模 $2$ 约化：$f \equiv x^{5} \pmod 2$，因为 $-4x$ 与 $2$ 都被 $2$ 整除。$\mathbb{F}_{2}[x]$ 是唯一分解整环，$x^{5}$ 的非常数首一因子只有 $x^{k}$，故 $\bar g = x^{k}$、$\bar h = x^{5-k}$（$1 \le k \le 4$）。于是 $g(0) \equiv h(0) \equiv 0 \pmod 2$，即 $4 \mid g(0)h(0) = f(0) = 2$，矛盾。故 $f$ 不可约。∎

> 续见 proofs/imp.quintic-unsolvable.3.md

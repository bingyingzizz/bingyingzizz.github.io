# 左乘作用是自由作用 $\implies$ Cayley 定理
`imp.cayley` · 推出 · strong 边 · 根 `../`

`def.group-action` 群作用 + `def.permutation-group` 置换群与对称群 → `thm.cayley` Cayley 定理

**第一步：左乘是作用。** $\rho : G \times G \to G$，$\rho(g)(h) := gh$。则 $e h = h$、$(g_1g_2)h = g_1(g_2 h)$，故它是 $G$ 在自身上的作用。于是（`def.group-action` 的等价说法）它对应同态

$$\rho : G \to \operatorname{Sym}(G), \qquad g \mapsto (h \mapsto gh).$$

**第二步：每个 $\rho(g)$ 是双射。** 逆是 $h \mapsto g^{-1}h$。

**第三步：作用自由，故同态单。** 若 $\rho(g) = \mathrm{id}$，则对一切 $h$ 有 $gh = h$；取 $h = e$ 得 $g = e$。故 $\ker\rho = \{e\}$，$\rho$ 单射。

> 续见 proofs/imp.cayley.2.md

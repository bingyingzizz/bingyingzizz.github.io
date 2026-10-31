# 左不变性 $+$ 括号自然性 $\implies$ 左不变向量场构成 Lie 代数
`imp.mf-left-invariant` · 推出 · strong 边 · 根 `../`

`def.lie-group` Lie 群 + `def.lie-bracket` Lie 括号 → `prop.left-invariant-fields` 左不变向量场

**(3) $\mathfrak{g}$ 是 Lie 代数。** 由 (1)(2)，$\mathfrak{g} = T_{e}G$ 上定义 $[v,w] := [\tilde v,\tilde w]_{e}$（$\tilde v$ 是 $v$ 对应的左不变向量场）是有意义的。反称与 Jacobi 由 $\mathfrak{X}(G)$ 上那条括号继承（`imp.mf-bracket-liealgebra`）；双线性由 $v \mapsto \tilde v$ 线性与括号双线性得到。故 $(\mathfrak{g},[\cdot,\cdot])$ 是 Lie 代数。∎

**自然性怎么来的**（一行）：在卡里 $[X,Y]f = X(Yf) - Y(Xf)$，把 $f$ 换成 $f \circ F$、用链式法则即得 — 因为 $\mathrm{d}F$ 把 $X$ 的积分曲线推成 $\mathrm{d}F(X)$ 的积分曲线。

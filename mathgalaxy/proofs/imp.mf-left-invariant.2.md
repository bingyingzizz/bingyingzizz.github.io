# 左不变性 $+$ 括号自然性 $\implies$ 左不变向量场构成 Lie 代数
`imp.mf-left-invariant` · 推出 · strong 边 · 根 `../`

`def.lie-group` Lie 群 + `def.lie-bracket` Lie 括号 → `prop.left-invariant-fields` 左不变向量场

**(2) 括号封闭。** 用 Lie 括号的自然性：对微分同胚 $F$ 与向量场 $X, Y$，

$$\mathrm{d}F\bigl([X,Y]_{p}\bigr) = \bigl[\mathrm{d}F(X), \mathrm{d}F(Y)\bigr]_{F(p)} .$$

取 $F = L_{g}$：由 $X, Y$ 左不变得 $\mathrm{d}(L_{g})X = X$、$\mathrm{d}(L_{g})Y = Y$，于是

$$\mathrm{d}(L_{g})_{h}\bigl([X,Y]_{h}\bigr) = \bigl[\mathrm{d}(L_{g})X,\ \mathrm{d}(L_{g})Y\bigr]_{gh} = [X,Y]_{gh},$$

即 $[X,Y]$ 左不变。

> 续见 proofs/imp.mf-left-invariant.3.md

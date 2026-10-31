# 左不变向量场　`prop.left-invariant-fields`　·　说明
根 `../`

**为什么赋值是双射**：左不变性把 $X$ 在 $gh$ 处的值**唯一**由 $X_{h}$ 决定，取 $h = e$ 就知 $X$ 完全由 $X_{e}$ 决定（单射）；反过来，给定 $v \in \mathfrak{g}$，令 $X_{g} := \mathrm{d}(L_{g})_{e}(v)$，则 $X_{gh} = \mathrm{d}(L_{gh})_{e}(v) = \mathrm{d}(L_{g})_{h}\bigl(\mathrm{d}(L_{h})_{e}(v)\bigr) = \mathrm{d}(L_{g})_{h}(X_{h})$（链式法则加 $L_{gh} = L_{g} \circ L_{h}$），故左不变（满射）。光滑性：局部用卡写开，$\mathrm{d}(L_{g})$ 对 $g$ 光滑。

**括号为什么能下去**：关键是 Lie 括号的**自然性**

$$\mathrm{d}F\bigl([X,Y]_{p}\bigr) = \bigl[\mathrm{d}F(X),\mathrm{d}F(Y)\bigr]_{F(p)},$$

这里 $F$ 是微分同胚。取 $F = L_{g}$，由左不变性得 $\mathrm{d}(L_{g})X = X$、$\mathrm{d}(L_{g})Y = Y$，于是 $\mathrm{d}(L_{g})[X,Y] = [X,Y]$，即 $[X,Y]$ 左不变。所以「Lie 群给出 Lie 代数」唯一的实质是这条自然性。

> 续见 notes/prop.left-invariant-fields.2.md

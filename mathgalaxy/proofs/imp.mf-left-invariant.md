# 左不变性 $+$ 括号自然性 $\implies$ 左不变向量场构成 Lie 代数
`imp.mf-left-invariant` · 推出 · strong 边 · 根 `../`

`def.lie-group` Lie 群 + `def.lie-bracket` Lie 括号 → `prop.left-invariant-fields` 左不变向量场

**(1) 赋值是同构。** 设 $X$ 左不变。由 $X_{gh} = \mathrm{d}(L_{g})_{h}(X_{h})$ 取 $h = e$ 得 $X_{g} = \mathrm{d}(L_{g})_{e}(X_{e})$ —— 于是 $X$ 完全由 $X_{e}$ 决定，$X \mapsto X_{e}$ 单射。反之给定 $v \in \mathfrak{g} := T_{e}G$，令 $X_{g} := \mathrm{d}(L_{g})_{e}(v)$，则

$$X_{gh} = \mathrm{d}(L_{gh})_{e}(v) = \mathrm{d}\bigl(L_{g} \circ L_{h}\bigr)_{e}(v) = \mathrm{d}(L_{g})_{h}\bigl(\mathrm{d}(L_{h})_{e}(v)\bigr) = \mathrm{d}(L_{g})_{h}(X_{h}),$$

故 $X$ 左不变，$X \mapsto X_{e}$ 满射。线性显然，故是同构，左不变向量场的空间维数为 $\dim G$。光滑性：局部用卡写开，$g \mapsto \mathrm{d}(L_{g})_{e}(v)$ 是 $g$ 的光滑函数（$L_{g}$ 的局部表示对 $g$ 光滑）。

> 续见 proofs/imp.mf-left-invariant.2.md

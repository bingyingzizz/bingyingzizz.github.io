# 保向不变性 + 单位分解 $\implies$ 流形上的换元公式
`imp.spivak-change-variables` · 推出 · strong 边 · 根 `../`

`def.integral-form` 形式的积分 + `prop.paracompact-partition-unity` 仿紧性与单位分解 → `thm.change-of-variables-manifold` 流形上的换元公式

$$g^{\ast}\omega = (\beta\circ g)\,\det\Bigl(\frac{\partial g}{\partial x}\Bigr)\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n} ,$$

因为 $g^{\ast}(\mathrm{d}y^{1}\wedge\cdots\wedge\mathrm{d}y^{n})$ 是 $U$ 上的顶次形式，其唯一系数正是 Jacobi 行列式（顶次外形式在微分同胚下按 $\det$ 变换 —— 这正是 `def.integral-form` 的良定性所用的那一条）。

**（3）用一次换元公式。**

$$\int_{U}g^{\ast}\omega = \int_{U}(\beta\circ g)\,\det\Bigl(\frac{\partial g}{\partial x}\Bigr)\mathrm{d}x = \pm\int_{U}(\beta\circ g)\Bigl|\det\Bigl(\frac{\partial g}{\partial x}\Bigr)\Bigr|\mathrm{d}x = \pm\int_{V}\beta\,\mathrm{d}y ,$$

> 续见 proofs/imp.spivak-change-variables.3.md

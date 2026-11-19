# imp.quintic-unsolvable
`imp.quintic-unsolvable` · 推出 · strong 边 · 根 `../`

`thm.radical-solvable` 根式可解 与 伽罗瓦群可解 + `prop.sn-solvable` 对称群的可解性 + `def.galois-group` 伽罗瓦群 + `def.irreducible-poly` 不可约多项式 → `thm.quintic-unsolvable` 五次方程没有根式解

**收尾**。于是 $\operatorname{Gal}(f) \cong S_{5}$。由 `prop.sn-solvable`，$S_{5}$ 不可解；由 `thm.radical-solvable`（特征 $0$，底域 $\mathbb{Q}$），根式可解当且仅当伽罗瓦群可解。所以 $f$ 的根不能由 $\mathbb{Q}$ 的元素经四则运算与开方写出，特别地不存在一般的五次根式公式。∎

> 取 $x^5-4x+2$，证不可约、群含 5-轮换与换位、$S_5$ 不可解。

# 对合 $\implies$ 平坦坐标（流盒拉直 $+$ 降秩归纳）
`imp.mf2-frobenius-flat` · 推出 · strong 边 · 根 `../`

`def.involutive-distribution` 对合分布 + `thm.flow-local` 局部流 + `def.lie-bracket` Lie 括号 → `thm.frobenius` Frobenius 定理

对 $i, j \ge 2$，$[\tilde Y_{i},\tilde Y_{j}] \in \Gamma(\mathcal{D})$ 且 $\mathrm{d}y^{1}([\tilde Y_{i},\tilde Y_{j}]) = 0$（同上计算），故 $\mathcal{D}^{\prime}$ 对合。

由归纳假设，$H_{0}$ 上有坐标 $(z^{2},\ldots,z^{n})$ 使 $\mathcal{D}^{\prime}$ 由 $\partial_{z^{2}},\ldots,\partial_{z^{k}}$ 张成。

**第四步：沿 $\partial_{1}$ 平移坐标。** 把 $z^{2},\ldots,z^{n}$ 沿 $\partial_{1}$ 的流不变地延拓（即令 $z^{a}(\varphi_{t}(q)) := z^{a}(q)$ 对 $q \in H_{0}$），并令 $z^{1} := y^{1}$。

这是一组坐标（$\partial_{1}$ 横截 $H_{0}$），且 $\partial_{1} = \partial_{z^{1}}$、$\partial_{1}z^{a} = 0$（$a \ge 2$）。

> 续见 proofs/imp.mf2-frobenius-flat.5.md

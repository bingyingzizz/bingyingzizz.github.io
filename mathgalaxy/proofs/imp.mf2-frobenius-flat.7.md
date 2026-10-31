# 对合 $\implies$ 平坦坐标（流盒拉直 $+$ 降秩归纳）
`imp.mf2-frobenius-flat` · 推出 · strong 边 · 根 `../`

`def.involutive-distribution` 对合分布 + `thm.flow-local` 局部流 + `def.lie-bracket` Lie 括号 → `thm.frobenius` Frobenius 定理

固定 $a \ge k+1$，这就是未知向量 $(f^{a}_{2},\ldots,f^{a}_{k})$ 沿流线的一阶**线性**方程组，初值在 $H_{0}$ 上为零；由线性方程解的唯一性，$f^{a}_{i}$ 在每条流线上恒为零。故 $\tilde Y_{i}$ 落在 $\operatorname{span}\{\partial_{z^{1}},\ldots,\partial_{z^{k}}\}$ 里，而 $\partial_{1} = \partial_{z^{1}}$ 也在其中，于是 $\mathcal{D} = \operatorname{span}\{\partial_{1},\tilde Y_{2},\ldots,\tilde Y_{k}\}$ 含于 $\operatorname{span}\{\partial_{z^{1}},\ldots,\partial_{z^{k}}\}$，维数相同故相等 —— $(z^{1},\ldots,z^{n})$ 就是所求的平坦坐标。∎

> 续见 proofs/imp.mf2-frobenius-flat.8.md

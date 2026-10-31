# 对合 $\implies$ 平坦坐标（流盒拉直 $+$ 降秩归纳）
`imp.mf2-frobenius-flat` · 推出 · strong 边 · 根 `../`

`def.involutive-distribution` 对合分布 + `thm.flow-local` 局部流 + `def.lie-bracket` Lie 括号 → `thm.frobenius` Frobenius 定理

**第三步：在横截超曲面上降秩。** 固定 $c$，令 $H_{c} := \{y^{1} = c\}$（$n-1$ 维），$\mathcal{D}^{\prime} := \mathcal{D}\cap TH_{c}$。由第二步，$\mathcal{D}^{\prime}$ 在 $H_{c}$ 上由 $\tilde Y_{2},\ldots,\tilde Y_{k}$ 张成，秩 $k-1$；对 $i, j \ge 2$，$[\tilde Y_{i},\tilde Y_{j}] \in \Gamma(\mathcal{D})$ 且 $\mathrm{d}y^{1}([\tilde Y_{i},\tilde Y_{j}]) = 0$（同上计算），故 $\mathcal{D}^{\prime}$ 对合。由归纳假设，$H_{0}$ 上有坐标 $(z^{2},\ldots,z^{n})$ 使 $\mathcal{D}^{\prime}$ 由 $\partial_{z^{2}},\ldots,\partial_{z^{k}}$ 张成。

> 续见 proofs/imp.mf2-frobenius-flat.5.md

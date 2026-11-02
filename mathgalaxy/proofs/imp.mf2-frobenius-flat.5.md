# 对合 $\implies$ 平坦坐标（流盒拉直 $+$ 降秩归纳）
`imp.mf2-frobenius-flat` · 推出 · strong 边 · 根 `../`

`def.involutive-distribution` 对合分布 + `thm.flow-local` 局部流 + `def.lie-bracket` Lie 括号 → `thm.frobenius` Frobenius 定理

剩下要证 $\tilde Y_{i}$ 与切片 $\{z^{k+1} = c^{k+1},\ldots,z^{n} = c^{n}\}$ 相切，即 $f^{a}_{i} := \tilde Y_{i}z^{a} \equiv 0$（$a \ge k+1$）。

在 $H_{0}$ 上 $f^{a}_{i} = 0$（归纳假设）。

沿 $\partial_{1}$ 的流线，记 $[\partial_{1},\tilde Y_{i}] = \sum_{j \ge 2} b^{j}_{\ i}\,\tilde Y_{j}$（第二步给的），则

$$\partial_{1} f^{a}_{i} = \bigl[\partial_{1},\tilde Y_{i}\bigr]\,(z^{a}) + \tilde Y_{i}\bigl(\partial_{1}z^{a}\bigr) = \sum_{j \ge 2} b^{j}_{\ i}\,f^{a}_{j} + 0 .$$

固定 $a \ge k+1$，这就是未知向量 $(f^{a}_{2},\ldots,f^{a}_{k})$ 沿流线的一阶**线性**方程组，初值在 $H_{0}$ 上为零；由线性方程解的唯一性，$f^{a}_{i}$ 在每条流线上恒为零。

> 续见 proofs/imp.mf2-frobenius-flat.6.md

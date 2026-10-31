# 对合 $\implies$ 平坦坐标（流盒拉直 $+$ 降秩归纳）
`imp.mf2-frobenius-flat` · 推出 · strong 边 · 根 `../`

`def.involutive-distribution` 对合分布 + `thm.flow-local` 局部流 + `def.lie-bracket` Lie 括号 → `thm.frobenius` Frobenius 定理

**第四步：沿 $\partial_{1}$ 平移坐标。** 把 $z^{2},\ldots,z^{n}$ 沿 $\partial_{1}$ 的流不变地延拓（即令 $z^{a}(\varphi_{t}(q)) := z^{a}(q)$ 对 $q \in H_{0}$），并令 $z^{1} := y^{1}$。这是一组坐标（$\partial_{1}$ 横截 $H_{0}$），且 $\partial_{1} = \partial_{z^{1}}$、$\partial_{1}z^{a} = 0$（$a \ge 2$）。

剩下要证 $\tilde Y_{i}$ 与切片 $\{z^{k+1} = c^{k+1},\ldots,z^{n} = c^{n}\}$ 相切，即 $f^{a}_{i} := \tilde Y_{i}z^{a} \equiv 0$（$a \ge k+1$）。在 $H_{0}$ 上 $f^{a}_{i} = 0$（归纳假设）。沿 $\partial_{1}$ 的流线，记 $[\partial_{1},\tilde Y_{i}] = \sum_{j \ge 2} b^{j}_{\ i}\,\tilde Y_{j}$（第二步给的），则

> 续见 proofs/imp.mf2-frobenius-flat.6.md

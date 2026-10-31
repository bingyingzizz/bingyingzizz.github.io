# 光滑 $\implies$ 切映射的矩阵是 Jacobi 矩阵且满足链式法则
`imp.mf-diff-chain-rule` · 推出 · strong 边 · 根 `../`

`def.smooth-map` 光滑映射 + `def.jacobian` Jacobi 矩阵 → `def.differential-map` 切映射

**矩阵形状。** 取卡 $(U,\varphi)$（$N$ 的）与 $(V,\psi)$（$M$ 的），记 $G := \psi \circ F \circ \varphi^{-1}$，$y = \varphi(p)$。坐标基下 $\mathrm{d}F_{p}(\partial_{j})$ 的分量由「第 $i$ 个坐标函数的方向导数」给出：

$$\mathrm{d}x^{i}\bigl(\mathrm{d}F_{p}(\partial_{j})\bigr) = \partial_{j}\bigl(G^{i}\bigr)(y),$$

右边正是 Jacobi 矩阵的 $(i,j)$ 元。所以矩阵就是 $\bigl(\partial G^{i}/\partial y^{j}\bigr)$，与 `def.jacobian` 逐字相同。这一步顺带说明：只要 $F$ 的光滑性成立，矩阵就存在（一阶偏导连续则 $F$ 可微）。

**链式法则。** 设 $F : N \to M$、$G : M \to P$ 光滑，$p \in N$。对任意曲线 $\gamma$ 过 $p$，由定义

> 续见 proofs/imp.mf-diff-chain-rule.2.md

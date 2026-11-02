# 矩阵范数　`def.matrix-norm`　·　说明
根 `../`

**两种口径为什么都要**：算子范数量的是「最大放大倍数」，直接对应谱半径与收敛性（$\rho(A) \le \lVert A\rVert$，`def.spectral-radius`）；Frobenius 范数量的是「一共有多大」，计算容易、且对低秩逼近天然合适（Eckart–Young 用它陈述）。

⚠️ **Frobenius 不是算子范数**（除了一维情形），它不满足「从某个向量范数诱导」；所以 $\lVert I\rVert_{F} = \sqrt{n}$ 而任何算子范数都有 $\lVert I\rVert = 1$。判据就在这里。

⚠️ 谱范数用**奇异值**而不是特征值：$\lVert A\rVert_2 = \sigma_{\max}$，而 $\rho(A) = \max\lvert\lambda\rvert$。两者只在正规矩阵上相等（`def.normal-matrix`）。

⭐ **为什么 $\lVert\cdot\rVert$ 常用来估误差**：$\lVert x - x_{0}\rVert \le \lVert A^{-1}\rVert\,\lVert b - Ax_{0}\rVert$ —— 条件数 $\kappa = \lVert A\rVert\lVert A^{-1}\rVert$ 就是这么来的（本图不展开数值分析，只记这个接口）。

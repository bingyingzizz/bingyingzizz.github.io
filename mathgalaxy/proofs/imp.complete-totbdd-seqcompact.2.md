# 完备 + 全有界 $\implies$ 列紧（对角线法）
`imp.complete-totbdd-seqcompact` · 推出 · strong 边 · 根 `../`

`def.complete` 完备 + `def.totally-bounded` 全有界 → `def.sequentially-compact` 列紧

**② 对角线。** 取 $y_{k} = x^\{(k)\}_{k}$（第 $k$ 个子列的第 $k$ 项）。则 $\{y_{k}\}$ 是 $\{x_{n}\}$ 的子列；且对 $k, l \ge K$，$y_{k}$ 与 $y_{l}$ 都是第 $K$ 个子列的项（下标 $\ge K$ 的项都在里面），故

$$d(y_k, y_l) < 2/K$$

于是 $\{y_{k}\}$ 是 Cauchy 列。

**③** 由 $X$ 完备，$\{y_{k}\}$ 收敛。于是 $\{x_{n}\}$ 有收敛子列，$X$ 列紧。∎

> ① 里「无穷多项落进某一个球」用到抽屉原理（有限情形，不需要选择）。② 的对角线抽取也不需要选择 —— 所有选取都由「取第 $k$ 个子列的第 $k$ 项」唯一确定。

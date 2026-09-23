# 距离空间　`def.metric-space`
距离空间 / 度量空间（Metric Space）
layer 12 · 定义 · 度量空间 · 拓扑学

**距离空间**是一对 (X, d)：$X$ 是集合，$d : X \times X \to [0, +\infty )$ 是 $X$ 上的**距离**，满足

- **非退化**：$d(x, y) = 0 \iff x = y$
- **对称**：$d(x, y) = d(y, x)$
- **三角不等式**：$d(x, z) \le d(x, y) + d(y, z)$
> 陈述续见 `nodes/def.metric-space.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.real` 实数系 ℝ：用到了定义 实数系 ℝ　proofs/dep.real-metric.md
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/dep.topology-metric.md
- `def.topology-base` 基与子基：用到了定义 基与子基　proofs/dep.base-metric.md
- `def.function` 函数：用到了定义 函数　proofs/def-dep.function-metric-space.md

## 它能推出什么 / 谁在用它
- 被 `lem.covering` 覆盖引理 用
- 被 `cor.borel-product` 可数积的 Borel 代数 用
- 被 `def.complete` 完备 用

- …另有出边，续页见 `nodes/def.metric-space.3.md`

refs: Rudin, Principles of Mathematical Analysis, Ch. 2；Munkres, Topology, §20

> 说明见 `notes/def.metric-space.md`

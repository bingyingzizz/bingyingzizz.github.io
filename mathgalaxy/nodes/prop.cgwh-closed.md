# CGWH 的开闭子空间与滤过余极限　`prop.cgwh-closed`
$\mathrm{CGWH}$ 的封闭性
layer 7 · 命题 · 紧生成空间与弱 Hausdorff · 拓扑学

1. 紧生成的弱 Hausdorff 空间的**开子空间**与**闭子空间**仍紧生成且弱 Hausdorff。
2. 若 $X = \varinjlim X_{i}$ 是紧生成的弱 Hausdorff 空间沿**闭含入**的**滤过**余极限，则 $X$ 也紧生成的弱 Hausdorff，并且每个 $X_{i}$ 都在 $X$ 中闭。

## 为什么成立（入边，证明在 proofs/）
- `def.subspace-topology` 子空间拓扑：用到了定义 子空间拓扑　proofs/def-dep.cgwhclosed-subspace.md
- `def.weak-hausdorff` 弱 Hausdorff 空间：用到了定义 弱 Hausdorff 空间　proofs/def-dep.cgwhclosed-weakhaus.md

## 说明
第 2 条正是凝聚态数学里反复要用的那一条：把「由有限块拼起来的对象」按滤过余极限拼大，$\mathrm{CGWH}$ 的性质不会掉。

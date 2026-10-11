# 紧块沿闭含入拼出的空间　`prop.closed-inclusion-filtered-limit`
紧 Hausdorff 块沿闭含入的滤过余极限
layer 17 · 命题 · 紧生成空间与弱 Hausdorff · 拓扑学

设 $X = \varinjlim_{i \in I} X_{i}$ 是**紧 Hausdorff 空间**沿**闭含入**的滤过余极限。则

1. $X$ 紧生成且弱 Hausdorff；
2. 每个 $X_{i}$ 在 $X$ 中**闭**；
3. $X$ 的拓扑就是这些紧块的**余极限拓扑**：$U \subseteq X$ 开 $\iff$ 每个 $U \cap X_{i}$ 在 $X_{i}$ 中开。
> 陈述续见 `nodes/prop.closed-inclusion-filtered-limit.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.compactly-generated` 紧生成空间：用到了定义 紧生成空间　proofs/def-dep.clif-cg.md
- `def.chaus` 紧 Hausdorff 空间范畴：用到了定义 紧 Hausdorff 空间范畴　proofs/def-dep.clif-chaus.md
- `def.weak-hausdorff` 弱 Hausdorff 空间：用到了定义 弱 Hausdorff 空间　proofs/def-dep.clif-wh.md

refs: Le Stum, Proposition 2.3.9

> 说明见 `notes/prop.closed-inclusion-filtered-limit.md`

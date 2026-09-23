# 紧子集是闭的　`prop.compact-subset-closed`
命题：紧子集在 X 中是闭集
layer 14 · 命题 · 度量空间 · 拓扑学

设 $A$ 是距离空间 $X$ 的子集（按子空间度量）。则

$$A\text{ 紧} \implies A\text{ 是} X\text{ 中的闭集}$$

## 为什么成立（入边，证明在 proofs/）
- `def.compact` 紧：用到了定义 紧　proofs/def-link.compact-closed.md
- `def.closed-set` 闭集与闭包：用到了定义 闭集与闭包　proofs/dep.closed-set-compact-closed.md

refs: Munkres, Topology, §26

## 说明
其实只要 $X$ 是 Hausdorff 空间，紧子集就是闭的；距离空间自然 Hausdorff。

把它和「$X$ 完备」放在一起，正是为了下面那条**子集**的紧性刻画做准备：那条要用「$A$ 紧 $\implies A$ 闭」和「$A$ 闭 $X$ 完备 $\implies A$ 完备」。

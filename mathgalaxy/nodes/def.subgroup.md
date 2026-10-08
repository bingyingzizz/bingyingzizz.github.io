# 子群　`def.subgroup`
子群（Subgroup）
layer 7 · 定义 · 代数结构 · 抽象代数

设 $(G, \cdot)$ 是群，$H \subseteq G$。称 $H$ 是 $G$ 的**子群**（记 $H \le G$），如果 $H$ 在**限制过来的运算**下自己构成一个群 —— 也就是：
> 陈述续见 `nodes/def.subgroup.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.group` 群：用到了定义 群　proofs/def-dep.subgroup-group.md

## 它能推出什么 / 谁在用它
- 被 `def.group-hom` 群同态、核与像 用

## 说明
两条合起来可写成一条：$a, b \in H \implies a b^{-1} \in H$。

任意多个子群的交仍是子群；但**并**一般不是 —— 这也是「由 $S$ 生成的子群 $\langle S \rangle$」要定义成「含 $S$ 的一切子群的交」的原因。

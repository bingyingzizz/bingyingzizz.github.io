# 环　`def.ring`
环与交换环（Ring）
layer 7 · 定义 · 代数结构 · 抽象代数

设 $A$ 是**集合**，$+$ 与 $\cdot$ 是 $A$ 上的两个**二元运算**。称 $(A, +, \cdot)$ 是一个**环**，当且仅当：

- $(A, +)$ 是**阿贝尔群**；
- $(A, \cdot)$ 满足**结合律**（不要求单位元，也不要求交换）；
- **分配律** $a(b + c) = ab + ac$、$(a + b)c = ac + bc$ 成立。

乘法还交换的环叫**交换环**；再要求有乘法单位元 $1 \ne 0$ 的环叫**含幺环**。

## 为什么成立（入边，证明在 proofs/）
- `def.group` 群：用到了定义 群　proofs/def-dep.ring-group.md

## 它能推出什么 / 谁在用它
- 被 `def.ideal` 理想 用
- 被 `def.module` 模 用
- 被 `prop.ring-localization` 环的局部化 W⁻¹R 用

refs: Lang, Algebra, Ch. II；Dummit & Foote, Abstract Algebra, §7.1

> 说明见 `notes/def.ring.md`

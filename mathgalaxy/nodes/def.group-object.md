# 群对象与阿贝尔群对象　`def.group-object`
群对象与阿贝尔群对象（Group Object）
layer 14 · 定义 · 范畴里的代数结构 · 范畴论+抽象代数

设 $G$ 是笛卡尔范畴 $\mathcal{C}$ 里的一个**幺半群对象**。若存在态射

$$\iota : G \longrightarrow G$$

使下方方块交换（$\iota$ 就是「取逆」），则称 $G$ 是 $\mathcal{C}$ 里的**群对象**：
> 陈述续见 `nodes/def.group-object.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.monoid-object` 幺半群对象：用到了定义 幺半群对象　proofs/def-dep.groupobj-monoid.md
- `def.product` 积 / 余积：用到了定义 积 / 余积　proofs/def-dep.groupobj-product.md
- `def.group` 群：用到了定义 群　proofs/def-dep.groupobj-group.md

## 它能推出什么 / 谁在用它
- 被 `ex.ab-of-categories` Ab(C) 的例子 用

> 说明见 `notes/def.group-object.md`

# 幺半群对象　`def.monoid-object`
幺半群对象（Monoid Object）
layer 13 · 定义 · 范畴里的代数结构 · 范畴论+抽象代数

设 $\mathcal{C}$ 是有**有限积**的范畴（也叫**笛卡尔范畴**），$1$ 是它的终对象。$\mathcal{C}$ 中的**幺半群对象**是一个对象 $G$ 连同一个**乘法**

$$\mu : G \times G \longrightarrow G$$

与一个**单位** $\varepsilon : 1 \to G$，使下面两个方块交换：
> 陈述续见 `nodes/def.monoid-object.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.product` 积 / 余积：用到了定义 积 / 余积　proofs/def-dep.monoidobj-product.md
- `def.final-initial` 终对象 / 始对象：用到了定义 终对象 / 始对象　proofs/def-dep.monoidobj-terminal.md

## 它能推出什么 / 谁在用它
- 被 `def.group-object` 群对象与阿贝尔群对象 用

> 说明见 `notes/def.monoid-object.md`

# 零对象与直和　`def.zero-object`
零对象、双积与直和
layer 13 · 定义 · 图与极限 · 范畴论

范畴 $\mathcal{C}$ 里的对象 $0$ 叫**零对象**，如果它**既是终对象又是始对象**（等价地 $\operatorname{End}(0) = \{ \mathrm{id} \}$，唯一的自同态是零）。

一族对象 $(M_{i})_{i \in I}$ 的**双积**（biproduct）是「积与余积恰好重合」的对象，记 $\bigoplus_{i \in I} M_{i}$；代数里就叫**直和**。

## 为什么成立（入边，证明在 proofs/）
- `def.final-initial` 终对象 / 始对象：用到了定义 终对象 / 始对象　proofs/def-dep.zeroobj-finalinitial.md

## 它能推出什么 / 谁在用它
- 被 `def.split-exact` 分裂短正合列 用

> 说明见 `notes/def.zero-object.md`

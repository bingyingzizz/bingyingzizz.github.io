# 环的局部化 W⁻¹R　`prop.ring-localization`
环的局部化（Localization of a Ring）
layer 11 · 例 · 代数结构 · 抽象代数+范畴论

设 $R$ 是**交换环**，$W \subseteq R$ 是**乘性子集**（$1 \in W$，且 $f, g \in W \implies fg \in W$）。

把 $R$ 看作**单对象范畴**：唯一对象 $\ast$，$\operatorname{Hom}(\ast, \ast) = R$，复合就是乘法。它关于 $W$ 的局部化记作

$$W^{-1}R,$$

元素写成**分式** $r/w$（$r \in R$、$w \in W$）。

## 为什么成立（入边，证明在 proofs/）
- `def.ring` 环：用到了定义 环　proofs/def-dep.ringloc-ring.md
- `def.localization` 局部化：用到了定义 局部化　proofs/def-dep.ringloc-localization.md

> 说明见 `notes/prop.ring-localization.md`

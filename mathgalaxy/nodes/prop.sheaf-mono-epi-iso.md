# 层中单满即同构　`prop.sheaf-mono-epi-iso`
层里的单满分解
layer 13 · 命题 · 层与拓扑 · 范畴论

设 $u : F \to G$ 是层之间的态射。则：

1. 若 $u$ 既是单态射又是满态射，则 $u$ 是同构；
2. $u$ 有**唯一的**满-单分解：存在唯一的 $I$ 使 $u = F \twoheadrightarrow I \rightarrowtail G$。

## 为什么成立（入边，证明在 proofs/）
- `def.equalizer` 等化子 / 余等化子：用到了定义 等化子 / 余等化子　proofs/def-dep.equalizer-mono-epi.md

## 说明
这两条在 $\mathbf{Set}$ 里也对，但在层范畴里**不是自动的**，要证。它们恰好就是**预拓扑斯（pretopos）**公理的内容 —— 所以这个位置正是从「层」走向「拓扑斯」的接口。

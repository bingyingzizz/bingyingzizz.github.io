# 子空间拓扑　`def.subspace-topology`
子空间拓扑（Subspace Topology）
layer 5 · 定义 · 拓扑空间 · 拓扑学

设 $(X, \mathcal{T})$ 是拓扑空间，$Y \subseteq X$。$Y$ 上的**子空间拓扑**取

$$\mathcal{T}_{Y} := \{\, U \cap Y : U \in \mathcal{T} \,\}$$
> 陈述续见 `nodes/def.subspace-topology.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/dep.topology-subspace.md
- `def.subset` 子集：用到了定义 子集　proofs/dep.subset-subspace.md

## 它能推出什么 / 谁在用它
- 被 `prop.cgwh-closed` CGWH 的开闭子空间与滤过余极限 用

## 说明
直观：**子空间的开集就是「大空间的开集切一刀」**。所以「$Y$ 中闭」「$Y$ 中紧」都要按切出来的那片来判断，不能直接看大空间里的样子 —— 例如 $(0, 1) \subseteq \mathbb{R}$ 在自身中是闭的，在 $\mathbb{R}$ 中不是。

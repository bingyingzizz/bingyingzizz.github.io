# 商拓扑　`def.quotient-topology`
商拓扑（Quotient Topology）
layer 6 · 定义 · 拓扑空间 · 拓扑学

设 $(X, \mathcal{T})$ 是拓扑空间，$\pi : X \twoheadrightarrow Y$ 是满射。$Y$ 上的**商拓扑**取

$$\mathcal{T}_{Y} := \{\, V \subseteq Y : \pi^{-1}(V) \in \mathcal{T} \,\}$$

这是使 $\pi$ 连续的最细拓扑；带这个拓扑的 $Y$ 叫 $X$ 的**商空间**。

## 为什么成立（入边，证明在 proofs/）
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/dep.topology-quotient.md
- `def.function` 函数：用到了定义 函数　proofs/dep.function-quotient.md

## 它能推出什么 / 谁在用它
- 被 `thm.quotient-product` 商映射与局部紧空间作积 用
- 被 `prop.cg-kclosed-quotient` k-闭等价关系与弱 Hausdorff 商 用
- 被 `def.k-topology` k-开、k-闭与 k-拓扑 用
- 被 `thm.quotient-product` 商映射与局部紧空间作积 用
- 被 `thm.cgwh-reflective` CGWH 是 CG 的反射子范畴 用

> 说明见 `notes/def.quotient-topology.md`

- …另有出边，续页见 `nodes/def.quotient-topology.2.md`

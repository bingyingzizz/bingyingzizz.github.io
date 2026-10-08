# Borel σ-代数　`def.borel`
Borel σ-代数（Borel σ-Algebra $\mathfrak{B}_X$）
layer 6 · 定义 · 集合族与 σ-代数 · 分析学+拓扑学

设 $X$ 是拓扑空间。$X$ 上的 **$Borel \sigma$代数**是由全体开集生成的 $\sigma$代数：

$$\mathfrak{B}_X := \mathcal{M}(\{ U \subseteq X : U\text{ 是开集} \})$$

$\mathfrak{B}_X$ 中的集合称为 **Borel 集**：开集、闭集、可数个开集之交（$G_\delta$）、可数个闭集之并（$F_\sigma$）等都属于 $\mathfrak{B}_X$。

## 为什么成立（入边，证明在 proofs/）
- `def.generated-sigma` 生成的 σ-代数：用到了定义 生成的 σ-代数　proofs/def-link.generated-borel.md
- `def.sigma-algebra` σ-代数：用到了定义 σ-代数　proofs/def-link.sigmaalgebra-borel.md
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/dep.topology-borel.md

## 它能推出什么 / 谁在用它
- 被 `cor.borel-product` 可数积的 Borel 代数 用

- …另有出边，续页见 `nodes/def.borel.2.md`

refs: Folland, Real Analysis, §1.2

> 说明见 `notes/def.borel.md`

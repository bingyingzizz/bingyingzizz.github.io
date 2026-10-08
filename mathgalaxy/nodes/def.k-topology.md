# k-开、k-闭与 k-拓扑　`def.k-topology`
$k$-开集与 $k$-化（$k$-Topology）
layer 17 · 定义 · 紧生成空间与弱 Hausdorff · 拓扑学

子集 $Y \subseteq X$ 叫 **$k$-开**（**$k$-闭**）的，如果对每个连续映射 $f : S \to X$（$S$ 紧 Hausdorff），$f^{-1}(Y)$ 在 $S$ 中开（闭）。

全体 $k$-开集构成的拓扑叫 $X$ 上的 **$k$-拓扑**；记 $kX$ 为「同一个集合、拓扑换成 $k$-拓扑」的那个空间。

## 为什么成立（入边，证明在 proofs/）
- `def.compactly-generated` 紧生成空间：用到了定义 紧生成空间　proofs/def-dep.ktopo-cg.md
- `def.quotient-topology` 商拓扑：用到了定义 商拓扑　proofs/def-dep.ktopo-quotient.md

## 它能推出什么 / 谁在用它
- 被 `prop.k-product` k-化与积 用
- 被 `prop.ktx-colimit` kX 是紧空间的余极限 用
- 被 `prop.cg-coreflective` 紧生成空间是余反射子范畴 用
- 被 `prop.k-product` k-化与积 用
- 被 `prop.weak-hausdorff-basic` 弱 Hausdorff 的基本性质 用

> 说明见 `notes/def.k-topology.md`

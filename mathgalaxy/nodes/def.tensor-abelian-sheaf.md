# 阿贝尔层的张量积　`def.tensor-abelian-sheaf`
张量积与封闭幺半结构
layer 18 · 定义 · 阿贝尔层 · 同调代数

设 $\mathcal{T}$ 是拓扑斯、$M, N \in \mathcal{T}(\mathbf{Ab})$。函子

$$P \longmapsto \operatorname{Hom}_{\mathbb{Z}}\bigl(M,\ \operatorname{Hom}_{\mathbb{Z}}(N, P)\bigr)$$

可表示；表示对象记 $M \otimes_{\mathbb{Z}} N$。于是
> 陈述续见 `nodes/def.tensor-abelian-sheaf.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.internal-hom` 内 Hom：用到了定义 内 Hom　proofs/def-dep.tensor-internalhom.md
- `def.abelian-sheaf` 阿贝尔层：用到了定义 阿贝尔层　proofs/def-dep.tensor-abelsheaf.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.tensor-adjoint.md
- `def.condensed-abelian-group` 凝聚态阿贝尔群：用到了定义 凝聚态阿贝尔群　proofs/def-dep.tensor-condab.md

## 它能推出什么 / 谁在用它
- 被 `def.flat-abelian-sheaf` 平坦阿贝尔层 用

> 说明见 `notes/def.tensor-abelian-sheaf.md`

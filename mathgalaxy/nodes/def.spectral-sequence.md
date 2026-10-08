# 谱序列　`def.spectral-sequence`
谱序列（Spectral Sequence）
layer 16 · 定义 · 过滤与谱序列 · 同调代数

**谱序列**由两部分组成：

1. 一族复形 $E^{p,q}_{r}$（$p, q, r \in \mathbb{Z}$，$r \ge r_{0}$），微分

$$d^{p,q}_{r} : E^{p,q}_{r} \longrightarrow E^{p+r,\, q-r+1}_{r}$$

使得 $E^{p,q}_{r+1} \cong H^{p,q}(E_{r}) = \ker d^{p,q}_{r} / \operatorname{im} d^{p-r,\, q+r-1}_{r}$；
2. 一族**带过滤**的对象 $H^{n}$（$n \in \mathbb{Z}$），使得对每个 $p, q$ 与所有充分大的 $r$，
> 陈述续见 `nodes/def.spectral-sequence.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.cochain-complex` 上链复形：用到了定义 上链复形　proofs/def-dep.complex-spectral-sequence.md
- `def.filtration` 过滤：用到了定义 过滤　proofs/def-dep.filtration-spectral-sequence.md

> 说明见 `notes/def.spectral-sequence.md`

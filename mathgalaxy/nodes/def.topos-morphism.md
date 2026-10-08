# 拓扑斯的态射　`def.topos-morphism`
拓扑斯的态射（Morphism of Toposes）
layer 17 · 定义 · 拓扑斯 · 范畴论

拓扑斯的**态射** $f : \mathcal{T} \to \mathcal{T}'$ 是一对函子

$$f^{*} : \mathcal{T}' \longrightarrow \mathcal{T}, \qquad f_{*} : \mathcal{T} \longrightarrow \mathcal{T}'$$

满足 $f^{*} \dashv f_{*}$，并且 $f^{*}$ **正合**（保有限极限）。$f^{*}$ 叫**拉回函子**，$f_{*}$ 叫**推前函子**。

## 为什么成立（入边，证明在 proofs/）
- `def.topos` 拓扑斯：用到了定义 拓扑斯　proofs/def-dep.topos-morphism.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-topos-morphism.md
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-topos-morphism.md

> 说明见 `notes/def.topos-morphism.md`

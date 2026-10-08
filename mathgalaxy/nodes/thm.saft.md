# 伴随函子定理　`thm.saft`
伴随函子定理（SAFT）
layer 13 · 定理 · 伴随与反射 · 范畴论

设 $\mathcal{D}$ 是**小**且**完备**的范畴。则函子 $G : \mathcal{D} \to \mathcal{C}$ 有左伴随 $\iff$ $G$ 保持所有极限。

左伴随由一个极限的构造给出：

$$F(X) \;=\; \varprojlim_{(Y,\, f) \in (X \downarrow G)} Y$$

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限 + `def.comma-category` 逗号范畴：保极限 $\implies$ 有左伴随　proofs/imp.saft.md
- `def.limit` 极限：用到了定义 极限　proofs/def-link.limit-saft.md
- `def.comma-category` 逗号范畴：用到了定义 逗号范畴　proofs/def-link.comma-saft.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-saft.md
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-saft.md
- `def.comma-category` 逗号范畴：用到了定义 逗号范畴　proofs/def-dep.comma-saft.md

> 说明见 `notes/thm.saft.md`

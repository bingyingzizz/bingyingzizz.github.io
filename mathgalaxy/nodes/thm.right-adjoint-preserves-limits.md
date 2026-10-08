# 右伴随保极限　`thm.right-adjoint-preserves-limits`
右伴随保持所有极限
layer 12 · 定理 · 伴随与反射 · 范畴论

设 $F \dashv G$。则 $G$ **保持所有（在 $\mathcal{D}$ 中存在的）极限**：对每个图 $D : I \to \mathcal{D}$，

$$G\bigl(\lim D\bigr) \;\cong\; \lim\, (G \circ D)$$

## 为什么成立（入边，证明在 proofs/）
- `def.adjoint` 伴随函子 + `def.limit` 极限：伴随 $\implies$ 右伴随保极限　proofs/imp.right-adjoint-limits.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-link.adjoint-preserves-limits.md
- `def.limit` 极限：用到了定义 极限　proofs/def-link.limit-preserves-limits.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-dep.adjoint-preserves.md
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-preserves.md

> 说明见 `notes/thm.right-adjoint-preserves-limits.md`

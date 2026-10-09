# 共尾函子不改变余极限　`thm.cofinal-colimit`
共尾 $\implies$ 沿 $F$ 算余极限与沿 $I$ 算同构
layer 14 · 定理 · 图与极限 · 范畴论

设 $F : J \to I$ **共尾**，$D : I \to \mathcal{C}$ 是图。若 $\varinjlim_{j \in J} D(F(j))$ 存在，则 $\varinjlim_{i \in I} D(i)$ 存在，并且

$$\varinjlim_{j \in J} D\bigl(F(j)\bigr) \;\cong\; \varinjlim_{i \in I} D(i).$$

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.cofinalcolim-colimit.md
- `def.cofinal-functor` 共尾函子：用到了定义 共尾函子　proofs/def-dep.cofinalcolim-cofinal.md

> 说明见 `notes/thm.cofinal-colimit.md`

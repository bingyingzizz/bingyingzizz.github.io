# imp.reflective-limits
`imp.reflective-limits` · 推出 · strong 边 · 根 `../`

`def.reflective-subcategory` 反射子范畴 + `def.limit` 极限 + `def.adjoint` 伴随函子 → `prop.reflective-limits` 反射子范畴里的极限

**证明。** 设嵌入 $i : \mathcal{C}' \hookrightarrow \mathcal{C}$，反射 $F : \mathcal{C}\to\mathcal{C}'$，$F \dashv i$（即 $i$ 是右伴随）。
- **余极限**：对任意 $C' \in \mathcal{C}'$，用伴随同构与 $\mathcal{C}$ 中余极限的泛性
$$\operatorname{Hom}_{\mathcal{C}'}\bigl(F(\operatorname{colim}_{\mathcal{C}}D'), C'\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{C}}\bigl(\operatorname{colim}_{\mathcal{C}}D', iC'\bigr) \;\cong\; \lim_{j}\operatorname{Hom}_{\mathcal{C}}\bigl(D'_{j}, iC'\bigr) \;\cong\; \lim_{j}\operatorname{Hom}_{\mathcal{C}'}\bigl(D'_{j}, C'\bigr),$$
对 $C'$ 自然 —— 这正是「$F(\operatorname{colim}_{\mathcal{C}}D')$ 是 $D'$

> 续见 proofs/imp.reflective-limits.2.md

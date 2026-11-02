# 反射子范畴里的极限　`prop.reflective-limits`　·　说明
根 `../`

**证明。** 设嵌入 $i : \mathcal{C}' \hookrightarrow \mathcal{C}$，反射 $F : \mathcal{C}\to\mathcal{C}'$，$F \dashv i$（即 $i$ 是右伴随）。
- **余极限**：对任意 $C' \in \mathcal{C}'$，用伴随同构与 $\mathcal{C}$ 中余极限的泛性
$$\operatorname{Hom}_{\mathcal{C}'}\bigl(F(\operatorname{colim}_{\mathcal{C}}D'), C'\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{C}}\bigl(\operatorname{colim}_{\mathcal{C}}D', iC'\bigr) \;\cong\; \lim_{j}\operatorname{Hom}_{\mathcal{C}}\bigl(D'_{j}, iC'\bigr) \;\cong\; \lim_{j}\operatorname{Hom}_{\mathcal{C}'}\bigl(D'_{j}, C'\bigr),$$
对 $C'$ 自然 —— 这正是「$F(\operatorname{colim}_{\mathcal{C}}D')$ 是 $D'$ 在 $\mathcal{C}'$ 里的余极限」的泛性质 ✓。
- **极限**：同法
$$\operatorname{Hom}_{\mathcal{C}'}\bigl(C', \operatorname{lim}_{\mathcal{C}}D'\bigr) \;\cong\; \operatorname{lim}_{j}\operatorname{Hom}_{\mathcal{C}}\bigl(i

> 续见 notes/prop.reflective-limits.2.md

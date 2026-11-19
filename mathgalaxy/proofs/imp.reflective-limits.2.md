# imp.reflective-limits
`imp.reflective-limits` · 推出 · strong 边 · 根 `../`

`def.reflective-subcategory` 反射子范畴 + `def.limit` 极限 + `def.adjoint` 伴随函子 → `prop.reflective-limits` 反射子范畴里的极限

 在 $\mathcal{C}'$ 里的余极限」的泛性质 ✓。
- **极限**：设 $\mathcal{C}'$ 对 $\mathcal{C}$ 中的极限封闭（等价地 $F$ 左正合）。于是 $\lim_{\mathcal{C}}D'\in\mathcal{C}'$，且
$$\operatorname{Hom}_{\mathcal{C}'}\bigl(C', \operatorname{lim}_{\mathcal{C}}D'\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{C}}\bigl(iC', \operatorname{lim}_{\mathcal{C}}D'\bigr) \;\cong\; \operatorname{lim}_{j}\operatorname{Hom}_{\mathcal{C}}\bigl(iC', D'_{j}\bigr) \;\cong\; \operatorname{lim}_{j}\operatorname{Hom}_{\mathcal{C}'}\bigl(C', D'_{j}\bigr),$$
对 $C'$ 自然，故 $\lim_{\mathcal{C}}D'$ 是 $\mathcal{C}'$ 中的极限 ✓。
**结论：余极限要过一遍反射；极限在封闭假设下直接成立。**∎

# imp.measurable-criterion
`imp.measurable-criterion` · 推出 · strong 边 · 根 `../`

`def.measurable-function` 可测函数 + `def.sigma-algebra` σ-代数 + `def.generated-sigma` 生成的 σ-代数 → `prop.measurable-criterion` 可测性的两条判定准则

**证明。**
**(1) 复合**：对 $E \in \mathcal{O}$ 有 $(g \circ f)^{-1}(E) = f^{-1}\bigl(g^{-1}(E)\bigr)$；由 $g$ 可测得 $g^{-1}(E) \in \mathcal{N}$，再由 $f$ 可测得 $f^{-1}(\cdot) \in \mathcal{M}$ ✓。
**(2) 只需验证生成元**：
- **$(\Longleftarrow)$** 令 $\mathcal{C} := \{\, E \subseteq Y : f^{-1}(E) \in \mathcal{M} \,\}$。

原像保持并、交、补（$f^{-1}(E^{c}) = X \setminus f^{-1}(E)$），故 $\mathcal{C}$ 是 $Y$ 上的 **$\sigma$代数** ✓；

> 续见 proofs/imp.measurable-criterion.2.md

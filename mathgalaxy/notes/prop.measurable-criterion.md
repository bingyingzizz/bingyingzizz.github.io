# 可测性的两条判定准则　`prop.measurable-criterion`　·　说明
根 `../`

**证明。**
**(1) 复合**：对 $E \in \mathcal{O}$ 有 $(g \circ f)^{-1}(E) = f^{-1}\bigl(g^{-1}(E)\bigr)$；由 $g$ 可测得 $g^{-1}(E) \in \mathcal{N}$，再由 $f$ 可测得 $f^{-1}(\cdot) \in \mathcal{M}$ ✓。
**(2) 只需验证生成元**：
- **$(\Longleftarrow)$** 令 $\mathcal{C} := \{\, E \subseteq Y : f^{-1}(E) \in \mathcal{M} \,\}$。原像保持并、交、补（$f^{-1}(E^{c}) = X \setminus f^{-1}(E)$），故 $\mathcal{C}$ 是 $Y$ 上的 **$\sigma$代数** ✓；由假设 $\mathcal{E} \subseteq \mathcal{C}$，取生成的 $\sigma$代数得 $\mathcal{N} = \mathcal{M}(\mathcal{E}) \subseteq \mathcal{C}$，即一切 $E \in \mathcal{N}$ 的原像都可测 ✓。
- **$(\implies)$** 按可测的定义即得 ✓。
同一论证可用于任何「生成它的族」：拓扑空间上只需开集（或闭集、或基元素）；$\mathbb{R}$ 上只需 $(-\infty, a]$ 这类射线 ✓。∎

(1)：对 $E \in \mathcal{O}$ 有 $(g\circ f)^{-1}(E) = f^{-1}(g^{-1}(E))$，两层都可测。

> 续见 notes/prop.measurable-criterion.2.md

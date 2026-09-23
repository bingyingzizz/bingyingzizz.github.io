# 可测性的两条判定准则　`prop.measurable-criterion`　·　说明
根 `../`

(1)：对 $E \in \mathcal{O}$ 有 $(g\circ f)^{-1}(E) = f^{-1}(g^{-1}(E))$，两层都可测。

(2) 的 $(\Longleftarrow )$：令 $\mathcal{C} = \{ E \subseteq Y : f^{-1}(E) \in \mathcal{M} \}$。因为原像保持并、交、补，**$\mathcal{C}$ 是一个 $\sigma$代数**；题设说 $\mathcal{E} \subseteq \mathcal{C}$，于是 $\mathcal{M}(\mathcal{E}) \subseteq \mathcal{C}$，即所有可测集的原像都可测。

(2) 是整段里最常用的判定工具：要证 $f$ 可测，只需在一小族生成元上验证 —— 比如 $\mathbb{R}$ 值函数只需验证 $f^{-1}((a, \infty))$ 可测。

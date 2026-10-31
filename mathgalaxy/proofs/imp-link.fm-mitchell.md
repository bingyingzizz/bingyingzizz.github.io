# Freyd–Mitchell 嵌入 $\implies$ 它还反射投射与内射
`imp-link.fm-mitchell` · 推出 · strong 边 · 根 `../`

`thm.freyd-mitchell` Freyd–Mitchell 嵌入定理 → `prop.mitchell-exactness` 嵌入定理的细化

嵌入 $E$ 全忠实，于是对任意 $X \in \mathcal{C}$ 有自然同构 $\operatorname{Hom}_{\mathcal{C}}(P, X) \cong \operatorname{Hom}_{A\text{-}\mathbf{Mod}}(EP, EX)$ ✓。
**投射。** 设 $EP$ 在 $A\text{-}\mathbf{Mod}$ 里投射，即 $\operatorname{Hom}(EP, -)$ 正合；限制到 $E$ 的像上仍正合，借上面那个自然同构转回 $\mathcal{C}$，得 $\operatorname{Hom}_{\mathcal{C}}(P, -)$ 正合 ✓，故 $P$ 投射 ✓。
**内射。** 对偶：$\operatorname{Hom}_{\mathcal{C}}(-, I) \cong \operatorname{Hom}(-, EI)$，$EI$ 内射使右边把单态射送到满态射；而 $E$ 正合（Freyd–Mitchell 定理的另一半）把 $\mathcal{C}$ 里的单态射送到单态射，故左边也如此 ✓。
**正合部分**就是 Freyd–Mitchell 定理本身的陈述（$E$ 正合），这条只把「反射」补上 ✓。∎

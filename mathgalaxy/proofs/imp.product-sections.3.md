# 单调类定理 $\implies$ 乘积测度由截口积分给出
`imp.product-sections` · 推出 · strong 边 · 根 `../`

`thm.monotone-class` 单调类定理 + `prop.section-measurable` 截口可测 → `thm.product-measure-sections` 乘积测度由截口给出

**⑤ 用单调类定理。** 由 ①②③④，$\mathcal{C}$ 是含所有矩形的一个**单调类**。矩形族生成的**代数**再由矩形构成，所以 $\mathcal{C}$ 含这个代数；由单调类定理，$\mathfrak{m}(\text{代数}) = \mathcal{M}(\text{代数}) = \mathcal{M} \otimes  \mathcal{N}$，于是 $\mathcal{C} = \mathcal{M} \otimes \mathcal{N}$。

**⑥ 推广到 $\sigma$有限。** 取 $X = \bigcup_i X_i$、$Y = \bigcup_i Y_i$（各自测度有限），则 $X \times Y = \bigcup_i (X_i \times Y_i)$。对每个 $i$，把 ⑤ 用在 $E \cap (X_i \times Y_i)$ 上（这一步只用到**有限**测度）；再把 $i$ 加起来，用 MCT 对 $i$ 求极限即可。∎

$>$ ⚠ $\sigma$有限正是在 ⑥ 用掉的：没有它，就没法把无穷测度的空间切成可数块有限块。

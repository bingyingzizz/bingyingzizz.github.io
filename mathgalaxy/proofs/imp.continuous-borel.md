# 连续 $\implies$ Borel 可测
`imp.continuous-borel` · 推出 · strong 边 · 根 `../`

`prop.measurable-criterion` 可测性的两条判定准则 → `cor.continuous-measurable` 连续 ⟹ Borel 可测

设 $f : X \to Y$ 连续，即每个开集的原像是开集。

由定义 $\mathfrak{B}_Y = \mathcal{M}(\{ U \subseteq Y : U\text{ 开} \})$，用判定准则 (2)：只需对生成元（开集）验证原像可测。对开集 $U$，$f^{-1}(U)$ 是 $X$ 中的开集，因而 $\in \mathfrak{B}_X$。故 $f$ 可测。∎

$>$ 注意这个坑：**这个论证对 $(\mathfrak{B}, \mathfrak{B})$ 成立，但对 $(\mathcal{L}, \mathcal{L})$ 不成立** —— 因为 $\mathcal{L}$ 并不由开集生成，它比 $\mathfrak{B}_\mathbb{R}$ 多了很多非 Borel 的零测集子集。

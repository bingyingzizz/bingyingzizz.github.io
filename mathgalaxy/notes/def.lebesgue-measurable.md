# Lebesgue 可测　`def.lebesgue-measurable`　·　说明
根 `../`

⚠ **注意这里有个坑：两个 Lebesgue 可测函数的复合不一定 Lebesgue 可测。**



原因：复合要跑通 (1) 需要中间那个 $\sigma$代数配合，而 $\mathcal{L}$ 严格大于 $\mathfrak{B}_\mathbb{R}$。取 $f : \mathbb{R} \to \mathbb{R} Lebesgue$ 可测、$g : \mathbb{R} \to \mathbb{R} Lebesgue$ 可测，则 $g\circ f$ 关于 $\mathcal{L}$ 未必可测 —— 因为 $g^{-1}$ 只能保证把 $\mathfrak{B}_\mathbb{R}$ 里的集合拉回 $\mathcal{L}$，而 $f^{-1}$ 需要在 $\mathbb{R}$ 里取一个**非 Borel 的 Lebesgue 可测集**才能出问题。

标准修法：让中间那个函数 Borel 可测。若 $g$ 是 Borel 可测、$f$ 是 Lebesgue 可测，则 $g\circ f$ 是 Lebesgue 可测的。

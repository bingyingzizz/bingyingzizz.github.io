# 可测函数　`def.measurable-function`　·　说明
根 `../`

- 原像把**开集**拉回可测 $\iff$ 原像把 **Borel 集**拉回可测：$(\Leftarrow)$ 显然；$(\implies)$ 要用「原像保持 $\sigma$-代数运算」这一条（因为 Borel 集由开集生成）。
- $\iff$ **所有水平集 $\{x : f(x) > a\}$ 可测**（$a \in \mathbb{R}$）：**这是最常用的判据**，只需检验一族生成元，不必检验所有开集。⚠️ 用 $\{f > a\}$ 还是 $\{f \ge a\}$ 都行，但要**统一**（混用会漏掉端点情形）。
- $\iff$ **$f^{+}, f^{-}$ 都可测**：把实值拆成正负部，非负情形再用 $\{f > a\}$。

⚠️ **必须的假设是“靶空间带 Borel $\sigma$-代数”**：$\mathbb{R}$ 上的可测性永远是相对于某个 $\sigma$-代数说的；对 $\overline{\mathbb{R}}$（含 $\pm\infty$）要额外约定 $\pm\infty$ 的原像。
⚠️ **复合可测函数不必然可测**：$f$ 可测、$g$ Borel 可测 $\implies$ $g \circ f$ 可测；但 $g$ 只 Lebesgue 可测时不一定 —— 这是「Borel 可测」与「Lebesgue 可测」必须区分的原因。

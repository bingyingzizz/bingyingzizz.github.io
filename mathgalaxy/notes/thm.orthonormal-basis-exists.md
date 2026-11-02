# 正交基存在　`thm.orthonormal-basis-exists`　·　说明
根 `../`

证法：令 $\mathcal{S} = \{ A \subseteq H : A \text{ 标准正交} \}$，按包含成偏序。

全序子族的并仍标准正交（每个元素只与族里有限多个打交道），故有上界；

Zorn 给极大元 $M$。

若 $\overline{\operatorname{span} M} \ne H$，由正交分解取出 $0 \ne z \perp \overline{\operatorname{span} M}$，则 $M \cup \{z/\|z\|\}$ 严格更大，矛盾。

⭐ 这是**非构造**的存在性（Zorn = 选择公理）：能显式写出正交基的只有少数空间（$L^2[0,1]$ 的 Fourier 基、球面上的球谐函数、Hermite 函数）。

⚠️ 与 Gram–Schmidt 的分工：G–S 只从**可数**线性无关族出发、靠归纳造标准正交集（`thm.gram-schmidt`）；正交基一般不可数，只能靠 Zorn。

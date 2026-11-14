# Pontryagin 类　`def.pontryagin-class`　·　说明
根 `../`

⚠️ **Whitney 公式的 $2$-挠警告**：$p(E\oplus E') = p(E)p(E')$ 在 $H^{*}(B;\mathbb{Z})$ 里**只模 $2$-挠**成立。机制：$p_{k} = (-1)^{k}c_{2k}$ 只取偶次陈类，而 $c_{2k}\bigl((E\oplus E')\otimes\mathbb{C}\bigr)$ 里 $j$ 为奇数的项 $c_{j}(E\otimes\mathbb{C})\,c_{2k-j}(E'\otimes\mathbb{C})$ 被丢掉了；$c_{\text{奇}}$ 恰是 $2$-挠（复化与共轭同构，故 $c_{j} = (-1)^{j}c_{j}$），其乘积仍是 $2$-挠。反例（说明「整系数无条件成立」是错的）：$B = \mathbb{RP}^{2}\times\mathbb{RP}^{2}$、$E = L_{1}\oplus\underline{\mathbb{R}}$、$E' = L_{2}\oplus\underline{\mathbb{R}}$（$L_{i}$ 是第 $i$ 个因子的 tautological 线丛），则 $p_{1}(E) = p_{1}(E') = 0$，而 $p_{1}(E\oplus E') = -c_{2}\bigl((E\oplus E')\otimes\mathbb{C}\bigr) = -xy \ne 0$（$x,y$ 是两个因子的 $H^{2}$ 生成元）。对照：陈类的 Whitney 公式无条件成立。

> 续见 notes/def.pontryagin-class.3.md

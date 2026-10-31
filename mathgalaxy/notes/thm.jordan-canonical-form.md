# Jordan 标准形　`thm.jordan-canonical-form`　·　说明
根 `../`

⭐ 这是**有限维线性代数唯一的完整分类定理**：代数闭域上「相似」由 Jordan 型完全决定（块的大小与特征值的分布）。它同时给出了「相似不变量」的完整清单。

⭐ 证明的两半：主分解（按特征值拆）＋ 在每个根子空间上对幂零算子 $N = T - \lambda I$ 取「$\ker N^{k}$ 的链」并逐层补基（这一步用 `def.quotient-vs` 与归纳）。

⚠ 三个前提都在：**代数闭**（否则没有 $\lambda$）、**有限维**（否则可能连特征值都没有）、**$K$ 是域**。$\mathbb{R}$ 上只能用「实 Jordan 形」或改走有理标准型（`thm.rational-canonical-form`）。

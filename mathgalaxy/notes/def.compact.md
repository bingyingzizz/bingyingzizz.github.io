# 紧　`def.compact`　·　说明
根 `../`

⭐ **只用到开集**：定义里没有任何度量、也没有 $\mathbb{R}^{n}$ —— 紧性是纯拓扑性质，所以它在连续映射下保持、在同胚下不变（`def.continuous-map` / `def.homeomorphism`）。

📌 **等价形式（闭集版）**：每个有限交性质都满足的闭集族必有非空交 —— 即「$\{F_{i}\}$ 闭且任意有限子族交非空 $\implies$ 全族交非空」。这一条在反证时最常用。

📌 **度量空间里的样子**：距离空间上「紧 $\iff$ 列紧 $\iff$ 完备 + 全有界」（`thm.metric-compact-equiv`）—— 那是**定理**（用度量才证得出来），不是定义的一部分。一般拓扑空间里列紧严格更强，两者不等价。

例子：$[a, b] \subseteq \mathbb{R}$ 紧（Heine–Borel，`cor.heine-borel`）；$\mathbb{R}$ 不紧（$\{(-n, n)\}$ 没有有限子覆盖）；$(0, 1]$ 不紧。一般拓扑里的标准例子见 `def.chaus`、`thm.tykhonov`（任意积仍紧）。

# 代数闭域　`def.algebraically-closed`　·　说明
根 `../`

⭐ **$\mathbb{C}$ 是代数闭的**，这就是代数基本定理（`thm.fundamental-algebra`）：$\mathbb{C} = \mathbb{R}(i)$ 是 $\mathbb{R}$ 的代数闭包。而 $\overline{\mathbb{Q}}$（$\mathbb{Q}$ 在 $\mathbb{C}$ 中的代数闭包）是**代数扩张但次数无限**的典型例子 —— 这也正是「代数 $\ne$ 有限」的出处。

⭐ **代数闭包的存在性要靠选择**：把 $F$ 上所有首一不可约多项式排成良序，逐个模掉、归纳地造出一串扩张，再用 **Zorn 引理**取并（并仍是域，且代数）。所以「每个域都有代数闭包」这条定理在图上的位置很特别：它是**域论里少见的需要 AC 的存在性定理**。

⚠ **代数闭包在同构意义下唯一**（都是 $F$ 的代数扩张且代数闭），但**不唯一到唯一同构** —— 例如 $\mathbb{Q}(\sqrt{2})$ 的两个嵌入可以走到 $\overline{\mathbb{Q}}$ 里两个不同的位置。

> 续见 notes/def.algebraically-closed.2.md

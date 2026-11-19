# 分裂域　`def.splitting-field`　·　说明
根 `../`

⭐ 分裂域是「刚好装下全部根」的最小扩域：$K=F(\alpha_{1},\ldots,\alpha_{n})$，只加根、不多加别的。

⭐ **唯一性只在 $F$-同构意义下成立**：不同的域可以同构，所以「$f$ 的分裂域」是一个同构类而不是一个具体的域；见 `thm.splitting-field-unique`。

⭐ 例子：$f = x^{2} - 2$ 在 $\mathbb{Q}$ 上：分裂域 $\mathbb{Q}(\sqrt{2})$，次数 2。$f = x^{3} - 2$ 在 $\mathbb{Q}$ 上：根是 $\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^{2}\sqrt[3]{2}$（$\omega = e^{2\pi i/3}$），分裂域 $\mathbb{Q}(\sqrt[3]{2}, \omega)$，次数 **6** —— 注意它比 $\mathbb{Q}(\sqrt[3]{2})$（次数 3）大，因为**加一个根不等于加全部根**。这正是下面「正规扩张」要管的事。

# Witt 消去定理　`thm.witt-cancellation`　·　说明
根 `../`

**为什么需要「非退化」这个前提**：退化情形下消去律会失败（$\beta = 0$ 时左式恒为 $0$）。这也是为什么整个二次型理论都要先假设非退化 —— 不是技术洁癖，而是消去律的生死线。

⭐ **它是「分类」的最后一块砖**：惯性定理（实情形，`thm.sylvester-law-inertia`）给的是「对角形的符号个数唯一」；Witt 消去给的是「**任意**域上分解的块数唯一」。前者只在 $\mathbb{R}$ 上有效，后者在任意域（char $\ne$ 2）上都成立。

⚠️ $\operatorname{char} K \ne 2$ 不能去：特征 $2$ 时「对称」与「交错」重合、$\frac{1}{2}$ 不存在，配方法与 Witt 理论都要重写（那是另一门学问）。本图不展开。

⭐ 更强的版本叫 **Witt 延拓引理**（`lem.witt-extension`）：非退化子空间之间的等距总能延拓成整个空间的等距。消去定理由它直接推出，证明见边 `imp.witt-cancellation`。

> 续见 notes/thm.witt-cancellation.2.md

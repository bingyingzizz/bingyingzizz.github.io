# Grothendieck 范畴有足够多内射　`prop.grothendieck-enough-injectives`　·　说明
根 `../`

⭐ **这是「右导出函子存在」的存在性保障**。右导出函子 $R^{n}F$ 的标准定义是「取内射消解、施 $F$、取上同调」—— 而这个定义只有在**内射消解总是存在**的前提下才有意义。这条定理说：只要范畴是 Grothendieck 的，就不用担心。

**「足够多」是什么意思**：不是「有很多内射对象」，而是「每个对象都能嵌进某个内射对象里」。这个条件是关于**范畴整体**的，不能逐对象验证。

**用在哪**：$A\text{-}\mathbf{Mod}$、$\operatorname{Ind}(\mathcal{C})$、拓扑斯上的 $\mathbf{Ab}(\mathcal{T})$、$\mathrm{CondAb}$ —— 都是 Grothendieck 范畴，于是右导出函子、导出范畴、谱序列这一整套在它们上面全部可用。这就是 Grothendieck 那一代人挑出「AB5 + 生成元」这两条的全部理由。

📌 随定义而来的另一条（同章）：Grothendieck 范畴**自动满足 AB3\***（有所有极限）—— 极限的存在性不用额外假设。

# L¹ 里的逼近　`thm.approximation-L1`　·　说明
根 `../`

意义：**简单函数与连续函数在 $L^{1}$ 里是稠密的**。所以很多命题只要对这两类函数验证就够了，再取极限。

证明思路：先把 $f$ 拆成 $\operatorname{Re} f^{+}$、$\operatorname{Re} f^{-}$、$\operatorname{Im} f^{+}$、$\operatorname{Im} f^{-}$ 四个非负部分，各自用简单函数逼近（简单函数逼近定理）；$\mathbb{R}$ 的情形再把定义域切成有界块，用连续函数去顶半开区间的指示函数。

⚠ 连续函数那一句**依赖 $\mu$ 是 Lebesgue–Stieltjes 测度**：换一个任意测度，简单函数的逼近照旧，连续函数的说法就不成立了。

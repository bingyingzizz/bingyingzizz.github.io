# 乘积测度由截口给出　`thm.product-measure-sections`　·　说明
根 `../`

这是 Fubini 定理的「集合版本」—— 把函数换成指示函数就是 Fubini。

证明的结构：先设 $\mu$、$\nu$ **有限**，令



$$\mathcal{C} = \{E \in \mathcal{M} \otimes  \mathcal{N} :\text{ 上面两条都成立}\}$$



- 矩形 $E = A \times B$：$\nu(E_x) = \chi_A(x) \nu(B)$，立刻成立；

$\mathcal{C}$ 对**递增并**封闭（用 MCT）；对**递减交**也封闭（用 DCT）；



于是 $\mathcal{C}$ 是一个**单调类**，含所有矩形。矩形族生成的代数由矩形构成，再由单调类定理升级到整个 $\mathcal{M} \otimes  \mathcal{N}$。

最后把「有限」推广到「$\sigma$有限」：取 $X \times Y = \bigcup (X_i \times Y_i)$，对每个 $E \cap (X_i \times Y_i)$ 用已经证好的有限情形，再用 MCT 求和。

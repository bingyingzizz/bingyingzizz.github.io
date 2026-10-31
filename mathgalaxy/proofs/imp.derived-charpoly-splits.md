# 代数基本定理给出 $\mathbb{C}$ 上特征多项式的 $n$ 个根
`imp.derived-charpoly-splits` · 推出 · strong 边 · 根 `../`

`thm.fundamental-algebra` 代数基本定理 → `def.char-poly` 特征多项式

设 $\dim V = n$，$\chi_T(x) = \det(xI_n - A) = x^{n} + a_{n-1}x^{n-1} + \cdots + a_0$ 是 $n$ 次首一多项式，系数在 $K$ 里；本图取 $K = \mathbb{C}$。

**由代数基本定理。** $\mathbb{C}$ 是代数闭域，$\mathbb{C}[x]$ 中不可约多项式恰好是一次多项式，所以 $\chi_T$ 在 $\mathbb{C}[x]$ 里分解成 $n$ 个一次因子：

$$\chi_T(x) = (x-\lambda_1)(x-\lambda_2)\cdots(x-\lambda_n), \qquad \lambda_j \in \mathbb{C},$$

重根按重数计。特征多项式的根恰好是 $T$ 的特征值、重数就是**代数重数**，于是「$T$ 在 $\mathbb{C}$ 上恰有 $n$ 个特征值（计重数）」。

> 续见 proofs/imp.derived-charpoly-splits.2.md

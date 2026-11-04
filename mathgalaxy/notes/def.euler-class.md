# Euler 类　`def.euler-class`　·　说明
根 `../`

**为什么用 Pfaffian 而不是行列式**：$\det$ 在 $\mathrm{SO}(k)$ 共轭下也不变，但它对反对称矩阵是**完全平方**，取 $\sqrt{\det}$ 有符号歧义；$\operatorname{Pf}$ 对 $\mathrm{SO}(k)$ 不变而**对 $\mathrm{O}(k)$ 变号** —— 那个符号**正好**记的事「定向」。所以 Pfaffian 是唯一能把「定向」编码进去的不变多项式（`def.invariant-polynomial` 在 $\mathfrak{o}(k)$ 上的版本）。

⭐ **它为什么只在偶数秩时存在**：Pfaffian 只对偶数阶反对称矩阵有定义。$k$ 为奇数时 $e(E)$ 按定义为 $0$ —— 这与「奇数维闭流形的 Euler 示性数为零」（Poincaré 对偶的推论）一致。

⚠️ **符号约定要留意**：$e(E) = c_{m}(E\otimes\mathbb{C})$ 与 $e(E) = (-1)^{m}c_{m}(E\otimes\mathbb{C})$ 两种约定都在用（差 $(-1)^{m}$，取决于曲率与 Pfaffian 的符号）。本图取 $\operatorname{Pf}(F/2\pi)$ 直接定义，不做换算。

> 续见 notes/def.euler-class.2.md

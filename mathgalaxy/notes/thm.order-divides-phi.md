# 阶整除 Euler 函数　`thm.order-divides-phi`　·　说明
根 `../`

**证明**：设 $k = \operatorname{ord}_{n}(a)$，$H = \{[1], [a], \cdots, [a]^{k-1}\}$ 是单位群里的循环子群，$|H| = k$。由 Lagrange 定理（`thm.lagrange`），$k \mid |G| = \varphi(n)$。



**这是 Euler 定理的「原因」**：Euler 定理不是关于同余的，而是「有限群里元素的阶整除群阶」这句话在 $G = (\mathbb{Z}/n\mathbb{Z})^{\times}$ 上的翻译（见 `imp.nt-lagrange-euler`）。



**推论**：$a$ 是原根 $\iff$ $\operatorname{ord}_{n}(a) = \varphi(n)$ —— 即它在单位群里生成整个群。

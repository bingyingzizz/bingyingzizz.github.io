# 阶整除群阶：Lagrange 定理
`imp.nt-order-phi` · 推出 · strong 边 · 根 `../`

`thm.lagrange` Lagrange 定理 → `thm.order-divides-phi` 阶整除 Euler 函数

设 $\gcd(a, n) = 1$，$G = (\mathbb{Z}/n\mathbb{Z})^{\times}$，$k = \operatorname{ord}_{n}(a)$。



则 $H := \{[1], [a], \cdots, [a]^{k-1}\} \subseteq G$ 是子群：封闭性来自 $[a]^{i}[a]^{j} = [a]^{i+j}$（指数按 $k$ 取模），逆元是 $[a]^{k-1}$。



$|H| = k$：这 $k$ 个元素互不相同（若 $[a]^{i} = [a]^{j}$，$0 \le i < j < k$，则 $[a]^{j-i} = 1$ 与 $k$ 的最小性矛盾）。



由 Lagrange 定理（`thm.lagrange`），$|H|$ 整除 $|G| = \varphi(n)$，故 $k \mid \varphi(n)$。



取 $k \mid \varphi(n)$、$\varphi(n) = k m$ 得 $a^{\varphi(n)} = (a^{k})^{m} \equiv 1$ —— 这就是 Euler 定理。

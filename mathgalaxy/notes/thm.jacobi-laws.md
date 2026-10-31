# Jacobi 符号的计算法则　`thm.jacobi-laws`　·　说明
根 `../`

算法：把 $\left(\frac{a}{n}\right)$ 里的 $a$ 拆成 $2^{k}$ 乘一个奇数，用 $\left(\frac{2}{n}\right)$ 的公式处理 $2$ 的部分；再把剩下的奇数因子用互反律翻过来（符号按 $m \equiv n \equiv 3 \pmod 4$ 判），然后对 $a \bmod n$ 取余 —— 与辗转相除同构，$O(\log n)$ 步。



**为什么不分解 $n$**：互反律允许在 $\left(\frac{m}{n}\right)$ 与 $\left(\frac{n}{m}\right)$ 之间来回换，形状完全对称（除了那个符号）。这条「对称性 + 取余」就是 Jacobi 符号算法的全部。



与 Legendre 符号的关系：$n$ 素时两者一致；$n$ 合数时 Jacobi 只是「乘积形式」，见 `def.jacobi-symbol` 的警告。

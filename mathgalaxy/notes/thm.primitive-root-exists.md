# 模素数有原根　`thm.primitive-root-exists`　·　说明
根 `../`

**证明**：关键是计数。对每个 $d \mid p-1$，设 $\psi(d)$ 为 $\mathbb{F}_{p}^{\times}$ 中**阶恰为** $d$ 的元素个数。由「阶整除 $\varphi(p) = p-1$」（`thm.order-divides-phi`）与「$x^{d} = 1$ 至多有 $d$ 个解」得



$$\sum_{d \mid p-1}\psi(d) = p - 1 = \sum_{d \mid p-1}\varphi(d) .$$



再证 $\psi(d) \le \varphi(d)$：若存在阶为 $d$ 的元素 $g$，则阶为 $d$ 的元素恰是 $g^{t}$（$\gcd(t,d) = 1$），共 $\varphi(d)$ 个；若不存在，则 $\psi(d) = 0$。两种情形都有 $\psi(d) \le \varphi(d)$，而总和相等，故每项都相等 —— 特别地 $\psi(p-1) = \varphi(p-1) > 0$。



所以原根存在，且个数是 $\varphi(p-1)$。这条证明只用到「多项式根的个数」与「$\sum_{d\mid n}\varphi(d) = n$」两件事。



⚠ 一般的 $n$ 只有 $1, 2, 4, p^{k}, 2p^{k}$ 有原根 —— 那需要单独处理 $p^{k}$（Hensel 式提升），本图未收录。

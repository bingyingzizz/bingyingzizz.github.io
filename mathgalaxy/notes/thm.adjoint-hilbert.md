# 伴随算子　`thm.adjoint-hilbert`　·　说明
根 `../`

存在性完全靠 Riesz：固定 $x \in K$，泛函 $y \mapsto \langle x, u(y)\rangle_K$ 在 $H$ 上连续（界 $\le \|x\|\,\|u\|$），由 Riesz 表示得唯一的 $u^*(x)$。

再验 $u^*$ 线性（由 $\langle x, u(\cdot)\rangle$ 对 $x$ 线性）与有界；

$\|u^*\| = \|u\|$ 用两次 sup 交换。

⭐ 这解释了为什么 Banach 空间没有「伴随」而只有「转置/共轭」：转置活在**对偶**之间（${}^t\!: F^* \to E^*$），而 Hilbert 空间里 $H^* \cong H$ 让转置可以搬回空间上。

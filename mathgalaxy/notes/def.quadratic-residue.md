# 二次剩余　`def.quadratic-residue`　·　说明
根 `../`

$p$ 是奇素数时，$1, \cdots, p-1$ 里恰有 $(p-1)/2$ 个二次剩余：映射 $x \mapsto x^{2}$ 在 $\mathbb{F}_{p}^{\times}$ 上是 $2$ 对 $1$（$x$ 与 $-x$ 同像，且 $x^{2} = y^{2}$ $\implies$ $(x-y)(x+y) = 0$ $\implies$ $x = \pm y$），所以像集大小是 $(p-1)/2$。



模合数时这套干净的结构就没了（$\mathbb{Z}/n$ 不是域），要换成 Jacobi 符号的技巧 —— 这也是为什么二次互反律只在素数上陈述。

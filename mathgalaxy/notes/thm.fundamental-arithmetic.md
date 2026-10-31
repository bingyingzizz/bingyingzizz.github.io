# 算术基本定理　`thm.fundamental-arithmetic`　·　说明
根 `../`

存在性：对 $n$ 归纳 —— $n$ 是素数则完事；否则 $n = ab$ 且 $1 < a, b < n$，对 $a, b$ 各用归纳假设再合并。



唯一性：用 Euclid 引理（$p \mid ab \implies p \mid a$ 或 $p \mid b$）。这是唯一分解整环（UFD）的标准论证。



代数里的抽象版本是「$\mathbb{Z}$ 是唯一分解整环」：$K[x]$ 也有（`thm.poly-ufd`），$\mathbb{Z}[\sqrt{-5}]$ 没有（$6 = 2\cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$）。层级：Euclid 整环 $\implies$ UFD $\implies$ gcd 整环。

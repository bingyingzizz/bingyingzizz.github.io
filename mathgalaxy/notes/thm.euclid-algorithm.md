# 辗转相除法　`thm.euclid-algorithm`　·　说明
根 `../`

这是初等数论里**唯一不依赖唯一分解**的工具：$\gcd$ 的存在性与 Bézout 系数都从它出来，而算术基本定理反过来要用 $\gcd$。



复杂度：余数至少按 Fibonacci 速度下降，步数 $O(\log \min(|a|, |b|))$ —— 最坏输入正是相邻 Fibonacci 数（Lamé 定理）。



在 $K[x]$ 里同样成立（用次数代替绝对值），所以「$\mathbb{Z}$ 与 $K[x]$ 都是 Euclid 整环」是同一句话。

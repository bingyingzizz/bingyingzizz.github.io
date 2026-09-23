# Cantor 定理　`thm.cantor`　·　说明
根 `../`

⭐ 推论：**没有最大的基数** —— 从任何集合出发，取幂集就得到更大的。于是

$\aleph_0 < 2^{\aleph_0} < 2^{2^{\aleph_0}} < \cdots$

取 $A = \mathbb{N}$ 就得到「$\mathbb{R}$ 不可数」（$|\mathbb{R}| = 2^{\aleph_0}$）。

证明用的是**对角线法**（见边的证明）：那个「对角集」$D = \{ a \in A : a \notin f(a) \}$ 不在 $f$ 的像里。这是数学史上最会产定理的一个构造，往后 Cantor–Bernstein、Gödel 不完备定理、停机问题用的都是它。

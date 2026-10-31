# 归纳 $\implies$ 二项式定理
`imp.binomial` · 推出 · strong 边 · 根 `../`

`def.power` 整数幂 + `thm.induction` 归纳原理与递推定义 → `thm.binomial` 二项式定理

$n = 0$ 时两边都是 $1$。设对 $n$ 成立，则

$$(a+b)^{n+1} = \left(\sum_{k=0}^{n} \binom{n}{k} a^{k}b^{n-k}\right)(a+b) = \sum_{k=0}^{n} \binom{n}{k} a^{k+1}b^{n-k} + \sum_{k=0}^{n} \binom{n}{k} a^{k}b^{n-k+1}.$$

第一个和里令 $j = k+1$，得 $\sum_{j=1}^{n+1} \binom{n}{j-1} a^{j}b^{n+1-j}$；第二个和是 $\sum_{j=0}^{n} \binom{n}{j} a^{j}b^{n+1-j}$。两者相加，$1 \le j \le n$ 的系数是 $\binom{n}{j-1} + \binom{n}{j} = \binom{n+1}{j}$（Pascal），端点系数为 $1$。这正是 $(a+b)^{n+1}$ 的展开。

Pascal 递推本身由 $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$ 直接算得；$\binom{n}{k} \in \mathbb{N}$ 由递推与归纳（或在 $\mathbb{N}$ 上直接做组合计数）得到。$\blacksquare$

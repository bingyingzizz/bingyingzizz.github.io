# 阿基米德性质 $\implies$ $1/n < \varepsilon$ 与取整
`imp.archimedean-epsilon` · 推出 · strong 边 · 根 `../`

`lem.archimedean` Archimedes 性质 → `cor.archimedean-epsilon` Archimedes 的 ε 形式与取整

**(i)** 给定 $\varepsilon > 0$。由阿基米德性质（用于 $x = 1/\varepsilon$）存在 $n \in \mathbb{N}$ 使 $n > 1/\varepsilon$。这样的 $n \ge 1$；两边除以 $n\varepsilon > 0$ 得 $1/n < \varepsilon$。

**(ii) 存在性。** 由阿基米德性质取 $N \in \mathbb{N}$ 使 $N > |x|$，则 $-N < x < N$。令

$$S := \{ m \in \mathbb{Z} : m \le x \}.$$

$S$ 非空（$-N \in S$）且有上界 $x$。$\mathbb{Z}$ 的每个非空有上界子集有最大元（$\mathbb{N}$ 的良序性向上搬一层），取 $n := \max S$。则 $n \le x$；又 $n + 1 \notin S$，即 $n + 1 > x$。

**唯一性。** 若 $n \le x < n+1$ 且 $m \le x < m+1$，设 $n < m$。则 $m \ge n+1 > x$，与 $m \le x$ 矛盾；$m < n$ 对称。故 $n = m$。$\blacksquare$

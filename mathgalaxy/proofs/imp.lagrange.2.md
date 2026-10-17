# 陪集构成划分 + 平移是双射 $\implies$ Lagrange
`imp.lagrange` · 推出 · strong 边 · 根 `../`

`def.subgroup` 子群 → `thm.lagrange` Lagrange 定理

**第三步：数个数。** 设不同左陪集为 $g_1H, \ldots, g_k H$。由第一步 $G = \bigsqcup_{i} g_i H$，两边取基数并用第二步：

$$|G| = \sum_{i=1}^{k} |g_i H| = k \, |H|,$$

故 $|H| \mid |G|$ 且 $k = |G|/|H| = [G : H]$。∎

> ⭐ 整个证明没有用到任何关于群结构的东西 —— 只用了「$H$ 对乘法封闭且含逆」这两个子群条件。所以 Lagrange 是一条**纯计数**定理。

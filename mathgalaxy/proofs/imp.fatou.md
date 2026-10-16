# MCT $\implies$ Fatou 引理
`imp.fatou` · 推出 · strong 边 · 根 `../`

`thm.mct` 单调收敛定理 → `lem.fatou` Fatou 引理

设 $g_n = \inf_{k \ge n} f_k$，则

$\cdot$ $g_n \le f_k$ 对一切 $k \ge n$ 成立，故 $\int g_n \le \inf_{k\ge n} \int f_k$；
$\cdot$ $\{g_n\}$ 是 $L^{+}$ 中的**递增**列（下确界取的集合越来越少），且 $\lim_n g_n = \liminf_k f_k$。

对递增列 $\{g_n\}$ 用 MCT：

$$\int \liminf_{n\to\infty} f_n = \int \lim_{n\to\infty} g_n = \lim_{n\to\infty} \int g_n \le \lim_{n\to\infty} \inf_{k \ge n} \int f_k = \liminf_{n\to\infty} \int f_n$$

∎

$>$ 整个证明就是把「liminf 定义成递增列的上确界」这件事翻译一遍 —— MCT 之外什么都没用。

> Fatou 就是 MCT 在「不单调」情形下的残留物：单调性换成了 liminf。

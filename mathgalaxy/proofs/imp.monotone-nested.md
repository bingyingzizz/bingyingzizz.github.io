# 单调有界定理 $\implies$ 闭区间套定理
`imp.monotone-nested` · 推出 · strong 边 · 根 `../`

`thm.monotone-convergence` 单调有界定理 → `lem.nested-intervals` 闭区间套定理

设 $I_n = [a_n, b_n]$ 嵌套且 $b_n - a_n \to 0$。

1. 由 $I_{n+1} \subseteq I_n$ 得 $a_1 \le a_2 \le \cdots$ 且 $b_1 \ge b_2 \ge \cdots$。于是 $\{a_n\}$ 递增且有上界 $b_1$，$\{b_n\}$ 递减且有下界 $a_1$。
2. 由单调有界定理，$a_n \to a$、$b_n \to b$，其中 $a = \sup_n a_n$、$b = \inf_n b_n$。
3. $b - a = \lim (b_n - a_n) = 0$，故 $a = b$，记这个公共值为 $x$。
4. 对每个 $n$ 有 $a_n \le x \le b_n$（$x$ 是 $\{a_n\}$ 的上界、又是 $\{b_n\}$ 的下界），所以 $x \in \bigcap_n I_n$。
5. 若 $y \in \bigcap_n I_n$，则 $a_n \le y \le b_n$ 对一切 $n$ 成立，令 $n \to \infty$ 得 $y = x$。故交集恰含一点。∎

> 注意第 3 步用的是「长度趋于零」这个前提，第 4、5 步用的是「闭」。

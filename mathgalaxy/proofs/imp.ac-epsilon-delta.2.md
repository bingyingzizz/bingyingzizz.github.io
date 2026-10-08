# 绝对连续 $\implies \varepsilon$–$\delta$ 刻画（$\nu$ 有限时）
`imp.ac-epsilon-delta` · 推出 · strong 边 · 根 `../`

`def.absolute-continuity` 绝对连续 → `thm.ac-epsilon-delta` 绝对连续的 ε–δ 刻画

另一方面 $\nu(F_k) \ge \nu(E_k) \ge \varepsilon$ 对一切 $k$ 成立；由 $\nu$ 有限与测度的下连续性（$F_k \searrow  F$，首项有限）得

$$\nu(F) = \lim_k \nu(F_k) \ge \varepsilon > 0$$

这与 $\nu \ll  \mu$（$\mu (F) = 0$ 应推出 $\nu (F) = 0$）矛盾。故这样的 $\varepsilon$ 不存在，即对每个 $\varepsilon > 0$ 都有对应的 $\delta$。∎

$>$ ⭐ 反证里那个「对一切 $n$ 都能找到」是取出的关键：它把「不连续」翻译成了一列越来越小的坏集合，再用 Borel–Cantelli 型的尾并把它们压成零集。

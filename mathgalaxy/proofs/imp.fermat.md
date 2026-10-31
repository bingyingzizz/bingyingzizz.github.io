# 导数与局部极值的定义 $\implies$ Fermat 引理
`imp.fermat` · 推出 · strong 边 · 根 `../`

`def.local-extremum` 局部极值 + `def.derivative` 导数 → `thm.fermat` Fermat 引理

设 $x_0$ 是内点局部极大值点（极小同理，把不等号反向）。由定义存在 $\delta > 0$，使 $|x - x_0| < \delta$ 时 $f(x) \le f(x_0)$。

对 $0 < h < \delta$ 有 $f(x_0 + h) - f(x_0) \le 0$，故差商 $\le 0$；对 $-\delta < h < 0$ 差商的分子 $\le 0$ 而分母 $< 0$，故差商 $\ge 0$。

于是

$$\lim_{h \to 0^{+}} \frac{f(x_0 + h) - f(x_0)}{h} \le 0, \qquad \lim_{h \to 0^{-}} \frac{f(x_0 + h) - f(x_0)}{h} \ge 0$$

而 $f$ 在 $x_0$ 可导，两个单侧极限都等于 $f'(x_0)$，故 $f'(x_0) \le 0$ 且 $f'(x_0) \ge 0$，即 $f'(x_0) = 0$。∎

> 「内点」用在了 $h$ 可以取正负两侧 —— 若 $x_0$ 是端点，只有一侧的差商可谈，结论就不成立（$f(x) = x$ 在 $[0, 1]$ 的端点）。

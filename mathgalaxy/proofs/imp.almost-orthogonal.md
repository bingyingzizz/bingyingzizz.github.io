# imp.almost-orthogonal
`imp.almost-orthogonal` · 推出 · strong 边 · 根 `../`

`def.normed-space` 赋范空间 + `def.norm` 范数 → `lem.almost-orthogonal` 几乎正交引理

证明：取 $x \notin F$，因 $F$ 闭有 $d := d(x, F) > 0$；取 $y' \in F$ 使 $\|x - y'\| \le d/(1 - \varepsilon)$，令 $e = (x - y')/\|x - y'\|$。

对任意 $y \in F$，$y' + \|x - y'\|\,y \in F$，于是



$$\|e - y\| = \frac{\|x - y' - \|x - y'\| y\|}{\|x - y'\|} \ge \frac{d}{\|x - y'\|} \ge 1 - \varepsilon .$$

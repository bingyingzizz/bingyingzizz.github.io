# imp.lq-in-lp-plus-lr
`imp.lq-in-lp-plus-lr` · 推出 · strong 边 · 根 `../`

`def.lp-norm` L^p 范数 + `def.measure-space` 有限 / σ-有限 / 半有限 → `prop.lq-in-lp-plus-lr` L^q 落在 L^p + L^r 里

证明：取 $f \in L^q$，按「大」与「小」把它切开 ——



$$E := \{\, x : |f(x)| > 1 \,\}, \qquad g := f \chi_E, \qquad h := f \chi_{E^c}$$



则



$$|g|^p = |f|^p \chi_E \le |f|^q \chi_E, \qquad |h|^r = |f|^r \chi_{E^c} \le |f|^q \chi_{E^c}$$



（第二式用到 $|f| \le 1$ 在 $E^c$ 上成立。）于是 $g \in L^p$、$h \in L^r$。$r = \infty$ 时 $\|h\|_\infty \le 1$，显然。∎

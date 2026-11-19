# imp.ls-premeasure
`imp.ls-premeasure` · 推出 · strong 边 · 根 `../`

`def.premeasure` 预测度 + `def.fundamental-class` 基本类 → `prop.ls-premeasure` F 给出的预测度

**右连续**给每个 $j$ 一个 $c_{j} > b_{j}$ 使 $F(c_{j}) < F(b_{j}) + \varepsilon 2^{-j}$；

再用右连续取 $\delta > 0$ 使 $F(a+\delta) < F(a) + \varepsilon$。

开区间族 $\{(a_{j}, c_{j})\}$ 覆盖紧集 $[a+\delta, b]$，抽有限子覆盖并按端点排序相加，得
$$F(b) - F(a) \le 2\varepsilon + \sum_{j}\bigl(F(b_{j}) - F(a_{j})\bigr),$$
令 $\varepsilon \to 0$ 即得 ✓。∎
